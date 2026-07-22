import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import type { StudentProfile } from '../utils/auth'
import { MENTION_LABELS } from '../types'
import type { Mention } from '../types'

interface AdminAttempt {
  id: string
  user_id: string
  mention: Mention
  mode: 'exam' | 'practice'
  total: number
  correct: number
  created_at: string
}

interface Props {
  onBackHome: () => void
}

export default function AdminPanel({ onBackHome }: Props) {
  const [students, setStudents] = useState<StudentProfile[]>([])
  const [attempts, setAttempts] = useState<AdminAttempt[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [expanded, setExpanded] = useState<string | null>(null)

  useEffect(() => {
    async function load() {
      if (!supabase) {
        setError('Supabase non configuré.')
        setLoading(false)
        return
      }
      const [profilesRes, attemptsRes] = await Promise.all([
        supabase.from('profiles').select('*').order('created_at', { ascending: false }),
        supabase
          .from('attempts')
          .select('id, user_id, mention, mode, total, correct, created_at')
          .order('created_at', { ascending: false }),
      ])
      if (profilesRes.error) {
        setError(profilesRes.error.message)
      } else {
        setStudents(profilesRes.data as StudentProfile[])
      }
      if (!attemptsRes.error && attemptsRes.data) {
        setAttempts(attemptsRes.data as AdminAttempt[])
      }
      setLoading(false)
    }
    load()
  }, [])

  if (loading) {
    return (
      <div className="stats-panel">
        <h1>🛠️ Panneau admin</h1>
        <p className="empty-state">Chargement…</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="stats-panel">
        <h1>🛠️ Panneau admin</h1>
        <p className="auth-error">{error}</p>
        <button onClick={onBackHome}>Retour à l'accueil</button>
      </div>
    )
  }

  const totalAttempts = attempts.length
  const examAttempts = attempts.filter((a) => a.mode === 'exam')
  const avgExamScore =
    examAttempts.length > 0
      ? Math.round(
          (examAttempts.reduce((sum, a) => sum + a.correct / a.total, 0) / examAttempts.length) * 100,
        )
      : 0

  return (
    <div className="stats-panel">
      <h1>🛠️ Panneau admin</h1>

      <div className="summary-row">
        <div className="summary-tile">
          <div className="summary-tile-icon">🧑‍🎓</div>
          <div className="summary-big">{students.length}</div>
          <div>étudiant(s)</div>
        </div>
        <div className="summary-tile">
          <div className="summary-tile-icon">📚</div>
          <div className="summary-big">{totalAttempts}</div>
          <div>session(s) au total</div>
        </div>
        <div className="summary-tile">
          <div className="summary-tile-icon">🏆</div>
          <div className="summary-big">{avgExamScore}%</div>
          <div>score moyen (examens)</div>
        </div>
      </div>

      {students.length === 0 ? (
        <p className="empty-state">👥 Aucun étudiant inscrit pour l'instant.</p>
      ) : (
        <div className="admin-student-list">
          {students.map((s) => {
            const own = attempts.filter((a) => a.user_id === s.id)
            const ownExams = own.filter((a) => a.mode === 'exam')
            const best = ownExams.reduce((b, a) => Math.max(b, a.correct / a.total), 0)
            const isOpen = expanded === s.id
            return (
              <div key={s.id} className="admin-student-card">
                <button className="admin-student-head" onClick={() => setExpanded(isOpen ? null : s.id)}>
                  <span className="profile-chip">
                    <span className="avatar">{s.display_name.charAt(0).toUpperCase()}</span>
                    <strong>{s.display_name}</strong>
                    {s.is_admin && <span className="theme-pill">admin</span>}
                  </span>
                  <span className="admin-student-email">{s.email}</span>
                  <span className="admin-student-stats">
                    {own.length} session(s) · {ownExams.length} examen(s) · meilleur{' '}
                    {Math.round(best * 100)}%
                  </span>
                  <span>{isOpen ? '▲' : '▼'}</span>
                </button>
                {isOpen && (
                  <div className="admin-student-detail">
                    {own.length === 0 ? (
                      <p className="empty-state">Aucune session enregistrée.</p>
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
                          {own.map((a) => (
                            <tr key={a.id}>
                              <td>{new Date(a.created_at).toLocaleString('fr-FR')}</td>
                              <td>{MENTION_LABELS[a.mention]}</td>
                              <td>{a.mode === 'exam' ? 'Examen blanc' : 'Entraînement'}</td>
                              <td>
                                {a.correct} / {a.total}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}

      <button onClick={onBackHome}>Retour à l'accueil</button>
    </div>
  )
}
