import { Link } from '../router.jsx'
import { useLang } from '../i18n.jsx'

export default function Process() {
  const { t } = useLang()

  return (
    <section id="process" className="process">
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="eyebrow">{t.process.eyebrow}</p>
          <h2 className="section-heading">{t.process.heading}</h2>
        </div>
        <ol className="process__grid stagger" data-reveal>
          {t.process.steps.map((step, i) => (
            <li key={step.title} className="step-card">
              <span className="step-card__num" aria-hidden="true">{i + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
        <p className="section-cta" data-reveal>
          <Link to="/#contact" className="btn btn-primary">{t.process.cta}</Link>
        </p>
      </div>
    </section>
  )
}
