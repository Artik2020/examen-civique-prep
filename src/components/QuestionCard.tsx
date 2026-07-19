import { useState, useEffect } from 'react'
import type { Question } from '../types'

interface Props {
  question: Question
  isWeak: boolean
  onAnswer: (correct: boolean) => void
  onToggleWeak: () => void
}

const LABELS = ['A', 'B', 'C', 'D']
const DIFFICULTY_COLOR: Record<string, string> = {
  Easy: 'diff-easy',
  Medium: 'diff-medium',
  Hard: 'diff-hard',
}

export default function QuestionCard({ question, isWeak, onAnswer, onToggleWeak }: Props) {
  const [selected, setSelected] = useState<number | null>(null)
  const answered = selected !== null
  const correct = answered && selected === question.answer

  useEffect(() => {
    setSelected(null)
  }, [question.id])

  function choose(idx: number) {
    if (answered) return
    setSelected(idx)
    onAnswer(idx === question.answer)
  }

  function optionClass(idx: number): string {
    if (!answered) return 'option'
    if (idx === question.answer) return 'option option-correct'
    if (idx === selected) return 'option option-wrong'
    return 'option option-dim'
  }

  return (
    <div className="question-card">
      <div className="question-meta">
        <span className="meta-tag">{question.country}</span>
        <span className="meta-sep">›</span>
        <span className="meta-tag">{question.region}</span>
        <span className="meta-sep">›</span>
        <span className="meta-tag">{question.topic}</span>
        <span className={`meta-diff ${DIFFICULTY_COLOR[question.difficulty]}`}>{question.difficulty}</span>
        <button
          className={`weak-btn ${isWeak ? 'weak-btn-active' : ''}`}
          onClick={onToggleWeak}
          title={isWeak ? 'Remove from weak list' : 'Mark as weak'}
        >
          {isWeak ? '★ Weak' : '☆ Mark weak'}
        </button>
      </div>

      <p className="question-text">{question.question}</p>

      <p className="choose-label">Choose one answer:</p>

      <div className="options">
        {question.options.map((opt, idx) => (
          <button
            key={idx}
            className={optionClass(idx)}
            onClick={() => choose(idx)}
            disabled={answered}
          >
            <span className="option-letter">{LABELS[idx]}.</span>
            <span className="option-text">{opt}</span>
            {answered && idx === question.answer && <span className="option-tick">✓</span>}
            {answered && idx === selected && idx !== question.answer && <span className="option-cross">✗</span>}
          </button>
        ))}
      </div>

      {answered && (
        <div className={`feedback ${correct ? 'feedback-correct' : 'feedback-wrong'}`}>
          {correct ? (
            <p className="feedback-headline">✓ Correct</p>
          ) : (
            <p className="feedback-headline">
              ✗ Wrong — Correct answer: <strong>{LABELS[question.answer]}. {question.options[question.answer]}</strong>
            </p>
          )}
          <p className="feedback-explanation">{question.explanation}</p>
        </div>
      )}
    </div>
  )
}
