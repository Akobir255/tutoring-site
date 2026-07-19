import { useEffect, useRef } from 'react'

/**
 * Renders a native Telegram post (e.g. an uploaded video) using Telegram's
 * official embed widget. `post` is "channelUsername/postNumber", e.g.
 * "Nizomiddins_blog/256".
 */
export default function TelegramEmbed({ post }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    container.innerHTML = ''

    const script = document.createElement('script')
    script.async = true
    script.src = 'https://telegram.org/js/telegram-widget.js?24'
    script.setAttribute('data-telegram-post', post)
    script.setAttribute('data-width', '100%')
    container.appendChild(script)

    return () => {
      container.innerHTML = ''
    }
  }, [post])

  return <div className="telegram-embed" ref={containerRef} />
}
