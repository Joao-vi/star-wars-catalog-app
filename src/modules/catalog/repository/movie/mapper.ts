import { Movie } from '../../models/movie'
import { MovieDTO } from './DTOs'

export class MovieMapper {
  private static REGEX = /\/films\/(\d+)\//

  static toDomain(dto: MovieDTO): Movie {
    return {
      id: this.getIdFromURL(dto.url),
      title: dto.title,
      director: dto.director,
      releaseDate: new Date(dto.release_date),
    }
  }

  static getIdFromURL(url: string): number {
    const idOrUndefined = url.match(this.REGEX)?.[1]
    if (!idOrUndefined) throw new Error(`Id from this resource ${url} was not found.`)

    return +idOrUndefined
  }
}
