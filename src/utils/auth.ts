import { supabase } from '../lib/supabase'

export interface StudentProfile {
  id: string
  email: string
  display_name: string
  is_admin: boolean
  created_at: string
}

const NOT_CONFIGURED = new Error(
  "Supabase n'est pas configuré (VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY manquants).",
)

export async function signUp(email: string, password: string, displayName: string) {
  if (!supabase) return { needsEmailConfirmation: false, error: NOT_CONFIGURED }
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { display_name: displayName } },
  })
  return { needsEmailConfirmation: !error && !data.session, error }
}

export async function signIn(email: string, password: string) {
  if (!supabase) return { error: NOT_CONFIGURED }
  const { error } = await supabase.auth.signInWithPassword({ email, password })
  return { error }
}

export async function signOut() {
  if (!supabase) return
  await supabase.auth.signOut()
}

export async function fetchProfile(userId: string): Promise<StudentProfile | null> {
  if (!supabase) return null
  const { data, error } = await supabase.from('profiles').select('*').eq('id', userId).single()
  if (error) return null
  return data as StudentProfile
}

export async function updateDisplayName(userId: string, name: string) {
  if (!supabase) return { error: NOT_CONFIGURED }
  const { error } = await supabase.from('profiles').update({ display_name: name }).eq('id', userId)
  return { error }
}
