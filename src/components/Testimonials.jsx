const QUOTES = [
  { quote: 'My SAT math score went up 110 points in two months. The sessions felt more like problem-solving than lectures.', name: 'Student, SAT prep' },
  { quote: 'Finally understood how the mark scheme actually awards points — that changed how I write out solutions.', name: 'Student, Cambridge A-Level' },
  { quote: 'Clear, patient, and always explained why an approach worked, not just that it did.', name: 'Parent of student' },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials grid-paper">
      <div className="container">
        <p className="eyebrow">Results</p>
        <h2 className="testimonials__heading">In their own words</h2>
        <div className="testimonials__grid">
          {QUOTES.map((q, i) => (
            <figure key={i} className="quote-card">
              <blockquote>{q.quote}</blockquote>
              <figcaption>{q.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
