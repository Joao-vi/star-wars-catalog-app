export type PaginatedList<T> = {
  results: T[]
  previous?: number
  next?: number
  totalItems: number
}
