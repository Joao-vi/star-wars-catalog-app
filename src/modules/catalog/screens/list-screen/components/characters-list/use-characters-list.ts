import { useNavigation } from '@react-navigation/native'
import { useGetCharacters } from '../../../../use-cases/get-characters/use-get-characters'

export const useCharactersList = () => {
  const navigation = useNavigation() as any

  const getCharacters = useGetCharacters()

  const goToCharacterDetails = (id: number) =>
    navigation.navigate('CharacterDetailsScreen', {
      id,
    })

  return {
    data: getCharacters?.data,
    isLoading: getCharacters.isLoading,
    goToCharacterDetails,
  }
}
