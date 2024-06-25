import { CharacterRepository } from '../../../../../src/modules/catalog/repository/character'
import { GetCharactersInput } from '../../../../../src/modules/catalog/use-cases/use-get-characters'
import { mockedAxios } from '../../../../mocks/axios-mock'
import {
  GET_CHARACTERS_RESPONSE,
  GET_CHARACTERS_RESPONSE_DTO,
} from '../../../../mocks/get-characters-response'

describe('CharacterRepository', () => {
  test('When I call getCharacters, it should use correct params', async () => {
    // Arrange
    mockedAxios.get.mockResolvedValueOnce({ data: GET_CHARACTERS_RESPONSE_DTO })
    const sut = new CharacterRepository(mockedAxios)
    const input: GetCharactersInput = {
      page: 1,
      search: 'any_search',
    }

    // Act
    await sut.getCharacters(input)

    // Assert
    expect(mockedAxios.get).toHaveBeenCalledWith('people', { params: input })
  })

  test('When I call getCharacters, it should return correct output', async () => {
    // Arrange
    mockedAxios.get.mockResolvedValueOnce({ data: GET_CHARACTERS_RESPONSE_DTO })
    const sut = new CharacterRepository(mockedAxios)
    const input: GetCharactersInput = {
      page: 1,
      search: 'any_search',
    }

    // Act
    const output = await sut.getCharacters(input)

    // Assert
    expect(output).toEqual(GET_CHARACTERS_RESPONSE)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })
})
