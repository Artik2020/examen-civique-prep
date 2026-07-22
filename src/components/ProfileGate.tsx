import { useState } from 'react'
import type { Profile } from '../utils/profiles'
import { createProfile, deleteProfile, getProfiles, setActiveProfileId } from '../utils/profiles'

interface Props {
  onEnter: (profile: Profile) => void
}

export default function ProfileGate({ onEnter }: Props) {
  const [profiles, setProfiles] = useState<Profile[]>(() => getProfiles())
  const [name, setName] = useState('')
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null)

  function enter(profile: Profile) {
    setActiveProfileId(profile.id)
    onEnter(profile)
  }

  function create() {
    const trimmed = name.trim()
    if (!trimmed) return
    const profile = createProfile(trimmed)
    onEnter(profile)
  }

  function remove(id: string) {
    deleteProfile(id)
    setProfiles(getProfiles())
    setConfirmDelete(null)
  }

  return (
    <div className="gate">
      <div className="gate-hero">
        <div className="gate-lock">🔒</div>
        <h1>Espace privé d'étudiant</h1>
        <p className="hero-subtitle">Votre espace personnel de préparation à l'examen civique</p>
      </div>

      <p className="disclaimer">
        <span className="disclaimer-icon">ℹ️</span>
        <span>
          Votre espace reste uniquement sur cet appareil et ce navigateur (aucun compte en ligne,
          aucune donnée envoyée à un serveur). Choisissez un prénom pour retrouver votre historique.
        </span>
      </p>

      {profiles.length > 0 && (
        <div className="card">
          <h2>Continuer avec un espace existant</h2>
          <div className="profile-list">
            {profiles.map((p) => (
              <div key={p.id} className="profile-row">
                <button className="profile-enter" onClick={() => enter(p)}>
                  <span className="avatar">{p.name.charAt(0).toUpperCase()}</span>
                  {p.name}
                </button>
                {confirmDelete === p.id ? (
                  <span className="confirm-delete">
                    Supprimer ?{' '}
                    <button className="link-btn danger" onClick={() => remove(p.id)}>
                      Oui
                    </button>{' '}
                    <button className="link-btn" onClick={() => setConfirmDelete(null)}>
                      Non
                    </button>
                  </span>
                ) : (
                  <button className="link-btn danger" onClick={() => setConfirmDelete(p.id)}>
                    Supprimer
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="card">
        <h2>{profiles.length > 0 ? 'Ou créer un nouvel espace' : 'Créer votre espace'}</h2>
        <div className="new-profile-row">
          <input
            type="text"
            placeholder="Votre prénom"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && create()}
          />
          <button className="primary" disabled={!name.trim()} onClick={create}>
            Créer mon espace
          </button>
        </div>
      </div>
    </div>
  )
}
