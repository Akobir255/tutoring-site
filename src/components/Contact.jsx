import { useState } from 'react'
import { useLang } from '../i18n.jsx'
import { CONTACT } from '../contactLinks.js'

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
    <path fill="currentColor" d="M12 2a9.9 9.9 0 0 0-8.5 15.1L2 22l5-1.4A10 10 0 1 0 12 2Zm0 18.1a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.1 8.1 0 1 1 12 20.1Zm4.5-6c-.2-.1-1.4-.7-1.7-.8s-.4-.1-.6.1-.6.8-.8 1-.3.2-.5.1a6.6 6.6 0 0 1-2-1.2 7.3 7.3 0 0 1-1.3-1.7c-.2-.2 0-.4.1-.5l.4-.5c.1-.2.2-.3.3-.5a.5.5 0 0 0 0-.4c0-.1-.6-1.4-.8-1.9s-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 2.9 2.9 0 0 0-.9 2.1 5 5 0 0 0 1 2.7 11.4 11.4 0 0 0 4.4 3.9 14 14 0 0 0 1.5.5 3.5 3.5 0 0 0 1.6.1 2.6 2.6 0 0 0 1.7-1.2 2 2 0 0 0 .2-1.2c-.1-.1-.2-.2-.5-.3Z" />
  </svg>
)

const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
    <path fill="currentColor" d="M9.04 15.62 8.9 19.6c.4 0 .58-.17.79-.38l1.9-1.82 3.94 2.87c.72.4 1.24.19 1.43-.67l2.6-12.2h.01c.23-1.06-.38-1.48-1.08-1.22L3.2 10.9c-1.04.4-1.02.98-.18 1.24l4.24 1.32 9.85-6.2c.46-.3.89-.13.54.17" />
  </svg>
)

const MailIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="m4 7 8 6 8-6" />
  </svg>
)

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
    <rect x="4" y="5.5" width="16" height="15" rx="2.5" />
    <path d="M4 10h16M8.5 3.5v3.5M15.5 3.5v3.5" />
  </svg>
)

export default function Contact() {
  const { t } = useLang()
  const f = t.contact.form
  const [form, setForm] = useState({ name: '', contact: '', exam: '', message: '' })

  const set = (key) => (e) => setForm((v) => ({ ...v, [key]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Trial lesson request — ${form.name || 'new student'}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nContact: ${form.contact}\nExam: ${form.exam || f.examOptions[3]}\n\n${form.message}`
    )
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="eyebrow">{t.contact.eyebrow}</p>
          <h2 className="section-heading">{t.contact.heading}</h2>
          <p className="section-sub">{t.contact.sub}</p>
        </div>

        <div className="contact__grid" data-reveal>
          <form className="contact-form" onSubmit={submit}>
            <div className="contact-form__row">
              <label className="field">
                <span>{f.name}</span>
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder={f.namePh}
                  value={form.name}
                  onChange={set('name')}
                  required
                />
              </label>
              <label className="field">
                <span>{f.contact}</span>
                <input
                  type="text"
                  name="contact"
                  autoComplete="email"
                  placeholder={f.contactPh}
                  value={form.contact}
                  onChange={set('contact')}
                  required
                />
              </label>
            </div>
            <label className="field">
              <span>{f.exam}</span>
              <select name="exam" value={form.exam} onChange={set('exam')}>
                <option value="">{f.examOptions[3]}</option>
                {f.examOptions.slice(0, 3).map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            </label>
            <label className="field">
              <span>{f.message}</span>
              <textarea
                name="message"
                rows="4"
                placeholder={f.messagePh}
                value={form.message}
                onChange={set('message')}
              />
            </label>
            <button type="submit" className="btn btn-primary btn-lg contact-form__submit">
              {f.submit}
            </button>
            <p className="contact-form__note">{f.note}</p>
          </form>

          <aside className="contact-channels">
            <h3>{t.contact.channels.heading}</h3>
            <a className="channel channel--whatsapp" href={CONTACT.whatsapp} target="_blank" rel="noreferrer">
              <WhatsAppIcon />
              <span>{t.contact.channels.whatsapp}</span>
            </a>
            <a className="channel channel--telegram" href={CONTACT.telegram} target="_blank" rel="noreferrer">
              <TelegramIcon />
              <span>{t.contact.channels.telegram} · {CONTACT.telegramHandle}</span>
            </a>
            <a className="channel" href={`mailto:${CONTACT.email}`}>
              <MailIcon />
              <span>{CONTACT.email}</span>
            </a>
            <a className="channel channel--calendar" href={CONTACT.calendar} target="_blank" rel="noreferrer">
              <CalendarIcon />
              <span>{t.contact.channels.calendar}</span>
            </a>
          </aside>
        </div>
      </div>
    </section>
  )
}
