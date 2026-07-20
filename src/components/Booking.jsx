export default function Booking() {
  return (
    <section id="book" className="booking">
      <div className="container booking__inner">
        <h2>Start with a trial lesson.</h2>
        <p>30 minutes, one real problem from your syllabus, no obligation to continue.</p>
        <div className="hero__actions" style={{ justifyContent: 'center', marginTop: 28 }}>
          <a
            href="https://t.me/Nizomiddin_6585"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            Message on Telegram
          </a>
          <a href="mailto:n.davronov@newuu.uz" className="btn btn-ghost">Or email to book</a>
        </div>
        <p className="booking__note">Fastest reply on Telegram: @Nizomiddin_6585</p>
      </div>
    </section>
  )
}
