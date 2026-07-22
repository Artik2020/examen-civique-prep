import type { Mention, Theme } from '../types'
import { supabase } from '../lib/supabase'

export interface AttemptRecord {
  id: string
  date: string
  mention: Mention
  mode: 'exam' | 'practice'
  total: number
  correct: number
  byTheme: Partial<Record<Theme, { total: number; correct: number }>>
}

interface AttemptRow {
  id: string
  created_at: string
  mention: Mention
  mode: 'exam' | 'practice'
  total: number
  correct: number
  by_theme: Partial<Record<Theme, { total: number; correct: number }>>
}

function fromRow(row: AttemptRow): AttemptRecord {
  return {
    id: row.id,
    date: row.created_at,
    mention: row.mention,
    mode: row.mode,
    total: row.total,
    correct: row.correct,
    byTheme: row.by_theme,
  }
}

export async function getHistory(userId: string): Promise<AttemptRecord[]> {
  if (!supabase) return []
  const { data, error } = await supabase
    .from('attempts')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
  if (error || !data) return []
  return (data as AttemptRow[]).map(fromRow)
}

export async function saveAttempt(
  userId: string,
  record: Omit<AttemptRecord, 'id' | 'date'>,
): Promise<void> {
  if (!supabase) return
  await supabase.from('attempts').insert({
    user_id: userId,
    mention: record.mention,
    mode: record.mode,
    total: record.total,
    correct: record.correct,
    by_theme: record.byTheme,
  })
}

export async function clearHistory(userId: string): Promise<void> {
  if (!supabase) return
  await supabase.from('attempts').delete().eq('user_id', userId)
}
