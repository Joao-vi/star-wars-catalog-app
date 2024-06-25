import { useQuery } from '@tanstack/react-query'
import { charactersKeys } from '../shared/keys'
import { useDependencyContainer } from '../../../../services/dependency-container'
import { GetCharacterByIdInput } from './input'

export const useGetCharacterById = (input: GetCharacterByIdInput) => {
  const { characterRepository } = useDependencyContainer()

  return useQuery({
    queryKey: charactersKeys.getCharacterById(input),
    queryFn: () => characterRepository.getCharacterById(input),
    enabled: !!input?.id,
  })
}
