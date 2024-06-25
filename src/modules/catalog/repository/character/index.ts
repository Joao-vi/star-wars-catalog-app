import { AxiosInstance } from 'axios'
import { CharacterDTO, GetCharactersDTO } from './DTOs'
import { PaginatedListDTO } from '../shared/paginated-list/paginated-list-DTO'
import { PaginatedList } from '../../models/paginated-list'
import { Character } from '../../models/character'
import { PaginatedListMapper } from '../shared/paginated-list/mapper'
import { CharacterMapper } from './mapper'
import { GetCharactersInput } from '../../use-cases/get-characters/input'
import { GetCharacterByIdInput } from '../../use-cases/get-character-by-id/input'

export class CharacterRepository {
  private BASE_URL = 'people'

  constructor(private readonly httpClient: AxiosInstance) {}

  async getCharacters(input: GetCharactersInput): Promise<PaginatedList<Character>> {
    const params: GetCharactersDTO = {
      page: input.page,
      search: input.search?.length ? input.search : undefined,
    }

    const { data } = await this.httpClient.get<PaginatedListDTO<CharacterDTO>>(`${this.BASE_URL}`, {
      params,
    })

    const paginatedList = PaginatedListMapper.toDomain(data)

    return {
      ...paginatedList,
      results: paginatedList.results.map((item) => CharacterMapper.toDomain(item)),
    }
  }

  async getCharacterById(input: GetCharacterByIdInput): Promise<Character> {
    const { data } = await this.httpClient.get<CharacterDTO>(`${this.BASE_URL}/${input.id}`)

    return CharacterMapper.toDomain(data)
  }
}
