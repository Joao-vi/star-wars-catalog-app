import { PaginatedList } from '../../../models/paginated-list'
import { PaginatedListDTO } from './paginated-list-DTO'

export class PaginatedListMapper {
  static toDomain<T>(dto: PaginatedListDTO<T>): PaginatedList<T> {
    const [_, next] = dto.next.split('=')
    const [__, previous] = dto.previous.split('=')

    return {
      results: dto.results,
      totalItems: dto.count,
      next: next ? +next : undefined,
      previous: previous ? +previous : undefined,
    }
  }
}
