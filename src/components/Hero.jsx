import WorkedProblem from './WorkedProblem.jsx'
import { Link } from '../router.jsx'
import { useLang } from '../i18n.jsx'

export default function Hero() {
  const { t } = useLang()

  return (
    <section className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__copy" data-reveal>
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1 className="hero__headline">
            {t.hero.headline1}{' '}
            <span className="hero__headline-accent">{t.hero.headline2}</span>
          </h1>
          <p className="hero__sub">{t.hero.sub}</p>
          <div className="hero__actions">
            <Link to="/#contact" className="btn btn-primary btn-lg">{t.hero.ctaPrimary}</Link>
            <Link to="/#contact" className="btn btn-ghost btn-lg">{t.hero.ctaSecondary}</Link>
          </div>
          <a href="#tutor" className="hero__trust">
            <img src="/tutor.jpg" alt="" width="44" height="44" className="hero__trust-avatar" />
            <span>{t.hero.trust}</span>
          </a>
        </div>
        <div className="hero__visual" data-reveal>
          <div className="hero__chip hero__chip--1">
            <span className="hero__chip-dot" aria-hidden="true">↑</span>
            {t.hero.chip1}
          </div>
          <div className="hero__chip hero__chip--2">
            <span className="hero__chip-dot hero__chip-dot--star" aria-hidden="true">★</span>
            {t.hero.chip2}
          </div>
          <WorkedProblem />
        </div>
      </div>
    </section>
  )
}
