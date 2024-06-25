import { AxiosInstance } from 'axios'
import { Movie } from '../../models/movie'
import { MovieDTO } from './DTOs'
import { MovieMapper } from './mapper'
import { GetMovieByIdInput } from '../../use-cases/get-movie-by-id/input'

export class MovieRepository {
  private BASE_URL = 'films'

  constructor(private readonly httpClient: AxiosInstance) {}

  async getMovieById(input: GetMovieByIdInput): Promise<Movie> {
    const { data } = await this.httpClient.get<MovieDTO>(`${this.BASE_URL}/${input.id}`)

    return MovieMapper.toDomain(data)
  }
}
