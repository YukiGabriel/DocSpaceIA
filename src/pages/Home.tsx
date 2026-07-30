import { useNavigate } from 'react-router-dom'

const features = [
  {
    title: 'Documentação',
    desc: 'Artigos detalhados sobre planetas, estrelas, luas, buracos negros e galáxias.',
    path: '/documentation',
    color: 'from-blue-600 to-purple-700',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: 'Artigos',
    desc: 'Conteúdo aprofundado sobre fenômenos astronômicos e exploração espacial.',
    path: '/articles',
    color: 'from-emerald-600 to-teal-700',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
      </svg>
    ),
  },
  {
    title: 'Sobre',
    desc: 'Conheça a missão do DocSpaceIA e o propósito do projeto.',
    path: '/about',
    color: 'from-orange-600 to-red-700',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
      </svg>
    ),
  },
]

export default function Home() {
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

      <div className="relative z-10 flex flex-col items-center justify-center min-h-full px-4 sm:px-8 py-12 sm:py-20">
        <div className="text-center max-w-3xl mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            DocSpace
            <span className="text-blue-500">IA</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Explore o universo através de documentação interativa e conteúdo educacional.
            Astronomia, astrofísica e exploração espacial em um só lugar.
          </p>
          <div className="flex gap-4 justify-center mt-8">
            <button
              onClick={() => navigate('/documentation')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition shadow-lg shadow-blue-600/25"
            >
              Ver Documentação
            </button>
            <button
              onClick={() => navigate('/articles')}
              className="bg-gray-800 hover:bg-gray-700 text-gray-200 px-6 py-3 rounded-xl font-medium transition border border-gray-700"
            >
              Ler Artigos
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
          {features.map((f) => (
            <button
              key={f.path}
              onClick={() => navigate(f.path)}
              className="group text-left bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-gray-600 transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
            </button>
          ))}
        </div>
      </div>
    </main>
  )
}
