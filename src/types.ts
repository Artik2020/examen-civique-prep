export interface Question {
  id: string
  country: string
  region: string
  topic: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
  question: string
  options: [string, string, string, string]
  answer: number // 0-indexed
  explanation: string
}

export interface Progress {
  attempted: Set<string>
  correct: Set<string>
  weak: Set<string>
}

export interface StoredProgress {
  attempted: string[]
  correct: string[]
  weak: string[]
}

export interface Filters {
  country: string
  region: string
  topic: string
  difficulty: string
  weakOnly: boolean
}
