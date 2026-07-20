import { Link } from '../router.jsx'
import { useLang } from '../i18n.jsx'

export default function Courses() {
  const { t } = useLang()

  return (
    <section id="courses" className="courses">
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="eyebrow">{t.courses.eyebrow}</p>
          <h2 className="section-heading">{t.courses.heading}</h2>
        </div>

        <div className="courses__featured stagger" data-reveal>
          {t.courses.featured.map((c) => (
            <article key={c.title} className="course-card">
              <span className="course-card__tag">{c.tag}</span>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
              <ul>
                {c.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
              <Link to="/#contact" className="link-cta course-card__cta">
                {t.hero.ctaPrimary} →
              </Link>
            </article>
          ))}
        </div>

        <div className="courses__extras stagger" data-reveal>
          {t.courses.extras.map((c) => (
            <article key={c.title} className="mini-card">
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </article>
          ))}
        </div>

        <p className="section-cta" data-reveal>
          <Link to="/#contact" className="link-cta">{t.courses.cta} →</Link>
        </p>
      </div>
    </section>
  )
}
