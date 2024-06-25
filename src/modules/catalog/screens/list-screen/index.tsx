import { Screen } from '../../../../components/ui/screen'
import { Text } from '../../../../components/ui/text'
import { colors } from '../../../../components/ui/colors'
import { CharactersList } from './components/characters-list'

export const CharactersListScreen = () => {
  return (
    <Screen.Root>
      <Screen.Content.Fixed>
        <Screen.Header.Root>
          <Screen.Header.Title>Catálago de Personagens</Screen.Header.Title>
          <Text style={{ color: colors.zinc[400] }}>
            Encontre e explore todos os heróis e vilões do universo Star Wars
          </Text>
        </Screen.Header.Root>

        <CharactersList />
      </Screen.Content.Fixed>
    </Screen.Root>
  )
}
