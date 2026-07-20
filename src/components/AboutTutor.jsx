const STATS = [
  { value: '800/800', label: 'SAT Math score' },
  { value: 'A*', label: 'Cambridge A-Level Math' },
  { value: '500+', label: 'students taught' },
  { value: '2 yrs', label: 'online teaching' },
]

export default function AboutTutor() {
  return (
    <section id="tutor" className="tutor">
      <div className="container tutor__inner">
        <div className="tutor__photo-wrap">
          <img
            src="/tutor.jpg"
            alt="Nizomiddin, SAT and Cambridge math tutor"
            className="tutor__photo"
            loading="lazy"
          />
        </div>
        <div className="tutor__copy">
          <p className="eyebrow">Meet your tutor</p>
          <h2 className="tutor__heading">Nizomiddin</h2>
          <p className="tutor__bio">
            Presidential School graduate and full-time SAT &amp; Cambridge math tutor.
            A perfect 800/800 on SAT Math and an A* in A-Level Math — and two years of
            online teaching spent helping more than 500 students get to their own best scores.
          </p>
          <div className="tutor__stats">
            {STATS.map((s) => (
              <div key={s.label} className="tutor__stat">
                <span className="tutor__stat-value">{s.value}</span>
                <span className="tutor__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
          <div className="hero__actions">
            <a
              href="https://t.me/Nizomiddin_6585"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Message on Telegram
            </a>
            <a
              href="https://t.me/Nizomiddins_blog"
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              Follow the channel →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
