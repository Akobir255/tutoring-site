import { Link } from '../router.jsx'
import { useLang } from '../i18n.jsx'

const ICONS = {
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="0.6" fill="currentColor" />
    </>
  ),
  strategy: (
    <>
      <path d="M4 19 9 12l4 4 7-9" />
      <path d="M15.5 7H20v4.5" />
    </>
  ),
  calendar: (
    <>
      <rect x="4" y="5.5" width="16" height="15" rx="2.5" />
      <path d="M4 10h16M8.5 3.5v3.5M15.5 3.5v3.5" />
      <path d="m9.5 15 2 2 3.5-3.5" />
    </>
  ),
  paper: (
    <>
      <rect x="5.5" y="3.5" width="13" height="17" rx="2" />
      <path d="M9 8.5h6M9 12h6M9 15.5h3.5" />
    </>
  ),
  chart: (
    <>
      <path d="M4.5 20h15" />
      <rect x="6" y="12" width="3" height="8" rx="0.8" />
      <rect x="10.5" y="8" width="3" height="12" rx="0.8" />
      <rect x="15" y="4.5" width="3" height="15.5" rx="0.8" />
    </>
  ),
  person: (
    <>
      <circle cx="12" cy="8" r="3.6" />
      <path d="M5.5 20c.8-3.6 3.5-5.4 6.5-5.4s5.7 1.8 6.5 5.4" />
    </>
  ),
}

function FeatureIcon({ name }) {
  return (
    <span className="feature-card__icon" aria-hidden="true">
      <svg
        viewBox="0 0 24 24"
        width="26"
        height="26"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {ICONS[name]}
      </svg>
    </span>
  )
}

export default function WhyMe() {
  const { t } = useLang()

  return (
    <section id="why" className="why">
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="eyebrow">{t.why.eyebrow}</p>
          <h2 className="section-heading">{t.why.heading}</h2>
          <p className="section-sub">{t.why.sub}</p>
        </div>
        <div className="why__grid stagger" data-reveal>
          {t.why.items.map((item) => (
            <article key={item.title} className="feature-card">
              <FeatureIcon name={item.icon} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <p className="section-cta" data-reveal>
          <Link to="/#contact" className="link-cta">{t.why.cta} →</Link>
        </p>
      </div>
    </section>
  )
}
