import { Link } from '../router.jsx'

export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <Link to="/" className="header__mark">N.</Link>
        <nav className="header__nav">
          <Link to="/learn">Learn</Link>
          <Link to="/#subjects">Subjects</Link>
          <Link to="/#approach">Approach</Link>
          <Link to="/#tutor">Tutor</Link>
          <Link to="/#testimonials">Results</Link>
        </nav>
        <Link to="/#book" className="btn btn-ghost header__cta">Book a trial lesson</Link>
      </div>
    </header>
  )
}
