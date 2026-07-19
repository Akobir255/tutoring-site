import { useEffect, useState } from 'react'
import './WorkedProblem.css'

const STEPS = [
  { text: '3x\u00B2 \u2212 12x + 9 = 0' },
  { text: 'x\u00B2 \u2212 4x + 3 = 0' },
  { text: '(x \u2212 1)(x \u2212 3) = 0' },
  { text: 'x = 1  or  x = 3', final: true },
]

export default function WorkedProblem() {
  const [visible, setVisible] = useState(0)

  useEffect(() => {
    if (visible >= STEPS.length) return
    const t = setTimeout(() => setVisible((v) => v + 1), visible === 0 ? 500 : 900)
    return () => clearTimeout(t)
  }, [visible])

  const progressPct = Math.min(100, Math.round((visible / STEPS.length) * 100))

  return (
    <div className="exercise-card">
      <div className="exercise-card__top">
        <span className="exercise-card__badge">SAT Math \u00B7 Q7</span>
        <span className="exercise-card__count">{Math.min(visible, STEPS.length)}/{STEPS.length}</span>
      </div>
      <div className="exercise-card__progress">
        <div className="exercise-card__progress-fill" style={{ width: `${progressPct}%` }} />
      </div>
      <div className="exercise-card__lines">
        {STEPS.map((step, i) => (
          <div
            key={i}
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
