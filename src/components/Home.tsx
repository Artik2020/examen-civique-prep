import { useState } from 'react'
import type { Mention, Theme } from '../types'
import { MENTION_ICONS, MENTION_LABELS, THEME_ICONS, THEME_LABELS } from '../types'

const MENTIONS: Mention[] = ['csp', 'cr', 'naturalisation']
const THEMES: Theme[] = ['principes', 'institutions', 'droits', 'histoire', 'societe', 'situation']

interface Props {
  onStartExam: (mention: Mention) => void
  onStartPractice: (mention: Mention, themes: Theme[]) => void
  onOpenSpace: () => void
  counts: Record<Mention, number>
  profileName: string
}

export default function Home({ onStartExam, onStartPractice, onOpenSpace, counts, profileName }: Props) {
  const [mention, setMention] = useState<Mention>('csp')
  const [practiceOpen, setPracticeOpen] = useState(false)
  const [themes, setThemes] = useState<Theme[]>(THEMES)

  function toggleTheme(t: Theme) {
    setThemes((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]))
  }

  return (
    <div className="home">
      <div className="profile-bar">
        <span className="profile-chip">
          <span className="avatar">{profileName.charAt(0).toUpperCase()}</span>
          {profileName}
        </span>
        <button className="link-btn" onClick={onOpenSpace}>
          🔒 Mon espace privé
        </button>
      </div>

      <div className="hero">
        <h1>🇫🇷 Examen civique</h1>
        <p className="hero-subtitle">Préparez-vous sereinement, à votre rythme.</p>
      </div>

      <p className="disclaimer">
        <span className="disclaimer-icon">ℹ️</span>
        <span>
          Les questions de connaissance proviennent des listes officielles publiées par le ministère
          de l'Intérieur. Les <strong>options de réponse et les corrections sont générées</strong> pour
          l'entraînement (aucune option officielle n'est publiée). Les{' '}
          <strong>mises en situation sont entièrement inventées</strong> : aucune n'est jamais rendue
          publique par l'administration. Vérifiez toujours l'information auprès de sources officielles
          avant l'examen réel.
        </span>
      </p>

      <section className="card">
        <h2>
          <span className="step-badge">1</span> Choisissez votre mention
        </h2>
        <div className="mention-grid">
          {MENTIONS.map((m) => (
            <button
              key={m}
              className={`mention-btn ${mention === m ? 'active' : ''}`}
              onClick={() => setMention(m)}
            >
              <span className="mention-icon">{MENTION_ICONS[m]}</span>
              <span className="mention-text">
                <span>{MENTION_LABELS[m]}</span>
                <small>{counts[m]} questions</small>
              </span>
              <span className="mention-check">✓</span>
            </button>
          ))}
        </div>
      </section>

      <section className="card">
        <h2>
          <span className="step-badge">2</span> Choisissez un mode
        </h2>
        <div className="mode-grid">
          <div className="mode-box">
            <div className="mode-icon">📝</div>
            <h3>Examen blanc</h3>
            <p>
              40 questions (28 connaissances + 12 mises en situation), 45 minutes, seuil de réussite
              80&nbsp;% (32/40) — même composition que le vrai examen.
            </p>
            <button className="primary" onClick={() => onStartExam(mention)}>
              Démarrer l'examen blanc →
            </button>
          </div>
          <div className="mode-box">
            <div className="mode-icon">🎯</div>
            <h3>Entraînement libre</h3>
            <p>Révisez par thème, avec correction immédiate après chaque question.</p>
            {!practiceOpen ? (
              <button onClick={() => setPracticeOpen(true)}>Choisir les thèmes →</button>
            ) : (
              <>
                <div className="theme-chips">
                  {THEMES.map((t) => (
                    <button
                      key={t}
                      type="button"
                      className={`theme-chip ${themes.includes(t) ? 'active' : ''}`}
                      onClick={() => toggleTheme(t)}
                    >
                      {THEME_ICONS[t]} {THEME_LABELS[t]}
                    </button>
                  ))}
                </div>
                <button
                  className="primary"
                  disabled={themes.length === 0}
                  onClick={() => onStartPractice(mention, themes)}
                >
                  Démarrer l'entraînement →
                </button>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
