import { useState } from 'react'
import { getTopic, hasVideo, getEmbedUrl } from '../data/curriculum.js'
import { Link } from '../router.jsx'

export default function TopicDetail({ subjectId, topicId }) {
  const found = getTopic(subjectId, topicId)
  const firstVideoLesson = found?.topic.lessons.find(hasVideo) ?? found?.topic.lessons[0]
  const [activeLesson, setActiveLesson] = useState(firstVideoLesson)

  if (!found) {
    return (
      <section className="learn">
        <div className="container">
          <p className="eyebrow">Learn</p>
          <h1 className="learn__heading">Topic not found</h1>
          <p className="learn__sub">That topic doesn't exist yet.</p>
          <Link to="/learn" className="btn btn-ghost" style={{ marginTop: 24 }}>← Back to all topics</Link>
        </div>
      </section>
    )
  }

  const { subject, topic } = found
  const embedUrl = getEmbedUrl(activeLesson)

  return (
    <section className="learn">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/learn">Learn</Link>
          <span>/</span>
          <Link to="/learn">{subject.shortLabel}</Link>
          <span>/</span>
          <span className="breadcrumb__current">{topic.title}</span>
        </div>

        <span className="topic-card__domain">{topic.domain}</span>
        <h1 className="learn__heading" style={{ marginTop: 10 }}>{topic.title}</h1>
        <p className="learn__sub">{topic.blurb}</p>

        <div className="topic-detail">
          <div className="video-stage">
            {embedUrl ? (
              <iframe
                key={activeLesson.id}
                src={embedUrl}
                title={activeLesson.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="video-stage__empty">
                <span className="video-stage__play">▶</span>
                <p>Video coming soon</p>
                <span>{activeLesson?.title}</span>
              </div>
            )}
          </div>

          <ol className="lesson-list">
            {topic.lessons.map((lesson, i) => (
              <li
                key={lesson.id}
                className={`lesson-list__item${activeLesson?.id === lesson.id ? ' lesson-list__item--active' : ''}`}
                onClick={() => setActiveLesson(lesson)}
              >
                <span className="lesson-list__index">{i + 1}</span>
                <span className="lesson-list__title">{lesson.title}</span>
                {hasVideo(lesson) ? (
                  <span className="lesson-list__status lesson-list__status--ready">Ready</span>
                ) : (
                  <span className="lesson-list__status">Soon</span>
                )}
              </li>
            ))}
          </ol>
        </div>

        <div className="topic-detail__cta">
          <p>Want this explained live, for your exact question?</p>
          <Link to="/#book" className="btn btn-primary">Book a trial lesson</Link>
        </div>
      </div>
    </section>
  )
}
