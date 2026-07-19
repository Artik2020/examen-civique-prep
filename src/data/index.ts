import type { Question } from '../types'
import { franceQuestions } from './france'
import { italyQuestions } from './italy'
import { spainQuestions } from './spain'
import { portugalQuestions } from './portugal'
import { germanyQuestions } from './germany'
import { austriaQuestions } from './austria'
import { hungaryQuestions } from './hungary'
import { greeceQuestions } from './greece'
import { usaQuestions } from './usa'
import { australiaQuestions } from './australia'
import { newzealandQuestions } from './newzealand'
import { southAfricaQuestions } from './southafrica'
import { chileQuestions } from './chile'
import { argentinaQuestions } from './argentina'
import { chinaQuestions } from './china'
import { canadaQuestions } from './canada'

export const allQuestions: Question[] = [
  ...franceQuestions,
  ...italyQuestions,
  ...spainQuestions,
  ...portugalQuestions,
  ...germanyQuestions,
  ...austriaQuestions,
  ...hungaryQuestions,
  ...greeceQuestions,
  ...usaQuestions,
  ...australiaQuestions,
  ...newzealandQuestions,
  ...southAfricaQuestions,
  ...chileQuestions,
  ...argentinaQuestions,
  ...chinaQuestions,
  ...canadaQuestions,
]
