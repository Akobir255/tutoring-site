import { useEffect, useRef, useState } from 'react'
import { Link } from '../router.jsx'
import { useLang } from '../i18n.jsx'

function useCountUp(target, start) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start || target == null) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(target)
      return
    }
    const duration = 1400
    let raf
    const t0 = performance.now()
    const tick = (now) => {
      const p = Math.min(1, (now - t0) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.round(eased * target))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [start, target])

  return value
}

function Stat({ stat, start }) {
  const value = useCountUp(stat.value, start)

  return (
    <div className="result-stat">
      <span className="result-stat__value">
        {stat.value == null ? stat.display : `${value}${stat.suffix || ''}`}
      </span>
      <span className="result-stat__label">{stat.label}</span>
    </div>
  )
}

export default function Results() {
  const { t } = useLang()
  const ref = useRef(null)
  const [start, setStart] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setStart(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="results" className="results">
      <div className="container" data-reveal>
        <div className="section-head section-head--light">
          <p className="eyebrow eyebrow--light">{t.results.eyebrow}</p>
          <h2 className="section-heading">{t.results.heading}</h2>
        </div>
        <div className="results__grid" ref={ref}>
          {t.results.stats.map((s) => (
            <Stat key={s.label} stat={s} start={start} />
          ))}
        </div>
        <p className="section-cta">
          <Link to="/#contact" className="btn btn-white">{t.results.cta} →</Link>
        </p>
      </div>
    </section>
  )
}
