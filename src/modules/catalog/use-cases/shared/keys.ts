import { GetCharacterByIdInput } from '../get-character-by-id/input'
import { GetCharactersInput } from '../get-characters/input'
import { GetMovieByIdInput } from '../get-movie-by-id/input'

export const charactersKeys = {
  getCharacters: (input: GetCharactersInput) => ['getCharacters', input] as const,
  getCharacterById: (input: GetCharacterByIdInput) => ['getCharacterById', input] as const,
}

export const movieKeys = {
  getMovieById: (input: GetMovieByIdInput) => ['getMovieById', input] as const,
}
