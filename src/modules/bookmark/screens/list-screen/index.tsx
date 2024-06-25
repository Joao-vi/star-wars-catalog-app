import { Screen } from '../../../../components/ui/screen'
import { Text } from '../../../../components/ui/text'
import { colors } from '../../../../components/ui/colors'
import { BookmarkList } from './components/bookmark-list'

export const BookmarkListScreen = () => {
  return (
    <Screen.Root>
      <Screen.Content.Fixed>
        <Screen.Header.Root>
          <Screen.Header.Title>Favoritos</Screen.Header.Title>
          <Text style={{ color: colors.zinc[400] }}>
            Seus personagens preferidos do universo Star Wars
          </Text>
        </Screen.Header.Root>

        <BookmarkList />
      </Screen.Content.Fixed>
    </Screen.Root>
  )
}
