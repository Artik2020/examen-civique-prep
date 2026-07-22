import { useEffect, useMemo, useState } from 'react'
import type { Mention, Theme } from './types'
import { allQuestions } from './data'
import { buildExam, buildPracticeSet, questionsForMention, type PreparedQuestion } from './utils/quizEngine'
import { getHistory, saveAttempt, type AttemptRecord } from './utils/storage'
import { fetchProfile, signOut, updateDisplayName, type StudentProfile } from './utils/auth'
import { isSupabaseConfigured, supabase } from './lib/supabase'
import AuthGate from './components/AuthGate'
import Home from './components/Home'
import ExamRunner from './components/ExamRunner'
import PracticeRunner from './components/PracticeRunner'
import ResultsSummary from './components/ResultsSummary'
import PrivateSpace from './components/PrivateSpace'
import AdminPanel from './components/AdminPanel'

type Screen =
  | { name: 'home' }
  | { name: 'exam'; mention: Mention; questions: PreparedQuestion[] }
  | { name: 'practice'; mention: Mention; questions: PreparedQuestion[] }
  | { name: 'results'; mode: 'exam' | 'practice'; mention: Mention; questions: PreparedQuestion[]; answers: (number | null)[] }
  | { name: 'space' }
  | { name: 'admin' }

export default function App() {
  const [authChecked, setAuthChecked] = useState(false)
  const [userId, setUserId] = useState<string | null>(null)
  const [profile, setProfile] = useState<StudentProfile | null>(null)
  const [screen, setScreen] = useState<Screen>({ name: 'home' })
  const [history, setHistory] = useState<AttemptRecord[]>([])

  const counts = useMemo(() => {
    const mentions: Mention[] = ['csp', 'cr', 'naturalisation']
    const result = {} as Record<Mention, number>
    mentions.forEach((m) => {
      result[m] = questionsForMention(allQuestions, m).length
    })
    return result
  }, [])

  useEffect(() => {
    if (!isSupabaseConfigured || !supabase) {
      setAuthChecked(true)
      return
    }
    supabase.auth.getSession().then(({ data }) => {
      setUserId(data.session?.user.id ?? null)
      setAuthChecked(true)
    })
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      setUserId(session?.user.id ?? null)
      setScreen({ name: 'home' })
    })
    return () => sub.subscription.unsubscribe()
  }, [])

  useEffect(() => {
    if (!userId) {
      setProfile(null)
      setHistory([])
      return
    }
    fetchProfile(userId).then(setProfile)
    getHistory(userId).then(setHistory)
  }, [userId])

  if (!isSupabaseConfigured) {
    return (
      <div className="app">
        <AuthGate />
      </div>
    )
  }

  if (!authChecked) {
    return (
      <div className="app">
        <p className="empty-state">Chargement…</p>
      </div>
    )
  }

  if (!userId || !profile) {
    return (
      <div className="app">
        <AuthGate />
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

  async function finishRun(
    mode: 'exam' | 'practice',
    mention: Mention,
    questions: PreparedQuestion[],
    answers: (number | null)[],
  ) {
    if (!userId) return
    const correct = answers.filter((a, i) => a !== null && a === questions[i].displayCorrectIndex).length
    const byTheme: AttemptRecord['byTheme'] = {}
    questions.forEach((q, i) => {
      const entry = byTheme[q.theme] ?? { total: 0, correct: 0 }
      entry.total += 1
      if (answers[i] === q.displayCorrectIndex) entry.correct += 1
      byTheme[q.theme] = entry
    })
    await saveAttempt(userId, { mention, mode, total: questions.length, correct, byTheme })
    setHistory(await getHistory(userId))
    setScreen({ name: 'results', mode, mention, questions, answers })
  }

  return (
    <div className="app">
      {screen.name === 'home' && (
        <Home
          counts={counts}
          profileName={profile.display_name}
          isAdmin={profile.is_admin}
          onStartExam={startExam}
          onStartPractice={startPractice}
          onOpenSpace={() => setScreen({ name: 'space' })}
          onOpenAdmin={() => setScreen({ name: 'admin' })}
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
          onProfileRenamed={async (name) => {
            await updateDisplayName(profile.id, name)
            setProfile({ ...profile, display_name: name })
          }}
          onSignOut={async () => {
            await signOut()
          }}
        />
      )}

      {screen.name === 'admin' && profile.is_admin && (
        <AdminPanel onBackHome={() => setScreen({ name: 'home' })} />
      )}
    </div>
  )
}
