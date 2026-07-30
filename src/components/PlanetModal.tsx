import { useState } from 'react'
import type { PlanetInfo, MoonInfo, StarInfo } from '../data/types'

type Item = PlanetInfo | MoonInfo | StarInfo

interface Props {
  body: Item
  onClose: () => void
}

function isPlanet(item: Item): item is PlanetInfo {
  return 'type' in item && 'diameter' in item && 'distanceFromSun' in item
}

function isMoon(item: Item): item is MoonInfo {
  return 'planet' in item && !('type' in item)
}

function isStar(item: Item): item is StarInfo {
  return 'spectralType' in item
}

export default function PlanetModal({ body, onClose }: Props) {
  const [tab, setTab] = useState<'overview' | 'data'>('overview')

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] sm:max-h-[85vh] overflow-hidden">
        <div className="relative h-48 bg-gradient-to-br from-gray-700 to-gray-900 flex items-end p-6">
          <div className="absolute top-4 right-4">
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white bg-black/30 rounded-full p-1.5 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-600 shadow-lg shrink-0">
              <img src={`images/${body.image}`} alt={body.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">{body.name}</h2>
              {isPlanet(body) && <p className="text-sm text-gray-400">{body.type}</p>}
              {isMoon(body) && <p className="text-sm text-gray-400">Lua de {body.planet}</p>}
              {isStar(body) && <p className="text-sm text-gray-400">{body.spectralType}</p>}
            </div>
          </div>
        </div>

        <div className="flex border-b border-gray-700">
          <button
            onClick={() => setTab('overview')}
            className={`flex-1 py-3 text-sm font-medium text-center transition ${
              tab === 'overview' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            Visão Geral
          </button>
          <button
            onClick={() => setTab('data')}
            className={`flex-1 py-3 text-sm font-medium text-center transition ${
              tab === 'data' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            Dados
          </button>
        </div>

        <div className="p-4 sm:p-6 overflow-y-auto max-h-[55vh] sm:max-h-[40vh]">
          {tab === 'overview' && (
            <p className="text-gray-300 text-sm leading-relaxed">{body.description}</p>
          )}

          {tab === 'data' && (
            <div className="space-y-3">
              {isPlanet(body) && (
                <>
                  <DataRow label="Tipo" value={body.type} />
                  <DataRow label="Diâmetro" value={body.diameter} />
                  <DataRow label="Distância do Sol" value={body.distanceFromSun} />
                  <DataRow label="Duração do dia" value={body.dayLength} />
                  <DataRow label="Duração do ano" value={body.yearLength} />
                  <DataRow label="Gravidade" value={body.gravity} />
                  <DataRow label="Temperatura" value={body.temperature} />
                  <DataRow label="Luas" value={String(body.moonsCount)} />
                </>
              )}
              {isMoon(body) && (
                <>
                  <DataRow label="Planeta" value={body.planet} />
                  <DataRow label="Diâmetro" value={body.diameter} />
                </>
              )}
              {isStar(body) && (
                <>
                  <DataRow label="Tipo espectral" value={body.spectralType} />
                  <DataRow label="Distância da Terra" value={body.distance} />
                  <DataRow label="Magnitude" value={body.magnitude} />
                  <DataRow label="Temperatura" value={body.temperature} />
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function DataRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-gray-500 text-sm">{label}</span>
      <span className="text-gray-200 text-sm font-medium">{value}</span>
    </div>
  )
}
