import { useLang } from '../i18n.jsx'

export default function Approach() {
  const { t } = useLang()

  return (
    <section id="approach" className="approach">
      <div className="container" data-reveal>
        <p className="eyebrow">{t.approach.eyebrow}</p>
        <h2 className="approach__heading">{t.approach.heading}</h2>
        <div className="approach__grid stagger">
          {t.approach.principles.map((p) => (
            <div key={p.title} className="principle">
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
