export type PaginatedListDTO<T> = {
  count: number
  next: string
  previous: string
  results: T[]
}
