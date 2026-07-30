export interface CelestialBody {
  name: string
  description: string
  image: string
}

export interface PlanetInfo extends CelestialBody {
  type: string
  diameter: string
  distanceFromSun: string
  dayLength: string
  yearLength: string
  gravity: string
  temperature: string
  moonsCount: number
  color: string
}

export interface MoonInfo extends CelestialBody {
  planet: string
  diameter: string
}

export interface StarInfo extends CelestialBody {
  spectralType: string
  distance: string
  magnitude: string
  temperature: string
}
