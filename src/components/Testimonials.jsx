import { useLang } from '../i18n.jsx'

export default function Testimonials() {
  const { t } = useLang()

  return (
    <section id="testimonials" className="testimonials grid-paper">
      <div className="container">
        <p className="eyebrow">{t.testimonials.eyebrow}</p>
        <h2 className="testimonials__heading">{t.testimonials.heading}</h2>
        <div className="testimonials__grid">
          {t.testimonials.quotes.map((q, i) => (
            <figure key={i} className="quote-card">
              <blockquote>{q.quote}</blockquote>
              <figcaption>{q.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
