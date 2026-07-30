import { useState, useRef, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import Logo from './Logo'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Documentation', path: '/documentation' },
  { label: 'Articles', path: '/articles' },
  { label: 'Timeline', path: '/timeline' },
  { label: 'Quiz', path: '/quiz' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchVal, setSearchVal] = useState('')
  const location = useLocation()
  const navigate = useNavigate()
  const { theme, toggle } = useTheme()
  const searchRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (searchOpen && searchRef.current) searchRef.current.focus()
  }, [searchOpen])

  useEffect(() => {
    setSearchOpen(false)
    setOpen(false)
  }, [location.pathname])

  const doSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const q = searchVal.trim()
    if (q) navigate(`/search?q=${encodeURIComponent(q)}`)
    setSearchOpen(false)
    setSearchVal('')
  }

  return (
    <nav className="relative z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
      <div className="flex items-center justify-between px-4 h-14">
        <Logo />

        <div className="hidden md:flex items-center gap-1 flex-1 justify-end">
          {searchOpen ? (
            <form onSubmit={doSearch} className="flex items-center gap-2">
              <input
                ref={searchRef}
                type="text"
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
                placeholder="Buscar no site..."
                className="w-64 bg-gray-800 border border-gray-700 rounded-xl py-1.5 px-3 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
              />
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="text-gray-400 hover:text-gray-200 p-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </form>
          ) : (
            <div className="flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-2.5 py-1.5 rounded-lg text-sm font-medium transition ${
                    location.pathname === item.path
                      ? 'text-white bg-blue-600'
                      : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <button
                onClick={() => setSearchOpen(true)}
                className="ml-1 p-2 rounded-lg text-gray-400 hover:text-gray-200 hover:bg-gray-800 transition"
                title="Buscar"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </button>
              <button
                onClick={toggle}
                className="p-2 rounded-lg text-gray-400 hover:text-gray-200 hover:bg-gray-800 transition"
                title={theme === 'dark' ? 'Modo claro' : 'Modo escuro'}
              >
                {theme === 'dark' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                  </svg>
                )}
              </button>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => navigate('/search')}
            className="p-2 rounded-lg text-gray-400 hover:text-gray-200 transition"
            title="Buscar"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>
          <button
            onClick={toggle}
            className="p-2 rounded-lg text-gray-400 hover:text-gray-200 transition"
            title={theme === 'dark' ? 'Modo claro' : 'Modo escuro'}
          >
            {theme === 'dark' ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
              </svg>
            )}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="text-gray-200 p-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d={open ? "M6 18 18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"} />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-800 bg-gray-900">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={`block px-4 py-3 text-sm font-medium ${
                location.pathname === item.path
                  ? 'text-white bg-blue-600'
                  : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
