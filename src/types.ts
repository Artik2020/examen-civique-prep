export type Mention = 'csp' | 'cr' | 'naturalisation'

export type Theme = 'principes' | 'institutions' | 'droits' | 'histoire' | 'societe' | 'situation'

export type QuestionKind = 'connaissance' | 'situation'

export interface QuizQuestion {
  id: string
  theme: Theme
  kind?: QuestionKind
  mentions: Mention[]
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

export const THEME_LABELS: Record<Theme, string> = {
  principes: 'Principes et valeurs de la République',
  institutions: 'Système institutionnel et politique',
  droits: 'Droits et devoirs',
  histoire: 'Histoire, géographie et culture',
  societe: 'Vivre dans la société française',
  situation: 'Mises en situation',
}

export const MENTION_LABELS: Record<Mention, string> = {
  csp: 'Carte de séjour pluriannuelle (CSP)',
  cr: 'Carte de résident (CR)',
  naturalisation: 'Naturalisation',
}

export const THEME_ICONS: Record<Theme, string> = {
  principes: '🏛️',
  institutions: '⚖️',
  droits: '📜',
  histoire: '🗺️',
  societe: '🏥',
  situation: '🎭',
}

export const MENTION_ICONS: Record<Mention, string> = {
  csp: '🪪',
  cr: '🛂',
  naturalisation: '⭐',
}
