import { useGetCharacters } from '../../../../use-cases/get-characters/use-get-characters'

export const useCharactersList = () => {
  const getCharacters = useGetCharacters()

  return {
    data: getCharacters?.data,
    isLoading: getCharacters.isLoading,
  }
}
