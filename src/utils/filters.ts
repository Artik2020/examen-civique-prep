import type { Question, Filters } from '../types'

export function applyFilters(questions: Question[], filters: Filters, weak: Set<string>): Question[] {
  return questions.filter(q => {
    if (filters.country && q.country !== filters.country) return false
    if (filters.region && q.region !== filters.region) return false
    if (filters.topic && q.topic !== filters.topic) return false
    if (filters.difficulty && q.difficulty !== filters.difficulty) return false
    if (filters.weakOnly && !weak.has(q.id)) return false
    return true
  })
}

export function getCountries(questions: Question[]): string[] {
  return [...new Set(questions.map(q => q.country))].sort()
}

export function getRegions(questions: Question[], country: string): string[] {
  const filtered = country ? questions.filter(q => q.country === country) : questions
  return [...new Set(filtered.map(q => q.region))].sort()
}

export function getTopics(questions: Question[]): string[] {
  return [...new Set(questions.map(q => q.topic))].sort()
}

export function shuffle<T>(arr: T[]): T[] {
  const out = [...arr]
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[out[i], out[j]] = [out[j], out[i]]
  }
  return out
}
