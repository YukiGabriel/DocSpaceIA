import { useState, useMemo } from 'react'
import CardGrid from '../components/CardGrid'
import PlanetModal from '../components/PlanetModal'
import PlanetComparator from '../components/PlanetComparator'
import SearchBar from '../components/SearchBar'
import ArticleView from '../components/ArticleView'
import { planets, type PlanetInfo } from '../data/planets'
import { moons, type MoonInfo } from '../data/moons'
import { stars, type StarInfo } from '../data/stars'
import { articles } from '../data/articles'

type Tab = 'planets' | 'moons' | 'stars' | 'articles'

const tabs: { id: Tab; label: string; icon: string }[] = [
  { id: 'planets', label: 'Planetas', icon: '\u{1F30D}' },
  { id: 'moons', label: 'Luas', icon: '\u{1F319}' },
  { id: 'stars', label: 'Estrelas', icon: '\u2605' },
  { id: 'articles', label: 'Artigos', icon: '\u{1F4D6}' },
]

export default function Documentation() {
  const [tab, setTab] = useState<Tab>('planets')
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState<PlanetInfo | MoonInfo | StarInfo | null>(null)
  const [showComparator, setShowComparator] = useState(false)

  const q = search.toLowerCase().trim()

  const filteredPlanets = useMemo(
    () => planets.filter((p) => !q || p.name.toLowerCase().includes(q) || p.type.toLowerCase().includes(q)),
    [q]
  )
  const filteredMoons = useMemo(
    () => moons.filter((m) => !q || m.name.toLowerCase().includes(q) || m.planet.toLowerCase().includes(q)),
    [q]
  )
  const filteredStars = useMemo(
    () => stars.filter((s) => !q || s.name.toLowerCase().includes(q) || s.spectralType.toLowerCase().includes(q)),
    [q]
  )
  const filteredArticles = useMemo(
    () => articles.filter((a) => !q || a.title.toLowerCase().includes(q)),
    [q]
  )

  return (
    <main className="h-full bg-gray-900 overflow-y-auto">
      <div className="sticky top-0 z-20 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
        <div className="px-4 py-3 flex flex-col sm:flex-row sm:items-center gap-3">
          <SearchBar value={search} onChange={setSearch} placeholder="Buscar planetas, luas, estrelas..." />
          <div className="flex gap-1 overflow-x-auto scrollbar-none -mx-1 px-1">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition ${
                  tab === t.id
                    ? 'text-white bg-blue-600'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800'
                }`}
              >
                <span>{t.icon}</span>
                {t.label}
              </button>
            ))}
            <button
              onClick={() => setShowComparator(!showComparator)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition ${
                showComparator
                  ? 'text-white bg-emerald-600'
                  : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
              </svg>
              Comparar
            </button>
          </div>
        </div>
      </div>

      <div className="p-4">
        {tab === 'planets' && (
          <CardGrid
            items={filteredPlanets}
            onSelect={setSelected}
            getSubtitle={(p) => (p as PlanetInfo).type}
          />
        )}

        {tab === 'moons' && (
          <CardGrid
            items={filteredMoons}
            onSelect={setSelected}
            getSubtitle={(m) => `Lua de ${(m as MoonInfo).planet}`}
          />
        )}

        {tab === 'stars' && (
          <CardGrid
            items={filteredStars}
            onSelect={setSelected}
            getSubtitle={(s) => (s as StarInfo).spectralType}
          />
        )}

        {tab === 'articles' && (
          <div className="space-y-12">
            {filteredArticles.length === 0 && (
              <p className="text-gray-500 text-center py-10">Nenhum artigo encontrado</p>
            )}
            {filteredArticles.map((article) => (
              <ArticleView key={article.id} article={article} />
            ))}
          </div>
        )}
      </div>

      {showComparator && (
        <div className="p-4 max-w-2xl mx-auto">
          <PlanetComparator />
        </div>
      )}

      {selected && <PlanetModal body={selected} onClose={() => setSelected(null)} />}
    </main>
  )
}
