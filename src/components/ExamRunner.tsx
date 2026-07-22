import { useEffect, useRef, useState } from 'react'
import type { PreparedQuestion } from '../utils/quizEngine'
import { EXAM_DURATION_SECONDS } from '../utils/quizEngine'
import QuestionView from './QuestionView'

interface Props {
  questions: PreparedQuestion[]
  onFinish: (answers: (number | null)[]) => void
}

export default function ExamRunner({ questions, onFinish }: Props) {
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState<(number | null)[]>(() => questions.map(() => null))
  const [secondsLeft, setSecondsLeft] = useState(EXAM_DURATION_SECONDS)
  const [confirmingFinish, setConfirmingFinish] = useState(false)
  const finishedRef = useRef(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          clearInterval(timer)
          if (!finishedRef.current) {
            finishedRef.current = true
            onFinish(answers)
          }
          return 0
        }
        return s - 1
      })
    }, 1000)
    return () => clearInterval(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function select(i: number) {
    setAnswers((prev) => {
      const next = prev.slice()
      next[index] = i
      return next
    })
  }

  function finishNow() {
    if (finishedRef.current) return
    finishedRef.current = true
    onFinish(answers)
  }

  const minutes = Math.floor(secondsLeft / 60)
  const seconds = secondsLeft % 60
  const timerClass = secondsLeft < 300 ? 'timer-danger' : secondsLeft < 900 ? 'timer-warn' : 'timer-safe'
  const q = questions[index]
  const answeredCount = answers.filter((a) => a !== null).length
  const isLast = index === questions.length - 1

  return (
    <div className="runner">
      <div className="runner-header">
        <div className={`timer ${timerClass}`}>
          ⏱ {minutes}:{seconds.toString().padStart(2, '0')}
        </div>
        <div className="answered-count">
          {answeredCount} / {questions.length} répondues
        </div>
      </div>

      <QuestionView
        question={q}
        index={index}
        total={questions.length}
        selected={answers[index]}
        onSelect={select}
        revealed={false}
      />

      <div className="nav-row">
        <button disabled={index === 0} onClick={() => setIndex((i) => i - 1)}>
          ← Précédent
        </button>
        {!isLast ? (
          <button className="primary" onClick={() => setIndex((i) => i + 1)}>
            Suivant →
          </button>
        ) : (
          <button className="primary" onClick={() => setConfirmingFinish(true)}>
            Terminer l'examen ✓
          </button>
        )}
      </div>

      <details className="jump-details">
        <summary>🗺️ Aller à une question</summary>
        <div className="qa-jump">
          {questions.map((_, i) => (
            <button
              key={i}
              className={`jump-dot ${i === index ? 'current' : ''} ${answers[i] !== null ? 'answered' : ''}`}
              onClick={() => setIndex(i)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </details>

      {confirmingFinish ? (
        <div className="confirm-box">
          <p>
            Terminer maintenant ? {questions.length - answeredCount > 0 && (
              <>Il reste <strong>{questions.length - answeredCount}</strong> question(s) sans réponse.</>
            )}
          </p>
          <div className="nav-row">
            <button onClick={() => setConfirmingFinish(false)}>Continuer l'examen</button>
            <button className="primary danger-btn" onClick={finishNow}>
              Oui, terminer
            </button>
          </div>
        </div>
      ) : (
        <button className="link-btn" onClick={() => setConfirmingFinish(true)}>
          Terminer maintenant
        </button>
      )}
    </div>
  )
}
