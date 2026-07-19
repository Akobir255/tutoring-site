import WorkedProblem from './WorkedProblem.jsx'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="eyebrow">SAT & Cambridge Math Tutoring</p>
          <h1 className="hero__headline">
            Every wrong answer<br />has a reason.<br />
            <span style={{ color: 'var(--blue)' }}>We find it.</span>
          </h1>
          <p className="hero__sub">
            One-on-one tutoring for SAT Math and Cambridge IGCSE / A-Level Math —
            built around how you actually think, not a script.
          </p>
          <div className="hero__actions">
            <a href="#book" className="btn btn-primary">Book a trial lesson</a>
            <a href="#subjects" className="btn btn-ghost">See subjects</a>
          </div>
        </div>
        <div className="hero__visual">
          <WorkedProblem />
        </div>
      </div>
    </section>
  )
}
