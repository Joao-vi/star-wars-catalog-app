import { useQuery } from '@tanstack/react-query'
import { movieKeys } from '../shared/keys'
import { useDependencyContainer } from '../../../../services/dependency-container'
import { GetMovieByIdInput } from './input'

export const useGetMovieById = (input: GetMovieByIdInput) => {
  const { movieRepository } = useDependencyContainer()

  return useQuery({
    queryKey: movieKeys.getMovieById(input),
    queryFn: () => movieRepository.getMovieById(input),
    enabled: !!input?.id,
  })
}
