import { Routes, Route, useLocation } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { ReadingModeProvider } from './context/ReadingModeContext'
import Navbar from './components/Navbar'
import BackToTop from './components/BackToTop'
import Home from './pages/Home'
import Documentation from './pages/Documentation'
import Articles from './pages/Articles'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import TimelinePage from './pages/TimelinePage'
import QuizPage from './pages/QuizPage'
import SearchPage from './pages/SearchPage'

function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation()
  return (
    <div key={location.pathname} className="h-full animate-fadeIn">
      {children}
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <ReadingModeProvider>
        <div className="flex flex-col h-screen bg-gray-900">
          <Navbar />
          <div className="flex-1 overflow-hidden">
            <Routes>
              <Route path="/" element={<PageTransition><Home /></PageTransition>} />
              <Route path="/documentation" element={<PageTransition><Documentation /></PageTransition>} />
              <Route path="/articles" element={<PageTransition><Articles /></PageTransition>} />
              <Route path="/about" element={<PageTransition><About /></PageTransition>} />
              <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
              <Route path="/timeline" element={<PageTransition><TimelinePage /></PageTransition>} />
              <Route path="/quiz" element={<PageTransition><QuizPage /></PageTransition>} />
              <Route path="/search" element={<PageTransition><SearchPage /></PageTransition>} />
              <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
            </Routes>
          </div>
          <BackToTop />
        </div>
      </ReadingModeProvider>
    </ThemeProvider>
  )
}
