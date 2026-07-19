export default function Booking() {
  return (
    <section id="book" className="booking">
      <div className="container booking__inner">
        <h2>Start with a trial lesson.</h2>
        <p>30 minutes, one real problem from your syllabus, no obligation to continue.</p>
        <div className="hero__actions" style={{ justifyContent: 'center', marginTop: 28 }}>
          <a href="mailto:hello@nizomiddintutor.com" className="btn btn-primary">Email to book</a>
          <a href="#" className="btn btn-ghost">Or schedule online →</a>
        </div>
        <p className="booking__note">Online scheduling link goes here once you connect Calendly or Cal.com.</p>
      </div>
    </section>
  )
}
