import { useLang } from '../i18n.jsx'

export default function Subjects() {
  const { t } = useLang()

  return (
    <section id="subjects" className="subjects grid-paper">
      <div className="container">
        <p className="eyebrow">{t.subjects.eyebrow}</p>
        <h2 className="subjects__heading">{t.subjects.heading}</h2>
        <div className="subjects__grid">
          {t.subjects.cards.map((s) => (
            <div key={s.title} className="subject-card">
              <span className="subject-card__tag">{s.tag}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <ul>
                {s.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
