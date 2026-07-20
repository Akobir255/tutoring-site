import { useState } from 'react'
import { Link } from '../router.jsx'
import { useLang } from '../i18n.jsx'

export default function Header() {
  const { lang, setLang, t } = useLang()
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  const links = [
    { to: '/#courses', label: t.nav.courses },
    { to: '/#why', label: t.nav.why },
    { to: '/#process', label: t.nav.process },
    { to: '/#results', label: t.nav.results },
    { to: '/learn', label: t.nav.learn },
    { to: '/#faq', label: t.nav.faq },
  ]

  return (
    <header className="header">
      <div className="container header__inner">
        <Link to="/" className="header__mark" onClick={close} aria-label="Nizomiddin Tutor — home">
          <span className="header__mark-badge">N</span>
          <span className="header__mark-text">Nizomiddin<em>Tutor</em></span>
        </Link>

        <nav className="header__nav" aria-label="Main">
          {links.map((l) => (
            <Link key={l.to} to={l.to}>{l.label}</Link>
          ))}
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
          <Link to="/#contact" className="btn btn-primary btn-sm header__cta">{t.nav.cta}</Link>
          <button
            className="header__burger"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`header__burger-lines${open ? ' is-open' : ''}`} aria-hidden="true">
              <i /><i /><i />
            </span>
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`mobile-menu${open ? ' is-open' : ''}`}>
        <nav className="mobile-menu__nav" aria-label="Mobile">
          {links.map((l) => (
            <Link key={l.to} to={l.to} onClick={close}>{l.label}</Link>
          ))}
          <Link to="/#contact" onClick={close}>{t.nav.contact}</Link>
        </nav>
        <Link to="/#contact" className="btn btn-primary mobile-menu__cta" onClick={close}>
          {t.nav.cta}
        </Link>
      </div>
    </header>
  )
}
