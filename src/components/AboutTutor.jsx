import { useLang } from '../i18n.jsx'

export default function AboutTutor() {
  const { t } = useLang()

  return (
    <section id="tutor" className="tutor">
      <div className="container tutor__inner" data-reveal>
        <div className="tutor__photo-wrap">
          <img
            src="/tutor.jpg"
            alt="Nizomiddin, SAT and Cambridge math tutor"
            className="tutor__photo"
            loading="lazy"
          />
        </div>
        <div className="tutor__copy">
          <p className="eyebrow">{t.tutor.eyebrow}</p>
          <h2 className="tutor__heading">Nizomiddin</h2>
          <p className="tutor__bio">{t.tutor.bio}</p>
          <div className="tutor__stats stagger">
            {t.tutor.stats.map((s) => (
              <div key={s.label} className="tutor__stat">
                <span className="tutor__stat-value">{s.value}</span>
                <span className="tutor__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
          <div className="hero__actions">
            <a href="#book" className="btn btn-primary">{t.tutor.book}</a>
            <a
              href="https://t.me/Nizomiddins_blog"
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              {t.tutor.follow}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
