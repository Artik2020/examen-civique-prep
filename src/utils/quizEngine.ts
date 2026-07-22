import type { Mention, QuizQuestion, Theme } from '../types'
import { shuffle } from './shuffle'

export interface PreparedQuestion extends QuizQuestion {
  displayOptions: string[]
  displayCorrectIndex: number
}

export function prepareQuestion(q: QuizQuestion): PreparedQuestion {
  const order = shuffle(q.options.map((_, i) => i))
  const displayOptions = order.map((i) => q.options[i])
  const displayCorrectIndex = order.indexOf(q.correctIndex)
  return { ...q, displayOptions, displayCorrectIndex }
}

export function questionsForMention(all: QuizQuestion[], mention: Mention): QuizQuestion[] {
  return all.filter((q) => q.mentions.includes(mention))
}

export function questionsForTheme(pool: QuizQuestion[], theme: Theme): QuizQuestion[] {
  return pool.filter((q) => q.theme === theme)
}

export const EXAM_QUESTION_COUNT = 40
export const EXAM_KNOWLEDGE_COUNT = 28
export const EXAM_SITUATION_COUNT = 12
export const EXAM_DURATION_SECONDS = 45 * 60
export const EXAM_PASS_RATIO = 0.8

export function buildExam(pool: QuizQuestion[]): PreparedQuestion[] {
  const knowledge = pool.filter((q) => (q.kind ?? 'connaissance') === 'connaissance')
  const situations = pool.filter((q) => q.kind === 'situation')
  const chosenKnowledge = shuffle(knowledge).slice(0, Math.min(EXAM_KNOWLEDGE_COUNT, knowledge.length))
  const chosenSituations = shuffle(situations).slice(0, Math.min(EXAM_SITUATION_COUNT, situations.length))
  return shuffle([...chosenKnowledge, ...chosenSituations]).map(prepareQuestion)
}

export function buildPracticeSet(pool: QuizQuestion[], count?: number): PreparedQuestion[] {
  const shuffled = shuffle(pool)
  const chosen = count ? shuffled.slice(0, Math.min(count, shuffled.length)) : shuffled
  return chosen.map(prepareQuestion)
}
