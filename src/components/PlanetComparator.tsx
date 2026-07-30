import { useState } from 'react'
import { planets } from '../data/planets'

const properties: { key: string; label: string }[] = [
  { key: 'diameter', label: 'Diâmetro' },
  { key: 'distanceFromSun', label: 'Distância do Sol' },
  { key: 'dayLength', label: 'Duração do dia' },
  { key: 'yearLength', label: 'Duração do ano' },
  { key: 'gravity', label: 'Gravidade' },
  { key: 'temperature', label: 'Temperatura' },
  { key: 'moonsCount', label: 'Luas' },
]

export default function PlanetComparator() {
  const [left, setLeft] = useState(planets[0].name)
  const [right, setRight] = useState(planets[planets.length - 1].name)

  const leftPlanet = planets.find((p) => p.name === left)!
  const rightPlanet = planets.find((p) => p.name === right)!

  const getValue = (planet: typeof leftPlanet, key: string) => {
    switch (key) {
      case 'diameter': return planet.diameter
      case 'distanceFromSun': return planet.distanceFromSun
      case 'dayLength': return planet.dayLength
      case 'yearLength': return planet.yearLength
      case 'gravity': return planet.gravity
      case 'temperature': return planet.temperature
      case 'moonsCount': return String(planet.moonsCount)
      default: return ''
    }
  }

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
      <h2 className="text-xl font-bold text-white mb-6 text-center">Comparador de Planetas</h2>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="text-sm text-gray-500 mb-1 block">Planeta A</label>
          <select
            value={left}
            onChange={(e) => setLeft(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded-xl py-2.5 px-4 text-gray-200 focus:outline-none focus:border-blue-500 appearance-none"
          >
            {planets.map((p) => (
              <option key={p.name} value={p.name}>{p.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-sm text-gray-500 mb-1 block">Planeta B</label>
          <select
            value={right}
            onChange={(e) => setRight(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded-xl py-2.5 px-4 text-gray-200 focus:outline-none focus:border-blue-500 appearance-none"
          >
            {planets.map((p) => (
              <option key={p.name} value={p.name}>{p.name}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="text-center p-4 bg-gray-900/50 rounded-xl">
          <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-2 ring-2 ring-blue-500/50">
            <img src={`images/${leftPlanet.image}`} alt={leftPlanet.name} className="w-full h-full object-cover" />
          </div>
          <h3 className="text-lg font-bold text-white">{leftPlanet.name}</h3>
          <p className="text-xs text-gray-500">{leftPlanet.type}</p>
        </div>
        <div className="text-center p-4 bg-gray-900/50 rounded-xl">
          <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-2 ring-2 ring-blue-500/50">
            <img src={`images/${rightPlanet.image}`} alt={rightPlanet.name} className="w-full h-full object-cover" />
          </div>
          <h3 className="text-lg font-bold text-white">{rightPlanet.name}</h3>
          <p className="text-xs text-gray-500">{rightPlanet.type}</p>
        </div>
      </div>

      <div className="mt-6 space-y-2">
        {properties.map((prop) => {
          const lv = getValue(leftPlanet, prop.key)
          const rv = getValue(rightPlanet, prop.key)
          return (
            <div key={prop.key} className="grid grid-cols-3 items-center py-2 px-3 rounded-lg bg-gray-900/30">
              <span className="text-sm text-gray-400 font-medium text-center">{lv}</span>
              <span className="text-xs text-gray-500 text-center uppercase tracking-wider">{prop.label}</span>
              <span className="text-sm text-gray-400 font-medium text-center">{rv}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
