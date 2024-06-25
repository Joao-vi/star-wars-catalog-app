import { GetCharactersInput } from '../get-characters/input'

export const charactersKeys = {
  getCharacters: (input: GetCharactersInput) => ['getCharacters', input] as const,
}
