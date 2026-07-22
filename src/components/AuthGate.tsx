import { useState } from 'react'
import { isSupabaseConfigured } from '../lib/supabase'
import { signIn, signUp } from '../utils/auth'

type Mode = 'login' | 'signup'

export default function AuthGate() {
  const [mode, setMode] = useState<Mode>('login')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [confirmationSent, setConfirmationSent] = useState(false)
  const [loading, setLoading] = useState(false)

  if (!isSupabaseConfigured) {
    return (
      <div className="gate">
        <div className="gate-hero">
          <div className="gate-lock">⚠️</div>
          <h1>Configuration requise</h1>
          <p className="hero-subtitle">
            L'application n'est pas encore connectée à sa base de données.
          </p>
        </div>
        <p className="disclaimer">
          <span className="disclaimer-icon">ℹ️</span>
          <span>
            Il manque les variables d'environnement <code>VITE_SUPABASE_URL</code> et{' '}
            <code>VITE_SUPABASE_ANON_KEY</code>. Ajoutez-les dans un fichier <code>.env.local</code>{' '}
            en développement, ou dans les paramètres du projet sur Vercel en production, puis
            redémarrez/redéployez.
          </span>
        </p>
      </div>
    )
  }

  async function submit() {
    setError(null)
    if (!email.trim() || !password) {
      setError('Merci de renseigner un email et un mot de passe.')
      return
    }
    if (mode === 'signup' && !name.trim()) {
      setError('Merci de renseigner votre prénom.')
      return
    }
    setLoading(true)
    if (mode === 'signup') {
      const { needsEmailConfirmation, error: err } = await signUp(email.trim(), password, name.trim())
      setLoading(false)
      if (err) {
        setError(err.message)
        return
      }
      if (needsEmailConfirmation) {
        setConfirmationSent(true)
        return
      }
      // Session created immediately (email confirmation disabled) — App's
      // onAuthStateChange listener will pick it up and move past this screen.
    } else {
      const { error: err } = await signIn(email.trim(), password)
      setLoading(false)
      if (err) {
        setError(err.message === 'Invalid login credentials' ? 'Email ou mot de passe incorrect.' : err.message)
      }
    }
  }

  if (confirmationSent) {
    return (
      <div className="gate">
        <div className="gate-hero">
          <div className="gate-lock">📩</div>
          <h1>Vérifiez votre email</h1>
          <p className="hero-subtitle">
            Un email de confirmation a été envoyé à <strong>{email}</strong>. Cliquez sur le lien
            qu'il contient pour activer votre espace, puis revenez vous connecter ici.
          </p>
        </div>
        <button
          className="primary"
          onClick={() => {
            setConfirmationSent(false)
            setMode('login')
          }}
        >
          Retour à la connexion
        </button>
      </div>
    )
  }

  return (
    <div className="gate">
      <div className="gate-hero">
        <div className="gate-lock">🔒</div>
        <h1>Espace privé d'étudiant</h1>
        <p className="hero-subtitle">
          {mode === 'login' ? 'Connectez-vous pour retrouver votre progression.' : 'Créez votre compte pour commencer.'}
        </p>
      </div>

      <p className="disclaimer">
        <span className="disclaimer-icon">ℹ️</span>
        <span>
          Vos identifiants et vos résultats sont stockés de façon sécurisée pour que vous puissiez y
          accéder depuis n'importe quel appareil.
        </span>
      </p>

      <div className="card">
        <h2>{mode === 'login' ? 'Se connecter' : 'Créer un compte'}</h2>
        <div className="auth-form">
          {mode === 'signup' && (
            <input
              type="text"
              placeholder="Votre prénom"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}
          <input
            type="email"
            placeholder="Adresse email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && submit()}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && submit()}
          />
          {error && <p className="auth-error">{error}</p>}
          <button className="primary" disabled={loading} onClick={submit}>
            {loading ? 'Un instant…' : mode === 'login' ? 'Se connecter' : 'Créer mon espace'}
          </button>
        </div>
        <button
          className="link-btn"
          onClick={() => {
            setMode(mode === 'login' ? 'signup' : 'login')
            setError(null)
          }}
        >
          {mode === 'login' ? "Pas encore de compte ? S'inscrire" : 'Déjà un compte ? Se connecter'}
        </button>
      </div>
    </div>
  )
}
