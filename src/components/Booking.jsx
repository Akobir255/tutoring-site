import { useLang } from '../i18n.jsx'

export default function Booking() {
  const { t } = useLang()

  return (
    <section id="book" className="booking">
      <div className="container booking__inner">
        <h2>{t.booking.heading}</h2>
        <p>{t.booking.sub}</p>
        <div className="hero__actions" style={{ justifyContent: 'center', marginTop: 28 }}>
          <a
            href="https://t.me/Nizomiddin_6585"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            {t.booking.telegram}
          </a>
          <a href="mailto:n.davronov@newuu.uz" className="btn btn-ghost">{t.booking.email}</a>
        </div>
        <p className="booking__note">{t.booking.note}</p>
      </div>
    </section>
  )
}
