import { Screen } from '../../../../components/ui/screen'
import { Text } from '../../../../components/ui/text'
import { colors } from '../../../../components/ui/colors'
import { Details } from './components/details'
import { Show } from '../../../../components/ui/show'
import { ActivityIndicator } from 'react-native'
import { useDetailsScreen } from './use-details-screen'
import { useNavigation } from '@react-navigation/native'

export const CharacterDetailsScreen = () => {
  const { params, getCharacterById } = useDetailsScreen()
  const { goBack } = useNavigation()

  if (typeof params.id === 'undefined' || getCharacterById.isError) goBack()

  return (
    <Screen.Root>
      <Screen.Content.Fixed>
        <Screen.Header.Root>
          <Screen.Header.Controls />
          <Screen.Header.Title>Detalhes do Personagem</Screen.Header.Title>
          <Text style={{ color: colors.zinc[400] }}>
            Saiba tudo sobre seu herói ou vilão favorito
          </Text>
        </Screen.Header.Root>

        <Show show={!!getCharacterById.data && !getCharacterById.isLoading}>
          <Details />
        </Show>

        <Show show={!getCharacterById.data || getCharacterById.isLoading}>
          <ActivityIndicator
            size={42}
            color={colors.blue[500]}
          />
        </Show>
      </Screen.Content.Fixed>
    </Screen.Root>
  )
}
