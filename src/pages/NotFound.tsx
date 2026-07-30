import { useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <main className="h-full bg-gray-900 overflow-y-auto relative">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_50%)]" />
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 5 + 's',
              animationDuration: (Math.random() * 3 + 2) + 's',
              opacity: Math.random() * 0.7 + 0.3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-full px-4 text-center">
        <h1 className="text-8xl md:text-9xl font-bold text-blue-600/20 mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Você se perdeu no espaço?</h2>
        <p className="text-gray-400 text-lg mb-8 max-w-md">
          Esta página não existe ou foi levada por um buraco negro.
        </p>
        <button
          onClick={() => navigate('/')}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition shadow-lg shadow-blue-600/25"
        >
          Retornar à Terra (Home)
        </button>
      </div>
    </main>
  )
}
