// Fade-up on scroll: observes [data-reveal] elements and adds .is-visible once.
export function initReveal() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('is-visible'))
    return () => {}
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      }
    },
    { threshold: 0.12 }
  )

  document.querySelectorAll('[data-reveal]:not(.is-visible)').forEach((el) => observer.observe(el))
  return () => observer.disconnect()
}
