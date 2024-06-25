import { View } from 'react-native'
import { colors } from '../../../../../../../components/ui/colors'
import { useDetailsScreen } from '../../../use-details-screen'
import { Text } from '../../../../../../../components/ui/text'
import { List } from '../../../../../../../components/ui/list'
import { Item } from './item'

export const MoviesList = () => {
  const { getCharacterById } = useDetailsScreen()

  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: colors.zinc[200],
        borderRadius: 12,
        padding: 12,
        gap: 8,
        flex: 1,
      }}
    >
      <Text>Filmes</Text>

      <List.Root
        isLoading={getCharacterById.isLoading}
        data={getCharacterById.data?.resources?.featuredMovies}
      >
        <List.List
          style={{ flex: 1 }}
          renderItem={(props: any) => <Item url={props.item as any} />}
        />
        <List.Loading />
        <List.NoItems>
          <Text style={{ color: colors.zinc[400] }}>Nenhum Filme foi encontrado</Text>
        </List.NoItems>
      </List.Root>
    </View>
  )
}
