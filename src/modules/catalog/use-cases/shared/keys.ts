import { GetCharacterByIdInput } from '../get-character-by-id/input'
import { GetCharactersInput } from '../get-characters/input'

export const charactersKeys = {
  getCharacters: (input: GetCharactersInput) => ['getCharacters', input] as const,
  getCharacterById: (input: GetCharacterByIdInput) => ['getCharacterById', input] as const,
}
