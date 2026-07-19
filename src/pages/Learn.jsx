import { useState } from 'react'
import { SUBJECTS, hasVideo } from '../data/curriculum.js'
import { Link } from '../router.jsx'

export default function Learn() {
  const [activeId, setActiveId] = useState(SUBJECTS[0].id)
  const subject = SUBJECTS.find((s) => s.id === activeId)

  return (
    <section className="learn">
      <div className="container">
        <p className="eyebrow">Learn</p>
        <h1 className="learn__heading">Every topic, worked out in the open.</h1>
        <p className="learn__sub">
          Pick a subject, pick a topic, watch the walkthrough. The same explanations
          used in one-on-one lessons — free to revisit any time.
        </p>

        <div className="learn__tabs" role="tablist">
          {SUBJECTS.map((s) => (
            <button
              key={s.id}
              role="tab"
              aria-selected={s.id === activeId}
              className={`learn__tab${s.id === activeId ? ' learn__tab--active' : ''}`}
              onClick={() => setActiveId(s.id)}
            >
              {s.shortLabel}
            </button>
          ))}
        </div>

        <p className="learn__intro">{subject.intro}</p>

        <div className="learn__grid">
          {subject.topics.map((topic) => {
            const videoCount = topic.lessons.filter(hasVideo).length
            return (
              <Link
                key={topic.id}
                to={`/learn/${subject.id}/${topic.id}`}
                className="topic-card"
              >
                <span className="topic-card__domain">{topic.domain}</span>
                <h3>{topic.title}</h3>
                <p>{topic.blurb}</p>
                <div className="topic-card__footer">
                  <span className="topic-card__count">{topic.lessons.length} lessons</span>
                  {videoCount === 0 ? (
                    <span className="topic-card__badge topic-card__badge--soon">Coming soon</span>
                  ) : (
                    <span className="topic-card__badge topic-card__badge--ready">
                      {videoCount}/{topic.lessons.length} videos up
                    </span>
                  )}
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
