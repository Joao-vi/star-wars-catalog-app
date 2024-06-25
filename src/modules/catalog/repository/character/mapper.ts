import { Character } from '../../models/character'
import { Gender } from '../../models/gender'
import { CharacterDTO } from './DTOs'

export class CharacterMapper {
  private static REGEX = /\/people\/(\d+)\//

  static toDomain(dto: CharacterDTO): Character {
    return {
      id: this.getIdFromURL(dto.url),
      name: dto.name,
      height: {
        unit: 'cm',
        value: +dto.height,
      },
      weight: {
        unit: 'kg',
        value: +dto.mass,
      },
      birthYear: dto.birth_year,
      eyeColor: dto.eye_color,
      hairColor: dto.hair_color,
      gender: this.parseGender(dto.gender),
      skinColor: dto.skin_color,
      resources: {
        self: dto.url,
        featuredMovies: dto.films,
        homeWorld: dto.homeworld,
        species: dto.species,
        usedStarship: dto.starships,
        usedVehicles: dto.vehicles,
      },
    }
  }

  private static parseGender(genderDTO: string): Gender {
    switch (genderDTO) {
      case Gender.Female:
        return Gender.Female
      case Gender.Male:
        return Gender.Male
      case Gender.NotApplicable:
        return Gender.NotApplicable
      case Gender.Unknown:
      default:
        return Gender.Unknown
    }
  }

  private static getIdFromURL(url: string): number {
    const idOrUndefined = url.match(this.REGEX)?.[1]
    if (!idOrUndefined) throw new Error(`Id from this resource ${url} was not found.`)

    return +idOrUndefined
  }
}
