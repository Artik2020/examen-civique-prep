export interface Profile {
  id: string
  name: string
  createdAt: string
}

const PROFILES_KEY = 'examen-civique-profiles'
const ACTIVE_PROFILE_KEY = 'examen-civique-active-profile'

export function getProfiles(): Profile[] {
  try {
    const raw = localStorage.getItem(PROFILES_KEY)
    if (!raw) return []
    return JSON.parse(raw) as Profile[]
  } catch {
    return []
  }
}

function saveProfiles(profiles: Profile[]): void {
  localStorage.setItem(PROFILES_KEY, JSON.stringify(profiles))
}

export function createProfile(name: string): Profile {
  const profile: Profile = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    name: name.trim(),
    createdAt: new Date().toISOString(),
  }
  const profiles = getProfiles()
  profiles.push(profile)
  saveProfiles(profiles)
  setActiveProfileId(profile.id)
  return profile
}

export function renameProfile(id: string, name: string): void {
  const profiles = getProfiles().map((p) => (p.id === id ? { ...p, name: name.trim() } : p))
  saveProfiles(profiles)
}

export function deleteProfile(id: string): void {
  saveProfiles(getProfiles().filter((p) => p.id !== id))
  localStorage.removeItem(`examen-civique-history-${id}`)
  if (getActiveProfileId() === id) {
    localStorage.removeItem(ACTIVE_PROFILE_KEY)
  }
}

export function getActiveProfileId(): string | null {
  return localStorage.getItem(ACTIVE_PROFILE_KEY)
}

export function setActiveProfileId(id: string): void {
  localStorage.setItem(ACTIVE_PROFILE_KEY, id)
}

export function clearActiveProfile(): void {
  localStorage.removeItem(ACTIVE_PROFILE_KEY)
}

export function getActiveProfile(): Profile | null {
  const id = getActiveProfileId()
  if (!id) return null
  return getProfiles().find((p) => p.id === id) ?? null
}
