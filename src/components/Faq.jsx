import { useLang } from '../i18n.jsx'
import { Link } from '../router.jsx'

export default function Faq() {
  const { t } = useLang()

  return (
    <section id="faq" className="faq">
      <div className="container faq__container">
        <div className="section-head" data-reveal>
          <p className="eyebrow">{t.faq.eyebrow}</p>
          <h2 className="section-heading">{t.faq.heading}</h2>
        </div>
        <div className="faq__list" data-reveal>
          {t.faq.items.map((item, i) => (
            <details key={item.q} className="faq-item" open={i === 0}>
              <summary>
                <span>{item.q}</span>
                <span className="faq-item__chevron" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </span>
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
        <p className="section-cta" data-reveal>
          <Link to="/#contact" className="link-cta">{t.faq.cta} →</Link>
        </p>
      </div>
    </section>
  )
}
