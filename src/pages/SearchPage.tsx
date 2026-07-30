import { useMemo } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { featuredArticles } from '../data/featuredArticles'
import { articles } from '../data/articles'
import { planets } from '../data/planets'
import { moons } from '../data/moons'
import { stars } from '../data/stars'

export default function SearchPage() {
  const [params] = useSearchParams()
  const navigate = useNavigate()
  const q = (params.get('q') || '').trim().toLowerCase()

  const results = useMemo(() => {
    if (!q) return []
    const hits: { title: string; type: string; path: string; snippet: string }[] = []

    for (const a of featuredArticles) {
      if (a.title.toLowerCase().includes(q) || a.blocks.some((b) => b.content?.toLowerCase().includes(q))) {
        hits.push({
          title: a.title,
          type: 'Artigo em Destaque',
          path: `/articles?id=${a.id}`,
          snippet: a.blocks.find((b) => b.type === 'text' && b.content)?.content?.slice(0, 120) || '',
        })
      }
    }

    for (const a of articles) {
      if (a.title.toLowerCase().includes(q) || a.blocks.some((b) => b.content?.toLowerCase().includes(q))) {
        hits.push({
          title: a.title,
          type: 'Artigo',
          path: `/documentation?article=${a.id}`,
          snippet: a.blocks.find((b) => b.type === 'text' && b.content)?.content?.slice(0, 120) || '',
        })
      }
    }

    for (const p of planets) {
      if (p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)) {
        hits.push({
          title: p.name,
          type: 'Planeta',
          path: '/documentation',
          snippet: p.description.slice(0, 120),
        })
      }
    }

    for (const m of moons) {
      if (m.name.toLowerCase().includes(q) || m.planet.toLowerCase().includes(q)) {
        hits.push({
          title: m.name,
          type: 'Lua',
          path: '/documentation',
          snippet: `Lua de ${m.planet}`,
        })
      }
    }

    for (const s of stars) {
      if (s.name.toLowerCase().includes(q) || s.spectralType.toLowerCase().includes(q)) {
        hits.push({
          title: s.name,
          type: 'Estrela',
          path: '/documentation',
          snippet: `${s.spectralType} · ${s.distance}`,
        })
      }
    }

    return hits.slice(0, 20)
  }, [q])

  return (
    <main className="h-full bg-gray-900 overflow-y-auto">
      <div className="px-4 py-16 max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Resultados para "<span className="text-blue-500">{q}</span>"
        </h1>
        <p className="text-gray-500 mb-8">{results.length} resultado(s) encontrado(s)</p>

        {results.length === 0 && q && (
          <div className="text-center py-16 text-gray-500">
            <p className="text-lg">Nenhum resultado encontrado para "{q}"</p>
          </div>
        )}

        <div className="space-y-3">
          {results.map((r, i) => (
            <button
              key={i}
              onClick={() => navigate(r.path)}
              className="w-full text-left bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 hover:border-gray-600 hover:bg-gray-700/50 transition-all"
            >
              <span className="text-xs text-blue-400 font-medium uppercase tracking-wider">{r.type}</span>
              <h3 className="text-lg font-semibold text-white mt-0.5">{r.title}</h3>
              <p className="text-sm text-gray-400 mt-1 line-clamp-2">{r.snippet}</p>
            </button>
          ))}
        </div>
      </div>
    </main>
  )
}
