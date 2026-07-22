import { useState } from 'react'
import type { PreparedQuestion } from '../utils/quizEngine'
import QuestionView from './QuestionView'

interface Props {
  questions: PreparedQuestion[]
  onFinish: (answers: (number | null)[]) => void
  onExit: () => void
}

export default function PracticeRunner({ questions, onFinish, onExit }: Props) {
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState<(number | null)[]>(() => questions.map(() => null))
  const [revealed, setRevealed] = useState(false)

  const q = questions[index]

  function select(i: number) {
    if (revealed) return
    setAnswers((prev) => {
      const next = prev.slice()
      next[index] = i
      return next
    })
    setRevealed(true)
  }

  function next() {
    if (index < questions.length - 1) {
      setIndex((i) => i + 1)
      setRevealed(false)
    } else {
      onFinish(answers)
    }
  }

  const correctSoFar = answers.filter((a, i) => a !== null && a === questions[i].displayCorrectIndex).length

  return (
    <div className="runner">
      <div className="runner-header">
        <div className="answered-count">
          ✅ {correctSoFar} correcte(s) sur {index + (revealed ? 1 : 0)}
        </div>
        <button className="link-btn" onClick={onExit}>
          Quitter
        </button>
      </div>

      <QuestionView
        question={q}
        index={index}
        total={questions.length}
        selected={answers[index]}
        onSelect={select}
        revealed={revealed}
      />

      {revealed && (
        <div className="nav-row">
          <button className="primary" onClick={next}>
            {index < questions.length - 1 ? 'Question suivante →' : 'Voir le bilan'}
          </button>
        </div>
      )}
    </div>
  )
}
