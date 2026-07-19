import type { Question } from '../types'

interface Props {
  questions: Question[]
  selected: string
  onSelect: (country: string) => void
}

const FLAG: Record<string, string> = {
  France: '🇫🇷',
  Italy: '🇮🇹',
  Spain: '🇪🇸',
  Portugal: '🇵🇹',
  Germany: '🇩🇪',
  Austria: '🇦🇹',
  USA: '🇺🇸',
  Australia: '🇦🇺',
  'New Zealand': '🇳🇿',
  'South Africa': '🇿🇦',
  Chile: '🇨🇱',
  Argentina: '🇦🇷',
  Greece: '🇬🇷',
  Hungary: '🇭🇺',
  China: '🇨🇳',
  Canada: '🇨🇦',
}

export default function CountryNav({ questions, selected, onSelect }: Props) {
  const counts = questions.reduce<Record<string, number>>((acc, q) => {
    acc[q.country] = (acc[q.country] || 0) + 1
    return acc
  }, {})

  const countries = Object.keys(counts).sort()

  return (
    <div className="country-nav">
      <button
        className={`country-btn ${selected === '' ? 'active' : ''}`}
        onClick={() => onSelect('')}
      >
        All Countries
      </button>
      {countries.map(c => (
        <button
          key={c}
          className={`country-btn ${selected === c ? 'active' : ''}`}
          onClick={() => onSelect(c)}
          title={`${counts[c]} questions`}
        >
          {FLAG[c] ?? '🍷'} {c}
          <span className="country-count">{counts[c]}</span>
        </button>
      ))}
    </div>
  )
}
