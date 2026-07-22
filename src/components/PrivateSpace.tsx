import { useState } from 'react'
import type { AttemptRecord } from '../utils/storage'
import { clearHistory } from '../utils/storage'
import type { Profile } from '../utils/profiles'
import { renameProfile } from '../utils/profiles'
import { MENTION_LABELS } from '../types'

interface Props {
  profile: Profile
  history: AttemptRecord[]
  onBackHome: () => void
  onCleared: () => void
  onProfileRenamed: (name: string) => void
  onSwitchProfile: () => void
}

export default function PrivateSpace({
  profile,
  history,
  onBackHome,
  onCleared,
  onProfileRenamed,
  onSwitchProfile,
}: Props) {
  const [editing, setEditing] = useState(false)
  const [name, setName] = useState(profile.name)

  function saveName() {
    const trimmed = name.trim()
    if (trimmed) {
      renameProfile(profile.id, trimmed)
      onProfileRenamed(trimmed)
    }
    setEditing(false)
  }

  const attempts = history.length
  const examAttempts = history.filter((h) => h.mode === 'exam')
  const bestExam = examAttempts.reduce(
    (best, h) => (h.correct / h.total > best ? h.correct / h.total : best),
    0,
  )

  return (
    <div className="stats-panel">
      <h1>🔒 Espace privé</h1>

      <div className="card profile-card">
        {editing ? (
          <div className="new-profile-row">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && saveName()}
              autoFocus
            />
            <button className="primary" onClick={saveName}>
              Enregistrer
            </button>
          </div>
        ) : (
          <div className="profile-summary">
            <span className="profile-chip">
              <span className="avatar">{profile.name.charAt(0).toUpperCase()}</span>
              <strong>{profile.name}</strong>
            </span>
            <button className="link-btn" onClick={() => setEditing(true)}>
              Renommer
            </button>
            <button className="link-btn" onClick={onSwitchProfile}>
              Changer d'espace
            </button>
          </div>
        )}
        <p className="disclaimer small">
          <span className="disclaimer-icon">ℹ️</span>
          <span>Cet espace n'existe que sur cet appareil et ce navigateur — rien n'est envoyé en ligne.</span>
        </p>
      </div>

      {attempts > 0 && (
        <div className="summary-row">
          <div className="summary-tile">
            <div className="summary-tile-icon">📚</div>
            <div className="summary-big">{attempts}</div>
            <div>session(s)</div>
          </div>
          <div className="summary-tile">
            <div className="summary-tile-icon">📝</div>
            <div className="summary-big">{examAttempts.length}</div>
            <div>examen(s) blanc(s)</div>
          </div>
          <div className="summary-tile">
            <div className="summary-tile-icon">🏆</div>
            <div className="summary-big">{Math.round(bestExam * 100)}%</div>
            <div>meilleur score</div>
          </div>
        </div>
      )}

      {history.length === 0 ? (
        <p className="empty-state">📭 Aucune session enregistrée pour l'instant dans cet espace.</p>
      ) : (
        <table className="stats-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Mention</th>
              <th>Mode</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {history.map((h) => (
              <tr key={h.id}>
                <td>{new Date(h.date).toLocaleString('fr-FR')}</td>
                <td>{MENTION_LABELS[h.mention]}</td>
                <td>{h.mode === 'exam' ? 'Examen blanc' : 'Entraînement'}</td>
                <td>
                  {h.correct} / {h.total}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div className="nav-row">
        <button onClick={onBackHome}>Retour à l'accueil</button>
        {history.length > 0 && (
          <button
            onClick={() => {
              clearHistory(profile.id)
              onCleared()
            }}
          >
            Effacer l'historique
          </button>
        )}
      </div>
    </div>
  )
}
