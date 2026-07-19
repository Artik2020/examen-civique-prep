import type { Progress } from '../types'

interface Props {
  total: number
  filtered: number
  progress: Progress
  onReset: () => void
}

export default function StatsPanel({ total, filtered, progress, onReset }: Props) {
  const attempted = progress.attempted.size
  const correct = progress.correct.size
  const accuracy = attempted > 0 ? Math.round((correct / attempted) * 100) : 0

  return (
    <div className="stats-panel">
      <div className="stats-grid">
        <Stat label="Bank" value={`${filtered.toLocaleString()} / ${total.toLocaleString()}`} />
        <Stat label="Attempted" value={attempted.toString()} />
        <Stat label="Correct" value={correct.toString()} />
        <Stat label="Accuracy" value={`${accuracy}%`} accent={accuracy >= 70} />
        <Stat label="Weak" value={progress.weak.size.toString()} weak />
      </div>
      <button className="btn btn-danger" onClick={onReset} title="Clear all saved progress">
        Reset All Progress
      </button>
    </div>
  )
}

function Stat({ label, value, accent, weak }: { label: string; value: string; accent?: boolean; weak?: boolean }) {
  return (
    <div className={`stat ${accent ? 'stat-good' : ''} ${weak ? 'stat-weak' : ''}`}>
      <span className="stat-label">{label}</span>
      <span className="stat-value">{value}</span>
    </div>
  )
}
