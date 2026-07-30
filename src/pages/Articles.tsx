import { useState, useMemo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useReadingMode } from '../context/ReadingModeContext'
import SearchBar from '../components/SearchBar'
import ArticleView from '../components/ArticleView'
import { featuredArticles } from '../data/featuredArticles'

export default function Articles() {
  const [search, setSearch] = useState('')
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const navigate = useNavigate()

  const q = search.toLowerCase().trim()

  const filtered = useMemo(
    () => featuredArticles.filter((a) => !q || a.title.toLowerCase().includes(q)),
    [q]
  )

  const selected = selectedId
    ? featuredArticles.find((a) => a.id === selectedId) ?? null
    : null

  const randomArticle = useCallback(() => {
    const i = Math.floor(Math.random() * featuredArticles.length)
    setSelectedId(featuredArticles[i].id)
  }, [])

  const { readingMode, toggle: toggleReading } = useReadingMode()

  if (selected) {
    return (
      <main className="h-full bg-gray-900 overflow-y-auto">
        <div className="sticky top-0 z-20 bg-gray-900/80 backdrop-blur-md border-b border-gray-800 px-4 py-3 flex items-center justify-between">
          <button
            onClick={() => setSelectedId(null)}
            className="flex items-center gap-1.5 text-gray-400 hover:text-gray-200 transition text-sm font-medium"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
            Voltar para artigos
          </button>
          <button
            onClick={toggleReading}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition ${
              readingMode ? 'text-white bg-blue-600' : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800'
            }`}
            title={readingMode ? 'Modo normal' : 'Modo leitura'}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
            </svg>
            {readingMode ? 'Modo Normal' : 'Modo Leitura'}
          </button>
        </div>
        <div className="p-6 max-w-4xl mx-auto">
          <ArticleView article={selected} />
        </div>
      </main>
    )
  }

  return (
    <main className="h-full bg-gray-900 overflow-y-auto">
      <div className="sticky top-0 z-20 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
        <div className="px-4 py-3 flex flex-col sm:flex-row sm:items-center gap-3">
          <SearchBar value={search} onChange={setSearch} placeholder="Buscar artigos..." />
          <button
            onClick={randomArticle}
            className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-purple-700 text-white text-sm font-medium rounded-xl hover:opacity-90 transition shadow-lg shadow-blue-600/25 shrink-0"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182" />
            </svg>
            Artigo Aleatório
          </button>
        </div>
      </div>

      <div className="p-4 max-w-5xl mx-auto">
        {filtered.length === 0 && (
          <div className="flex items-center justify-center h-40 text-gray-500">
            Nenhum artigo encontrado
          </div>
        )}

        <div className="grid gap-4">
          {filtered.map((article) => (
            <button
              key={article.id}
              onClick={() => setSelectedId(article.id)}
              className="group text-left bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-5 hover:border-gray-500 hover:bg-gray-700/50 transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center text-xl shrink-0">
                  {article.icon}
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold text-gray-200 group-hover:text-white transition">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                    {article.blocks.find((b) => b.type === 'text')?.content}
                  </p>
                  <p className="text-xs text-blue-400 mt-2 font-medium">
                    Ler artigo &rarr;
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </main>
  )
}
