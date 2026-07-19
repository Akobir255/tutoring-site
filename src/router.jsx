import { createContext, useContext, useEffect, useState, useCallback } from 'react'

const RouterContext = createContext(null)

export function RouterProvider({ children }) {
  const [path, setPath] = useState(window.location.pathname)

  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname)
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  const navigate = useCallback((to) => {
    const [pathname, hash] = to.split('#')
    const targetPath = pathname || '/'
    const samePath = targetPath === window.location.pathname

    window.history.pushState({}, '', to)
    if (!samePath) setPath(targetPath)

    requestAnimationFrame(() => {
      if (hash) {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else {
        window.scrollTo({ top: 0, behavior: samePath ? 'smooth' : 'auto' })
      }
    })
  }, [])

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      {children}
    </RouterContext.Provider>
  )
}

export function useRouter() {
  return useContext(RouterContext)
}

export function Link({ to, className, children, onClick, ...rest }) {
  const { navigate } = useRouter()
  return (
    <a
      href={to}
      className={className}
      onClick={(e) => {
        e.preventDefault()
        onClick?.(e)
        navigate(to)
      }}
      {...rest}
    >
      {children}
    </a>
  )
}
