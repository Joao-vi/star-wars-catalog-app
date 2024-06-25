import { useNavigation } from '@react-navigation/native'
import { bookmarkStore } from '../../../../models/bookmark'

export const useCharactersList = () => {
  const data = bookmarkStore.store()

  return {
    data: data.ids,
  }
}
