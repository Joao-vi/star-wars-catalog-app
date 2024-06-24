import { Character } from '../../models/character'
import { Gender } from '../../models/gender'
import { CharacterDTO } from './DTOs'
import { CharacterMapper } from './mapper'

const CHARACTER_DTO: CharacterDTO = {
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  birth_year: '19BBY',
  gender: 'male',
  homeworld: 'https://swapi.dev/api/planets/1/',
  films: [
    'https://swapi.dev/api/films/1/',
    'https://swapi.dev/api/films/2/',
    'https://swapi.dev/api/films/3/',
    'https://swapi.dev/api/films/6/',
  ],
  species: [],
  vehicles: ['https://swapi.dev/api/vehicles/14/', 'https://swapi.dev/api/vehicles/30/'],
  starships: ['https://swapi.dev/api/starships/12/', 'https://swapi.dev/api/starships/22/'],
  created: '2014-12-09T13:50:51.644000Z',
  edited: '2014-12-20T21:17:56.891000Z',
  url: 'https://swapi.dev/api/people/1/',
}

const CHARACTER: Character = {
  id: 1,
  name: 'Luke Skywalker',
  birthYear: '19BBY',
  eyeColor: 'blue',
  gender: Gender.Male,
  hairColor: 'blond',
  height: {
    unit: 'cm',
    value: 172,
  },
  weight: {
    unit: 'kg',
    value: 77,
  },
  skinColor: 'fair',
  resources: {
    self: 'https://swapi.dev/api/people/1/',
    featuredMovies: [
      'https://swapi.dev/api/films/1/',
      'https://swapi.dev/api/films/2/',
      'https://swapi.dev/api/films/3/',
      'https://swapi.dev/api/films/6/',
    ],
    homeWorld: 'https://swapi.dev/api/planets/1/',
    species: [],
    usedStarship: ['https://swapi.dev/api/starships/12/', 'https://swapi.dev/api/starships/22/'],
    usedVehicles: ['https://swapi.dev/api/vehicles/14/', 'https://swapi.dev/api/vehicles/30/'],
  },
}

describe('CharacterMapper', () => {
  test('When I give a correct DTO, it should return a correct Character model', () => {
    const input = CHARACTER_DTO

    const output = CharacterMapper.toDomain(input)

    expect(output).toEqual(CHARACTER)
  })

  test('When I give a wrong gender DTO, it should throw', () => {
    const input = { ...CHARACTER_DTO }
    input.gender = 'any_gender'

    expect(() => CharacterMapper.toDomain(input)).toThrow()
  })

  test('When I give a wrong URL DTO, it should throw', () => {
    const input = { ...CHARACTER_DTO }
    input.url = 'any_url'

    expect(() => CharacterMapper.toDomain(input)).toThrow()
  })
})
