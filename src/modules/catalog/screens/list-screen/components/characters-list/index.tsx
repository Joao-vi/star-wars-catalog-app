import { ActivityIndicator, View } from 'react-native'
import { colors } from '../../../../../../components/ui/colors'
import { List } from '../../../../../../components/ui/list'
import { Text } from '../../../../../../components/ui/text'
import { getCharactersInputStore } from '../../../../use-cases/get-characters/input'
import { Item } from './item'
import { useCharactersList } from './use-characters-list'

export const CharactersList = () => {
  const { data, isLoading, isFetchingNextPage, goToCharacterDetails, nextPage } =
    useCharactersList()

  return (
    <List.Root
      data={data}
      onSearch={getCharactersInputStore.actions.setSearch}
      isLoading={isLoading}
    >
      <View style={{ flex: 1, gap: 12 }}>
        <List.SearchField placeholder="Faça uma pesquisa" />
        <List.List
          style={{ marginTop: 12 }}
          renderItem={(props: any) => (
            <Item
              data={props.item as any}
              onSelect={() => goToCharacterDetails(props.item.id as any)}
            />
          )}
          onEndReached={() => nextPage()}
          onEndReachedThreshold={0.25}
          ListFooterComponent={() =>
            isFetchingNextPage && (
              <ActivityIndicator
                size={32}
                color={colors.blue[500]}
              />
            )
          }
        />

        <List.NoItems style={{ alignItems: 'center', flex: 1 }}>
          <Text style={{ color: colors.zinc[400] }}>Nenhum Personagem foi encontrado</Text>
        </List.NoItems>

        <List.Loading />
      </View>
    </List.Root>
  )
}
