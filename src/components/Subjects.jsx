const SUBJECTS = [
  {
    tag: 'SAT',
    title: 'SAT Math',
    desc: 'Digital SAT strategy and content — algebra, advanced math, problem-solving & data analysis, and geometry/trig. Timing drills included.',
    points: ['Full-length practice tests', 'Section-by-section pacing', 'Score-target roadmap'],
  },
  {
    tag: 'Cambridge',
    title: 'Cambridge IGCSE & A-Level Math',
    desc: 'Syllabus-aligned coverage for IGCSE Math (0580/0606) and A-Level Math/Further Math, mapped directly to exam board mark schemes.',
    points: ['Past-paper walkthroughs', 'Mark-scheme precision', 'Pure, Mechanics & Stats tracks'],
  },
]

export default function Subjects() {
  return (
    <section id="subjects" className="subjects grid-paper">
      <div className="container">
        <p className="eyebrow">What I teach</p>
        <h2 className="subjects__heading">Two exams. One way of thinking clearly under pressure.</h2>
        <div className="subjects__grid">
          {SUBJECTS.map((s) => (
            <div key={s.title} className="subject-card">
              <span className="subject-card__tag">{s.tag}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <ul>
                {s.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
