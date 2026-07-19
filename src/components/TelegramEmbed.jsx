/**
 * A clean "watch" card for a lesson video hosted natively on Telegram.
 * Telegram's own embed widget is built for chat-message previews, not a
 * video-player experience, so instead of forcing it inline we show a clear
 * call-to-action that opens the actual video in Telegram (app or web).
 * `post` is "channelUsername/postNumber", e.g. "Nizomiddins_blog/256".
 */
export default function TelegramEmbed({ post, title }) {
  const href = `https://t.me/${post}`

  return (
    <div className="telegram-watch">
      <span className="telegram-watch__icon">
        <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
          <path
            fill="currentColor"
            d="M9.04 15.62 8.9 19.6c.4 0 .58-.17.79-.38l1.9-1.82 3.94 2.87c.72.4 1.24.19 1.43-.67l2.6-12.2h.01c.23-1.06-.38-1.48-1.08-1.22L3.2 10.9c-1.04.4-1.02.98-.18 1.24l4.24 1.32 9.85-6.2c.46-.3.89-.13.54.17"
          />
        </svg>
      </span>
      <p className="telegram-watch__title">{title}</p>
      <p className="telegram-watch__note">This lesson is hosted on our Telegram channel.</p>
      <a className="btn btn-primary" href={href} target="_blank" rel="noreferrer">
        Watch on Telegram ↗
      </a>
    </div>
  )
}
