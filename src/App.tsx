import { useState, useEffect, useMemo } from 'react'
import type { Filters, Progress } from './types'
import { loadProgress, saveProgress, clearProgress } from './utils/storage'
import { applyFilters, shuffle } from './utils/filters'
import { allQuestions } from './data/index'
import CountryNav from './components/CountryNav'
import FilterPanel from './components/FilterPanel'
import QuestionCard from './components/QuestionCard'
import Navigation from './components/Navigation'
import StatsPanel from './components/StatsPanel'

const EMPTY_FILTERS: Filters = {
  country: '',
  region: '',
  topic: '',
  difficulty: '',
  weakOnly: false,
}

export default function App() {
  const [progress, setProgress] = useState<Progress>(loadProgress)
  const [filters, setFilters] = useState<Filters>(EMPTY_FILTERS)
  const [queue, setQueue] = useState(allQuestions)
  const [cursor, setCursor] = useState(0)

  const filtered = useMemo(
    () => applyFilters(allQuestions, filters, progress.weak),
    [filters, progress.weak]
  )

  useEffect(() => {
    setQueue(filtered)
    setCursor(0)
  }, [filtered])

  const current = queue[cursor] ?? null

  function handleAnswer(correct: boolean) {
    if (!current) return
    setProgress(prev => {
      const next: Progress = {
        attempted: new Set([...prev.attempted, current.id]),
        correct: correct ? new Set([...prev.correct, current.id]) : prev.correct,
        weak: correct
          ? new Set([...prev.weak].filter(id => id !== current.id))
          : new Set([...prev.weak, current.id]),
      }
      saveProgress(next)
      return next
    })
  }

  function handleToggleWeak() {
    if (!current) return
    setProgress(prev => {
      const weak = new Set(prev.weak)
      if (weak.has(current.id)) weak.delete(current.id)
      else weak.add(current.id)
      const next = { ...prev, weak }
      saveProgress(next)
      return next
    })
  }

  function handleReset() {
    if (!confirm('Reset all progress, scores, and weak questions? This cannot be undone.')) return
    clearProgress()
    setProgress({ attempted: new Set(), correct: new Set(), weak: new Set() })
  }

  function handleShuffle() {
    setQueue(q => shuffle(q))
    setCursor(0)
  }

  function handleCountrySelect(country: string) {
    setFilters(f => ({ ...f, country, region: '' }))
  }

  function handleFiltersChange(f: Filters) {
    setFilters(f)
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-title">
          <h1>WSET D3</h1>
          <span className="header-subtitle">Wines of the World — Revision</span>
        </div>
        <StatsPanel
          total={allQuestions.length}
          filtered={queue.length}
          progress={progress}
          onReset={handleReset}
        />
      </header>

      <CountryNav
        questions={allQuestions}
        selected={filters.country}
        onSelect={handleCountrySelect}
      />

      <main className="app-main">
        <FilterPanel
          questions={allQuestions}
          filters={filters}
          onChange={handleFiltersChange}
          onShuffle={handleShuffle}
          weakCount={progress.weak.size}
        />

        {queue.length === 0 ? (
          <div className="empty-state">
            <p>No questions match your current filters.</p>
            <button className="btn btn-primary" onClick={() => setFilters(EMPTY_FILTERS)}>
              Clear Filters
            </button>
          </div>
        ) : current ? (
          <>
            <Navigation
              current={cursor}
              total={queue.length}
              onPrev={() => setCursor(c => Math.max(0, c - 1))}
              onNext={() => setCursor(c => Math.min(queue.length - 1, c + 1))}
            />
            <QuestionCard
              key={current.id}
              question={current}
              isWeak={progress.weak.has(current.id)}
              onAnswer={handleAnswer}
              onToggleWeak={handleToggleWeak}
            />
            <Navigation
              current={cursor}
              total={queue.length}
              onPrev={() => setCursor(c => Math.max(0, c - 1))}
              onNext={() => setCursor(c => Math.min(queue.length - 1, c + 1))}
            />
          </>
        ) : null}
      </main>
    </div>
  )
}
