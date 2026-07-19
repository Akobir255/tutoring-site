const PRINCIPLES = [
  {
    title: 'Diagnose before drilling',
    text: 'The first session maps exactly where a mistake comes from — a gap, a misread, or a timing problem — so practice targets the real issue.',
  },
  {
    title: 'Work the actual exam',
    text: 'Every session uses real SAT and Cambridge-style questions, marked the way the exam board actually marks them.',
  },
  {
    title: 'Show the reasoning, not just the answer',
    text: 'You learn to explain a step, not just recognize it — that\u2019s what holds up on test day when the question looks slightly different.',
  },
]

export default function Approach() {
  return (
    <section id="approach" className="approach">
      <div className="container">
        <p className="eyebrow">How sessions work</p>
        <h2 className="approach__heading">Not tricks. Understanding that survives a harder question.</h2>
        <div className="approach__grid">
          {PRINCIPLES.map((p) => (
            <div key={p.title} className="principle">
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
