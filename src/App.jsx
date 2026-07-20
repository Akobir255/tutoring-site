import { RouterProvider, useRouter } from './router.jsx'
import { LangProvider } from './i18n.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Learn from './pages/Learn.jsx'
import TopicDetail from './pages/TopicDetail.jsx'
import './App.css'
import './pages/Learn.css'

function Routes() {
  const { path } = useRouter()

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
      </RouterProvider>
    </LangProvider>
  )
}
