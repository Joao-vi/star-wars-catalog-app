import { useQuery } from '@tanstack/react-query'
import { getCharactersInputStore } from './input'
import { charactersKeys } from '../shared/keys'
import { useDependencyContainer } from '../../../../services/dependency-container'

export const useGetCharacters = () => {
  const { characterRepository } = useDependencyContainer()
  const input = getCharactersInputStore.store()

  return useQuery({
    queryKey: charactersKeys.getCharacters(input),
    queryFn: () => characterRepository.getCharacters(input),
  })
}
