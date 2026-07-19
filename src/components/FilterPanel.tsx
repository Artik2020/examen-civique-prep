import type { Question, Filters } from '../types'
import { getRegions, getTopics } from '../utils/filters'

interface Props {
  questions: Question[]
  filters: Filters
  onChange: (f: Filters) => void
  onShuffle: () => void
  weakCount: number
}

export default function FilterPanel({ questions, filters, onChange, onShuffle, weakCount }: Props) {
  const regions = getRegions(questions, filters.country)
  const topics = getTopics(questions)

  function set<K extends keyof Filters>(key: K, val: Filters[K]) {
    const next = { ...filters, [key]: val }
    if (key === 'country') next.region = ''
    onChange(next)
  }

  return (
    <div className="filter-panel">
      <div className="filter-row">
        <div className="filter-group">
          <label>Region</label>
          <select value={filters.region} onChange={e => set('region', e.target.value)} disabled={!filters.country}>
            <option value="">All Regions</option>
            {regions.map(r => <option key={r} value={r}>{r}</option>)}
          </select>
        </div>

        <div className="filter-group">
          <label>Topic</label>
          <select value={filters.topic} onChange={e => set('topic', e.target.value)}>
            <option value="">All Topics</option>
            {topics.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>

        <div className="filter-group">
          <label>Difficulty</label>
          <select value={filters.difficulty} onChange={e => set('difficulty', e.target.value)}>
            <option value="">All Levels</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        <div className="filter-group filter-group-toggle">
          <label className={`toggle-label ${filters.weakOnly ? 'toggle-active' : ''}`}>
            <input
              type="checkbox"
              checked={filters.weakOnly}
              onChange={e => set('weakOnly', e.target.checked)}
            />
            Weak only ({weakCount})
          </label>
        </div>

        <div className="filter-group">
          <button className="btn btn-secondary" onClick={onShuffle}>Shuffle</button>
        </div>
      </div>
    </div>
  )
}
