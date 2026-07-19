import type { Progress, StoredProgress } from '../types'

const KEY = 'wset_d3_progress'

export function loadProgress(): Progress {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return empty()
    const stored: StoredProgress = JSON.parse(raw)
    return {
      attempted: new Set(stored.attempted),
      correct: new Set(stored.correct),
      weak: new Set(stored.weak),
    }
  } catch {
    return empty()
  }
}

export function saveProgress(p: Progress): void {
  const stored: StoredProgress = {
    attempted: [...p.attempted],
    correct: [...p.correct],
    weak: [...p.weak],
  }
  localStorage.setItem(KEY, JSON.stringify(stored))
}

export function clearProgress(): void {
  localStorage.removeItem(KEY)
}

function empty(): Progress {
  return { attempted: new Set(), correct: new Set(), weak: new Set() }
}
