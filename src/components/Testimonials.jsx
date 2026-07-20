import { useLang } from '../i18n.jsx'

function Stars() {
  return (
    <span className="quote-card__stars" role="img" aria-label="5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
          <path
            fill="currentColor"
            d="M10 1.6l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.2l-4.94 2.6.94-5.5-4-3.9 5.53-.8L10 1.6z"
          />
        </svg>
      ))}
    </span>
  )
}

export default function Testimonials() {
  const { t } = useLang()

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="eyebrow">{t.testimonials.eyebrow}</p>
          <h2 className="section-heading">{t.testimonials.heading}</h2>
        </div>
        <div className="testimonials__grid stagger" data-reveal>
          {t.testimonials.quotes.map((q, i) => (
            <figure key={i} className="quote-card">
              <Stars />
              <blockquote>{q.quote}</blockquote>
              <figcaption>
                <span className="quote-card__avatar" aria-hidden="true">{q.name.charAt(0)}</span>
                <span>
                  <strong>{q.name}</strong>
                  <em>{q.role}</em>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
