import { useState } from 'react'
import type { PreparedQuestion } from '../utils/quizEngine'
import { EXAM_PASS_RATIO } from '../utils/quizEngine'
import type { Theme } from '../types'
import { THEME_ICONS, THEME_LABELS } from '../types'

interface Props {
  questions: PreparedQuestion[]
  answers: (number | null)[]
  mode: 'exam' | 'practice'
  saved: boolean
  onBackHome: () => void
  onGoToAuth: () => void
}

export default function ResultsSummary({ questions, answers, mode, saved, onBackHome, onGoToAuth }: Props) {
  const [showReview, setShowReview] = useState(false)
  const total = questions.length
  const correct = answers.filter((a, i) => a !== null && a === questions[i].displayCorrectIndex).length
  const ratio = total > 0 ? correct / total : 0
  const pct = Math.round(ratio * 100)
  const passed = ratio >= EXAM_PASS_RATIO

  const byTheme: Partial<Record<Theme, { total: number; correct: number }>> = {}
  questions.forEach((q, i) => {
    const entry = byTheme[q.theme] ?? { total: 0, correct: 0 }
    entry.total += 1
    if (answers[i] === q.displayCorrectIndex) entry.correct += 1
    byTheme[q.theme] = entry
  })

  const ringColor = mode === 'exam' ? (passed ? '#1a8f3c' : '#ed2939') : '#002395'

  return (
    <div className="results">
      {!saved && (
        <p className="disclaimer trial-banner">
          <span className="disclaimer-icon">📌</span>
          <span>
            Ce résultat n'a pas été sauvegardé (mode essai).{' '}
            <button className="inline-link" onClick={onGoToAuth}>
              Créez un compte gratuit
            </button>{' '}
            pour garder votre historique et suivre votre progression.
          </span>
        </p>
      )}
      <div className={`score-banner ${mode === 'exam' ? (passed ? 'pass' : 'fail') : ''}`}>
        <div
          className="score-ring"
          style={{ background: `conic-gradient(${ringColor} ${pct}%, var(--ring-track) ${pct}%)` }}
        >
          <div className="score-ring-inner">
            <div className="score-big">{pct}%</div>
            <div className="score-fraction">
              {correct} / {total}
            </div>
          </div>
        </div>
        <div className="score-label">
          {mode === 'exam'
            ? passed
              ? '✅ Admis (seuil : 80 %)'
              : '❌ Non admis (seuil : 80 %)'
            : "🎯 Session d'entraînement terminée"}
        </div>
      </div>

      <div className="theme-breakdown">
        {Object.entries(byTheme).map(([theme, stats]) => {
          const t = theme as Theme
          const themePct = stats!.total > 0 ? Math.round((stats!.correct / stats!.total) * 100) : 0
          return (
            <div key={theme} className="theme-row">
              <div className="theme-row-head">
                <span>
                  {THEME_ICONS[t]} {THEME_LABELS[t]}
                </span>
                <span>
                  {stats!.correct} / {stats!.total}
                </span>
              </div>
              <div className="theme-row-bar">
                <div className="theme-row-fill" style={{ width: `${themePct}%` }} />
              </div>
            </div>
          )
        })}
      </div>

      <button onClick={() => setShowReview((s) => !s)}>
        {showReview ? '▲ Masquer la correction détaillée' : '▼ Voir la correction détaillée'}
      </button>

      {showReview && (
        <div className="review-list">
          {questions.map((q, i) => {
            const userAnswer = answers[i]
            const isCorrect = userAnswer === q.displayCorrectIndex
            return (
              <div key={q.id} className={`review-item ${isCorrect ? 'ok' : 'ko'}`}>
                <p className="review-question">
                  {i + 1}. {q.question}
                </p>
                <p>
                  Votre réponse :{' '}
                  {userAnswer !== null ? q.displayOptions[userAnswer] : <em>sans réponse</em>}
                </p>
                {!isCorrect && (
                  <p>
                    Bonne réponse : <strong>{q.displayOptions[q.displayCorrectIndex]}</strong>
                  </p>
                )}
                <p className="review-explanation">{q.explanation}</p>
              </div>
            )
          })}
        </div>
      )}

      <button className="primary" onClick={onBackHome}>
        Retour à l'accueil
      </button>
    </div>
  )
}
