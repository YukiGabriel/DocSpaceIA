import { useState, useRef, useEffect } from 'react'
import { glossary } from '../data/glossary'

interface Props {
  term: string
  children: React.ReactNode
}

export default function GlossaryPopup({ term, children }: Props) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!open) return
    const close = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', close)
    return () => document.removeEventListener('mousedown', close)
  }, [open])

  const entry = glossary[term.toLowerCase()]
  if (!entry) return <>{children}</>

  return (
    <span ref={ref} className="relative inline">
      <button
        onClick={() => setOpen(!open)}
        className="text-blue-400 hover:text-blue-300 underline decoration-dotted underline-offset-2 cursor-help transition"
      >
        {children}
      </button>
      {open && (
        <div className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 bg-gray-800 border border-gray-700 rounded-xl p-3 shadow-xl">
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px w-3 h-3 bg-gray-800 border-r border-b border-gray-700 rotate-45" />
          <h4 className="text-sm font-bold text-white mb-1">{entry.term}</h4>
          <p className="text-xs text-gray-400 leading-relaxed">{entry.definition}</p>
        </div>
      )}
    </span>
  )
}
