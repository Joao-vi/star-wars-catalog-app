import { PaginatedList } from '../../../models/paginated-list'
import { PaginatedListMapper } from './mapper'
import { PaginatedListDTO } from './paginated-list-DTO'

const PAGINATED_LIST_DTO: PaginatedListDTO<[]> = {
  count: 82,
  next: 'https://swapi.dev/api/people/?page=3',
  previous: 'https://swapi.dev/api/people/?page=1',
  results: [],
}

const PAGINATED_LIST: PaginatedList<[]> = {
  totalItems: 82,
  next: 3,
  previous: 1,
  results: [],
}

describe('PaginatedListMapper', () => {
  test('When I give a correct DTO, it should return a correct PaginatedList model', () => {
    const input = PAGINATED_LIST_DTO

    const output = PaginatedListMapper.toDomain(input)

    expect(output).toEqual(PAGINATED_LIST)
  })
})
