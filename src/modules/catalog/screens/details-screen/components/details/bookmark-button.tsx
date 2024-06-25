import { Button } from '../../../../../../components/ui/button'
import { Text } from '../../../../../../components/ui/text'
import { bookmarkStore } from '../../../../../bookmark/models/bookmark'
import { useDetailsScreen } from '../../use-details-screen'

export const BookmarkButton = () => {
  const { ids } = bookmarkStore.store()
  const { getCharacterById } = useDetailsScreen()
  const isFavorite = ids.includes(getCharacterById.data!.id)

  return (
    <Button
      onPress={() =>
        isFavorite
          ? bookmarkStore.actions.delete(getCharacterById.data!.id)
          : bookmarkStore.actions.add(getCharacterById.data!.id)
      }
    >
      <Text style={{ color: 'white' }}>{isFavorite ? 'Retirar favoritar' : 'Favoritar'}</Text>
    </Button>
  )
}
