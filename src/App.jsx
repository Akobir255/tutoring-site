import { useEffect } from 'react'
import { RouterProvider, useRouter } from './router.jsx'
import { LangProvider, useLang } from './i18n.jsx'
import { initReveal } from './reveal.js'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Learn from './pages/Learn.jsx'
import TopicDetail from './pages/TopicDetail.jsx'
import './App.css'
import './pages/Learn.css'

function Routes() {
  const { path } = useRouter()
  const { lang } = useLang()

  useEffect(() => {
    const cleanup = initReveal()
    return cleanup
  }, [path, lang])

  if (path === '/learn') return <Learn />

  const topicMatch = path.match(/^\/learn\/([\w-]+)\/([\w-]+)\/?$/)
  if (topicMatch) return <TopicDetail subjectId={topicMatch[1]} topicId={topicMatch[2]} />

  return <Home />
}

export default function App() {
  return (
    <LangProvider>
      <RouterProvider>
        <Header />
        <Routes />
        <Footer />
        <a
          className="tg-fab"
          href="https://t.me/Nizomiddin_6585"
          target="_blank"
          rel="noreferrer"
          aria-label="Message on Telegram"
        >
          <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
            <path
              fill="currentColor"
              d="M9.04 15.62 8.9 19.6c.4 0 .58-.17.79-.38l1.9-1.82 3.94 2.87c.72.4 1.24.19 1.43-.67l2.6-12.2h.01c.23-1.06-.38-1.48-1.08-1.22L3.2 10.9c-1.04.4-1.02.98-.18 1.24l4.24 1.32 9.85-6.2c.46-.3.89-.13.54.17"
            />
          </svg>
        </a>
      </RouterProvider>
    </LangProvider>
  )
}
