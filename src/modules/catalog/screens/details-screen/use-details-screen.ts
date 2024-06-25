import { useRoute } from '@react-navigation/native'
import { useGetCharacterById } from '../../use-cases/get-character-by-id/use-get-character-by-id'

export const useDetailsScreen = () => {
  const { params } = useRoute() as any
  const getCharacterById = useGetCharacterById({ id: params?.id })

  return {
    params,
    getCharacterById,
  }
}
