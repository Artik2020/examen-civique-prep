export const speechSupported = typeof window !== 'undefined' && 'speechSynthesis' in window

export function speak(text: string, onEnd?: () => void): void {
  if (!speechSupported) return
  window.speechSynthesis.cancel()
  const utterance = new SpeechSynthesisUtterance(text)
  utterance.lang = 'fr-FR'
  utterance.rate = 0.95
  if (onEnd) utterance.onend = onEnd
  window.speechSynthesis.speak(utterance)
}

export function stopSpeaking(): void {
  if (!speechSupported) return
  window.speechSynthesis.cancel()
}
