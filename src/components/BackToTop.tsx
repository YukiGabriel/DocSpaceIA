import { useEffect, useState, useCallback } from 'react'
import { useLocation } from 'react-router-dom'

export default function BackToTop() {
  const [show, setShow] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setShow(false)
    const el = document.querySelector<HTMLElement>('main.overflow-y-auto') || document.documentElement

    const onScroll = () => setShow(el.scrollTop > 400)
    onScroll()
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [location.pathname])

  const scrollToTop = useCallback(() => {
    const el = document.querySelector<HTMLElement>('main.overflow-y-auto') || document.documentElement
    el.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  if (!show) return null

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg shadow-blue-600/25 transition hover:-translate-y-1"
      title="Voltar ao topo"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
      </svg>
    </button>
  )
}
