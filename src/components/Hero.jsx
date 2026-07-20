import WorkedProblem from './WorkedProblem.jsx'
import { useLang } from '../i18n.jsx'

export default function Hero() {
  const { t } = useLang()

  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1 className="hero__headline">
            {t.hero.line1}<br />{t.hero.line2}<br />
            <span style={{ color: 'var(--blue)' }}>{t.hero.line3}</span>
          </h1>
          <p className="hero__sub">{t.hero.sub}</p>
          <div className="hero__actions">
            <a href="#book" className="btn btn-primary">{t.hero.ctaPrimary}</a>
            <a href="#subjects" className="btn btn-ghost">{t.hero.ctaSecondary}</a>
          </div>
          <a href="#tutor" className="hero__trust">
            <img src="/tutor.jpg" alt="" className="hero__trust-avatar" />
            <span>{t.hero.trust}</span>
          </a>
        </div>
        <div className="hero__visual">
          <WorkedProblem />
        </div>
      </div>
    </section>
  )
}
