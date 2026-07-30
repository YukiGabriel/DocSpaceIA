import type { PlanetInfo, MoonInfo, StarInfo } from '../data/types'

type Item = PlanetInfo | MoonInfo | StarInfo

interface Props {
  items: Item[]
  onSelect: (item: Item) => void
  getSubtitle?: (item: Item) => string
}

export default function CardGrid({ items, onSelect, getSubtitle }: Props) {
  if (items.length === 0) {
    return (
      <div className="flex items-center justify-center h-40 text-gray-500">
        Nenhum resultado encontrado
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
      {items.map((item) => (
        <button
          key={item.name}
          onClick={() => onSelect(item)}
          className="group bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-3 hover:border-gray-500 hover:bg-gray-700/60 transition-all hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="aspect-square rounded-lg overflow-hidden bg-gray-700 mb-2">
            <img
              src={`images/${item.image}`}
              alt={item.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              loading="lazy"
            />
          </div>
          <p className="text-sm font-medium text-gray-200 truncate">{item.name}</p>
          {getSubtitle && (
            <p className="text-xs text-gray-500 truncate">{getSubtitle(item)}</p>
          )}
        </button>
      ))}
    </div>
  )
}
