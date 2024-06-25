import { PaginatedList } from '../../../models/paginated-list'

export type PaginatedListDTO<T> = {
  count: number
  next: string
  previous: string
  results: T[]
}
