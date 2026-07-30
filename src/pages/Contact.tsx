export default function Contact() {
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

      <div className="relative z-10 px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            <span className="text-blue-500">Contato</span>
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
        </div>

        <div className="max-w-2xl mx-auto mb-8 sm:mb-12 text-center px-2">
          <p className="text-gray-300 text-lg leading-relaxed">
            Conheça os criadores do DocSpaceIA. Um projeto dedicado a tornar o conhecimento
            sobre astronomia, astrofísica e exploração espacial acessível a todos.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-gray-600 transition-all hover:-translate-y-1 hover:shadow-xl group">
            <div className="flex flex-col items-center">
              <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-blue-600/50 mb-4 group-hover:ring-blue-500 transition-all">
                <img className="w-full h-full object-cover" src="images/yuki_gabriel.sec.jpg" alt="" />
              </div>
              <h2 className="text-xl font-bold text-white">yuki_gabriel.sec</h2>
              <p className="text-gray-400">𝐘𝐮𝐤𝐢</p>
              <div className="text-center mt-4 space-y-1">
                <p className="text-gray-300" style={{ fontFamily: 'serif' }}>ℑ 𝔅𝔢𝔩𝔬𝔫𝔤 𝔱𝔬 𝔍𝔢𝔰𝔲𝔰</p>
                <p className="text-gray-400 italic">&quot;I live for God and I live by God ✟&quot;</p>
                <p className="text-gray-500 text-sm mt-2">Tenho motivos pra tar usando essa foto 😁:</p>
                <p className="text-gray-400">@_0_mii_ 💍</p>
                <a
                  href="https://linktr.ee/yukigabriell"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 text-sm inline-block"
                >
                  linktr.ee/yukigabriell
                </a>
              </div>
              <a
                href="https://www.instagram.com/yuki_gabriel.sec/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-6 rounded-xl transition shadow-lg shadow-blue-600/25"
              >
                Ver Perfil no Instagram
              </a>
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-gray-600 transition-all hover:-translate-y-1 hover:shadow-xl group">
            <div className="flex flex-col items-center">
              <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-blue-600/50 mb-4 group-hover:ring-blue-500 transition-all">
                <img className="w-full h-full object-cover" src="images/rafelsl.jpg" alt="" />
              </div>
              <h2 className="text-xl font-bold text-white">rafelsl</h2>
              <p className="text-gray-400">Rafaelll</p>
              <div className="text-center mt-4 space-y-1">
                <p className="text-gray-300 italic">&quot;Amarás o teu próximo como a ti mesmo&quot; <span className="text-gray-400">Mateus 22:39</span></p>
                <p className="text-gray-400">Aspirante a programador.</p>
              </div>
              <a
                href="https://www.instagram.com/rafelsl/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-6 rounded-xl transition shadow-lg shadow-blue-600/25"
              >
                Ver Perfil no Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
