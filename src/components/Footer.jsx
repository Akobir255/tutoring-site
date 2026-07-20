import { Link } from '../router.jsx'
import { useLang } from '../i18n.jsx'
import { CONTACT } from '../contactLinks.js'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Link to="/" className="header__mark">
            <span className="header__mark-badge">N</span>
            <span className="header__mark-text">Nizomiddin<em>Tutor</em></span>
          </Link>
          <p>{t.footer.blurb}</p>
        </div>

        <nav className="footer__col" aria-label="Footer">
          <h3>{t.footer.navHeading}</h3>
          <Link to="/">{t.footer.home}</Link>
          <Link to="/#courses">{t.nav.courses}</Link>
          <Link to="/#process">{t.nav.process}</Link>
          <Link to="/learn">{t.nav.learn}</Link>
          <Link to="/#faq">{t.nav.faq}</Link>
        </nav>

        <div className="footer__col">
          <h3>{t.footer.contactHeading}</h3>
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          <a href={CONTACT.telegram} target="_blank" rel="noreferrer">
            Telegram · {CONTACT.telegramHandle}
          </a>
          <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
        </div>

        <div className="footer__col">
          <h3>{t.footer.followHeading}</h3>
          <a href={CONTACT.telegramChannel} target="_blank" rel="noreferrer">
            Telegram channel
          </a>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} Nizomiddin Tutor</span>
        <span>{t.footer.subjects}</span>
      </div>
    </footer>
  )
}
