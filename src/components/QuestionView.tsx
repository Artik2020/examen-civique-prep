import { useEffect, useState } from 'react'
import type { PreparedQuestion } from '../utils/quizEngine'
import { THEME_ICONS, THEME_LABELS } from '../types'
import { speak, speechSupported, stopSpeaking } from '../utils/speech'

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
  const [speaking, setSpeaking] = useState(false)
  const progressPct = Math.round(((index + 1) / total) * 100)

  useEffect(() => {
    setSpeaking(false)
    return () => stopSpeaking()
  }, [question.id])

  function toggleSpeak() {
    if (speaking) {
      stopSpeaking()
      setSpeaking(false)
      return
    }
    const optionsText = question.displayOptions
      .map((opt, i) => `Option ${LETTERS[i]} : ${opt}.`)
      .join(' ')
    setSpeaking(true)
    speak(`${question.question} ${optionsText}`, () => setSpeaking(false))
  }

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
      <div className="question-head">
        <h2 className="question-text">{question.question}</h2>
        {speechSupported && (
          <button type="button" className="listen-btn" onClick={toggleSpeak}>
            {speaking ? '⏸ Arrêter' : '🔊 Écouter'}
          </button>
        )}
      </div>
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
