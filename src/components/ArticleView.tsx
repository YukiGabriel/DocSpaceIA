import { useReadingMode } from '../context/ReadingModeContext'
import HighlightedText from './HighlightedText'
import type { DocArticle } from '../data/articles'

interface Props {
  article: DocArticle
}

export default function ArticleView({ article }: Props) {
  const { readingMode } = useReadingMode()
  const headings = article.blocks.filter((b) => b.type === 'heading')

  const titleClass = readingMode ? 'text-3xl' : 'text-2xl'
  const headingClass = readingMode ? 'text-2xl' : 'text-xl'
  const textClass = readingMode ? 'text-lg leading-relaxed tracking-wide' : 'text-base leading-relaxed'
  const maxW = readingMode ? 'max-w-3xl' : 'max-w-4xl'

  return (
    <section className={`${maxW} mx-auto`}>
      {readingMode && (
        <div className="text-xs text-gray-500 mb-4 italic">Modo leitura ativado</div>
      )}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl">{article.icon}</span>
        <h2 className={`${titleClass} font-bold text-gray-200`}>{article.title}</h2>
      </div>

      {headings.length > 1 && (
        <nav className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-4 mb-8">
          <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Sumário</h4>
          <ul className="space-y-1.5">
            {headings.map((h, i) => (
              <li key={i}>
                <a
                  href={`#heading-${i}`}
                  className="text-sm text-blue-400 hover:text-blue-300 transition"
                >
                  {h.content}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <div className="space-y-5">
        {article.blocks.map((block, i) => {
          switch (block.type) {
            case 'heading':
              return (
                <h3 key={i} id={`heading-${i}`} className={`scroll-mt-20 ${headingClass} font-bold text-gray-200 mt-2`}>
                  {block.content}
                </h3>
              )
            case 'text':
              return (
                <p key={i} className={`text-gray-300 ${textClass}`}>
                  <HighlightedText text={block.content ?? ''} />
                </p>
              )
            case 'image':
              return (
                <figure key={i} className="my-4">
                  <img
                    src={block.src}
                    alt={block.alt ?? ''}
                    className="w-full rounded-xl object-cover max-h-[50vh] sm:max-h-96"
                  />
                  {block.caption && (
                    <figcaption className="text-gray-500 text-sm mt-2 text-center">
                      {block.caption}
                    </figcaption>
                  )}
                </figure>
              )
            case 'video':
              return (
                <div key={i} className="w-full aspect-video my-4">
                  <iframe
                    className="w-full h-full rounded-xl"
                    src={block.src}
                    title={block.videoTitle ?? ''}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              )
          }
        })}
      </div>
    </section>
  )
}
