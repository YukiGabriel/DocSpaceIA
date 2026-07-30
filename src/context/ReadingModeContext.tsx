import { createContext, useContext, useState, type ReactNode } from 'react'

interface ReadingModeContextType {
  readingMode: boolean
  toggle: () => void
}

const ReadingModeContext = createContext<ReadingModeContextType | null>(null)

export function ReadingModeProvider({ children }: { children: ReactNode }) {
  const [readingMode, setReadingMode] = useState(false)
  const toggle = () => setReadingMode((v) => !v)

  return (
    <ReadingModeContext.Provider value={{ readingMode, toggle }}>
      {children}
    </ReadingModeContext.Provider>
  )
}

export function useReadingMode() {
  const ctx = useContext(ReadingModeContext)
  if (!ctx) throw new Error('useReadingMode must be used within ReadingModeProvider')
  return ctx
}
