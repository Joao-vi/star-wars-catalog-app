import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { getCharactersInputStore } from './input'
import { useDependencyContainer } from '../../../../services/dependency-container'
import { charactersKeys } from '../shared/keys'

export const useGetCharacters = () => {
  const { characterRepository } = useDependencyContainer()
  const input = getCharactersInputStore.store()

  return useInfiniteQuery({
    queryKey: [charactersKeys.getCharacters(input)],
    queryFn: (props) =>
      characterRepository.getCharacters({ page: props.pageParam, search: input.search }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.next,
  })
}
