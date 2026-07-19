interface Props {
  current: number
  total: number
  onPrev: () => void
  onNext: () => void
}

export default function Navigation({ current, total, onPrev, onNext }: Props) {
  return (
    <div className="navigation">
      <button className="btn btn-nav" onClick={onPrev} disabled={current === 0}>
        ← Prev
      </button>
      <span className="nav-counter">
        {total === 0 ? '—' : `${current + 1} / ${total}`}
      </span>
      <button className="btn btn-nav" onClick={onNext} disabled={current >= total - 1}>
        Next →
      </button>
    </div>
  )
}
