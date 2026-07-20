import { Link } from '../router.jsx'
import { useLang } from '../i18n.jsx'

export default function Header() {
  const { lang, setLang, t } = useLang()

  return (
    <header className="header">
      <div className="container header__inner">
        <Link to="/" className="header__mark">N.</Link>
        <nav className="header__nav">
          <Link to="/learn">{t.nav.learn}</Link>
          <Link to="/#subjects">{t.nav.subjects}</Link>
          <Link to="/#approach">{t.nav.approach}</Link>
          <Link to="/#tutor">{t.nav.tutor}</Link>
          <Link to="/#testimonials">{t.nav.results}</Link>
        </nav>
        <div className="header__right">
          <div className="lang-toggle" role="group" aria-label="Language">
            <button
              className={`lang-toggle__btn${lang === 'uz' ? ' lang-toggle__btn--active' : ''}`}
              onClick={() => setLang('uz')}
            >
              UZ
            </button>
            <button
              className={`lang-toggle__btn${lang === 'en' ? ' lang-toggle__btn--active' : ''}`}
              onClick={() => setLang('en')}
            >
              EN
            </button>
          </div>
          <Link to="/#book" className="btn btn-ghost header__cta">{t.nav.cta}</Link>
        </div>
      </div>
    </header>
  )
}
