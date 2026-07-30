import { timelineEvents, type TimelineEvent } from '../data/timeline'

const categoryColors: Record<TimelineEvent['category'], string> = {
  exploração: 'from-blue-600 to-cyan-600',
  descoberta: 'from-emerald-600 to-teal-600',
  telescópio: 'from-purple-600 to-pink-600',
  missão: 'from-orange-600 to-red-600',
}

export default function TimelinePage() {
  return (
    <main className="h-full bg-gray-900 overflow-y-auto">
      <div className="px-4 py-16 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Linha do Tempo <span className="text-blue-500">Espacial</span>
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
        </div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-700 -translate-x-1/2" />

          {timelineEvents.map((event, i) => (
            <div
              key={i}
              className={`relative flex items-start gap-6 mb-10 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className={`hidden md:block w-1/2 ${i % 2 === 0 ? 'text-right pr-10' : 'text-left pl-10'}`}>
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-5 hover:border-gray-600 transition-all">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${categoryColors[event.category]} mb-2`}>
                    {event.category}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-1">{event.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{event.description}</p>
                </div>
              </div>

              <div className="relative z-10 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 border-4 border-gray-900 flex items-center justify-center shrink-0 shadow-lg shadow-blue-600/25">
                  <span className="text-xs font-bold text-white">{event.year}</span>
                </div>
              </div>

              <div className="md:hidden flex-1">
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 hover:border-gray-600 transition-all">
                  <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-bold text-white bg-gradient-to-r ${categoryColors[event.category]} mb-2`}>
                    {event.category}
                  </span>
                  <h3 className="text-base font-bold text-white mb-1">{event.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
