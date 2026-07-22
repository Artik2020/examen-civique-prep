import type { PreparedQuestion } from '../utils/quizEngine'
import { THEME_ICONS, THEME_LABELS } from '../types'

interface Props {
  question: PreparedQuestion
  index: number
  total: number
  selected: number | null
  onSelect: (i: number) => void
  revealed: boolean
}

const LETTERS = ['A', 'B', 'C', 'D']

export default function QuestionView({ question, index, total, selected, onSelect, revealed }: Props) {
  const progressPct = Math.round(((index + 1) / total) * 100)

  return (
    <div className="question-view">
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${progressPct}%` }} />
      </div>
      <div className="question-progress">
        <span>
          Question {index + 1} / {total}
        </span>
        <span className={`theme-pill ${question.theme === 'situation' ? 'situation' : ''}`}>
          {THEME_ICONS[question.theme]} {THEME_LABELS[question.theme]}
        </span>
      </div>
      <h2 className="question-text">{question.question}</h2>
      <div className="options">
        {question.displayOptions.map((opt, i) => {
          let cls = 'option'
          if (selected === i) cls += ' selected'
          if (revealed) {
            if (i === question.displayCorrectIndex) cls += ' correct'
            else if (selected === i) cls += ' incorrect'
          }
          return (
            <button key={i} className={cls} disabled={revealed} onClick={() => onSelect(i)}>
              <span className="option-letter">{LETTERS[i]}</span>
              <span className="option-text">{opt}</span>
              {revealed && i === question.displayCorrectIndex && <span className="option-icon">✓</span>}
              {revealed && selected === i && i !== question.displayCorrectIndex && (
                <span className="option-icon">✗</span>
              )}
            </button>
          )
        })}
      </div>
      {revealed && (
        <div className={`explanation ${selected === question.displayCorrectIndex ? 'ok' : 'ko'}`}>
          <span className="explanation-icon">
            {selected === question.displayCorrectIndex ? '✅' : '💡'}
          </span>
          {question.explanation}
        </div>
      )}
    </div>
  )
}
