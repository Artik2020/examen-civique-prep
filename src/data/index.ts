import type { QuizQuestion } from '../types'
import { principesQuestions } from './questions.principes'
import { droitsQuestions } from './questions.droits'
import { societeQuestions } from './questions.societe'
import { institutionsQuestionsA } from './questions.institutions.a'
import { institutionsQuestionsB } from './questions.institutions.b'
import { histoireQuestionsA } from './questions.histoire.a'
import { histoireQuestionsB } from './questions.histoire.b'
import { situationQuestions } from './questions.situation'

const knowledgeQuestions: QuizQuestion[] = [
  ...principesQuestions,
  ...institutionsQuestionsA,
  ...institutionsQuestionsB,
  ...droitsQuestions,
  ...histoireQuestionsA,
  ...histoireQuestionsB,
  ...societeQuestions,
].map((q) => ({ ...q, kind: 'connaissance' as const }))

export const allQuestions: QuizQuestion[] = [...knowledgeQuestions, ...situationQuestions]
