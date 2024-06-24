import { Gender } from './gender'
import { ResourceURL } from './resource-url'
import { UnitMeasurement } from './unit-measurement'

export type Character = {
  id: number
  name: string
  weight: UnitMeasurement<'kg'>
  height: UnitMeasurement<'cm'>
  birthYear: string
  gender: Gender
  hairColor: string
  skinColor: string
  eyeColor: string

  resources: {
    homeWorld: ResourceURL
    featuredMovies: ResourceURL[]
    species: ResourceURL[]
    usedVehicles: ResourceURL[]
    usedStarship: ResourceURL[]
    self: ResourceURL
  }
}
