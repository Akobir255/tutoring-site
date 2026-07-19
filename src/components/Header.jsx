export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <span className="header__mark">N.</span>
        <nav className="header__nav">
          <a href="#subjects">Subjects</a>
          <a href="#approach">Approach</a>
          <a href="#testimonials">Results</a>
        </nav>
        <a href="#book" className="btn btn-ghost header__cta">Book a trial lesson</a>
      </div>
    </header>
  )
}
