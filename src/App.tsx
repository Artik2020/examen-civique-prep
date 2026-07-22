import { useMemo, useState } from 'react'
import type { Mention, Theme } from './types'
import { allQuestions } from './data'
import { buildExam, buildPracticeSet, questionsForMention, type PreparedQuestion } from './utils/quizEngine'
import { getHistory, saveAttempt, type AttemptRecord } from './utils/storage'
import { clearActiveProfile, getActiveProfile, type Profile } from './utils/profiles'
import ProfileGate from './components/ProfileGate'
import Home from './components/Home'
import ExamRunner from './components/ExamRunner'
import PracticeRunner from './components/PracticeRunner'
import ResultsSummary from './components/ResultsSummary'
import PrivateSpace from './components/PrivateSpace'

type Screen =
  | { name: 'home' }
  | { name: 'exam'; mention: Mention; questions: PreparedQuestion[] }
  | { name: 'practice'; mention: Mention; questions: PreparedQuestion[] }
  | { name: 'results'; mode: 'exam' | 'practice'; mention: Mention; questions: PreparedQuestion[]; answers: (number | null)[] }
  | { name: 'space' }

export default function App() {
  const [profile, setProfile] = useState<Profile | null>(() => getActiveProfile())
  const [screen, setScreen] = useState<Screen>({ name: 'home' })
  const [history, setHistory] = useState<AttemptRecord[]>(() => (profile ? getHistory(profile.id) : []))

  const counts = useMemo(() => {
    const mentions: Mention[] = ['csp', 'cr', 'naturalisation']
    const result = {} as Record<Mention, number>
    mentions.forEach((m) => {
      result[m] = questionsForMention(allQuestions, m).length
    })
    return result
  }, [])

  if (!profile) {
    return (
      <div className="app">
        <ProfileGate
          onEnter={(p) => {
            setProfile(p)
            setHistory(getHistory(p.id))
            setScreen({ name: 'home' })
          }}
        />
      </div>
    )
  }

  function startExam(mention: Mention) {
    const pool = questionsForMention(allQuestions, mention)
    setScreen({ name: 'exam', mention, questions: buildExam(pool) })
  }

  function startPractice(mention: Mention, themes: Theme[]) {
    const pool = questionsForMention(allQuestions, mention).filter((q) => themes.includes(q.theme))
    setScreen({ name: 'practice', mention, questions: buildPracticeSet(pool) })
  }

  function finishRun(mode: 'exam' | 'practice', mention: Mention, questions: PreparedQuestion[], answers: (number | null)[]) {
    if (!profile) return
    const correct = answers.filter((a, i) => a !== null && a === questions[i].displayCorrectIndex).length
    const byTheme: AttemptRecord['byTheme'] = {}
    questions.forEach((q, i) => {
      const entry = byTheme[q.theme] ?? { total: 0, correct: 0 }
      entry.total += 1
      if (answers[i] === q.displayCorrectIndex) entry.correct += 1
      byTheme[q.theme] = entry
    })
    const record: AttemptRecord = {
      id: `${Date.now()}`,
      date: new Date().toISOString(),
      mention,
      mode,
      total: questions.length,
      correct,
      byTheme,
    }
    saveAttempt(profile.id, record)
    setHistory(getHistory(profile.id))
    setScreen({ name: 'results', mode, mention, questions, answers })
  }

  return (
    <div className="app">
      {screen.name === 'home' && (
        <Home
          counts={counts}
          profileName={profile.name}
          onStartExam={startExam}
          onStartPractice={startPractice}
          onOpenSpace={() => setScreen({ name: 'space' })}
        />
      )}

      {screen.name === 'exam' && (
        <ExamRunner
          questions={screen.questions}
          onFinish={(answers) => finishRun('exam', screen.mention, screen.questions, answers)}
        />
      )}

      {screen.name === 'practice' && (
        <PracticeRunner
          questions={screen.questions}
          onFinish={(answers) => finishRun('practice', screen.mention, screen.questions, answers)}
          onExit={() => setScreen({ name: 'home' })}
        />
      )}

      {screen.name === 'results' && (
        <ResultsSummary
          questions={screen.questions}
          answers={screen.answers}
          mode={screen.mode}
          onBackHome={() => setScreen({ name: 'home' })}
        />
      )}

      {screen.name === 'space' && (
        <PrivateSpace
          profile={profile}
          history={history}
          onBackHome={() => setScreen({ name: 'home' })}
          onCleared={() => setHistory([])}
          onProfileRenamed={(name) => setProfile({ ...profile, name })}
          onSwitchProfile={() => {
            clearActiveProfile()
            setProfile(null)
            setScreen({ name: 'home' })
          }}
        />
      )}
    </div>
  )
}
