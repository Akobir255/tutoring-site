import { useEffect, useState } from 'react'
import './WorkedProblem.css'

const PROBLEMS = [
  {
    badge: 'SAT Math · Q7',
    steps: [
      { text: '3x\u00B2 \u2212 12x + 9 = 0' },
      { text: 'x\u00B2 \u2212 4x + 3 = 0' },
      { text: '(x \u2212 1)(x \u2212 3) = 0' },
      { text: 'x = 1  or  x = 3', final: true },
    ],
  },
  {
    badge: 'IGCSE 0580 · P4',
    steps: [
      { text: '2(y + 3) = 5y \u2212 9' },
      { text: '2y + 6 = 5y \u2212 9' },
      { text: '15 = 3y' },
      { text: 'y = 5', final: true },
    ],
  },
]

export default function WorkedProblem() {
  const [problem, setProblem] = useState(0)
  const [visible, setVisible] = useState(0)

  const steps = PROBLEMS[problem].steps

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setVisible(steps.length)
      return
    }
    if (visible >= steps.length) {
      // pause on the finished solution, then switch to the next problem
      const t = setTimeout(() => {
        setProblem((p) => (p + 1) % PROBLEMS.length)
        setVisible(0)
      }, 3200)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => setVisible((v) => v + 1), visible === 0 ? 600 : 950)
    return () => clearTimeout(t)
  }, [visible, steps.length])

  const progressPct = Math.min(100, Math.round((visible / steps.length) * 100))

  return (
    <div className="exercise-card" aria-hidden="true">
      <div className="exercise-card__top">
        <span className="exercise-card__badge">{PROBLEMS[problem].badge}</span>
        <span className="exercise-card__count">{Math.min(visible, steps.length)}/{steps.length}</span>
      </div>
      <div className="exercise-card__progress">
        <div className="exercise-card__progress-fill" style={{ width: `${progressPct}%` }} />
      </div>
      <div className="exercise-card__lines">
        {steps.map((step, i) => (
          <div
            key={`${problem}-${i}`}
            className={`exercise-card__line ${step.final ? 'is-final' : ''} ${i < visible ? 'is-shown' : ''}`}
          >
            <span className="exercise-card__check">{i < visible ? '\u2713' : ''}</span>
            {step.text}
          </div>
        ))}
      </div>
    </div>
  )
}
