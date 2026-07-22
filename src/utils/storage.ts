import type { Mention, Theme } from '../types'

export interface AttemptRecord {
  id: string
  date: string
  mention: Mention
  mode: 'exam' | 'practice'
  total: number
  correct: number
  byTheme: Partial<Record<Theme, { total: number; correct: number }>>
}

function historyKey(profileId: string): string {
  return `examen-civique-history-${profileId}`
}

export function getHistory(profileId: string): AttemptRecord[] {
  try {
    const raw = localStorage.getItem(historyKey(profileId))
    if (!raw) return []
    return JSON.parse(raw) as AttemptRecord[]
  } catch {
    return []
  }
}

export function saveAttempt(profileId: string, record: AttemptRecord): void {
  const history = getHistory(profileId)
  history.unshift(record)
  localStorage.setItem(historyKey(profileId), JSON.stringify(history.slice(0, 100)))
}

export function clearHistory(profileId: string): void {
  localStorage.removeItem(historyKey(profileId))
}
