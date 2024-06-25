import { CharacterMapper } from '../../../../../src/modules/catalog/repository/character/mapper'
import { CHARACTER_DTO, CHARACTER } from '../../../../mocks/character-mock'

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
