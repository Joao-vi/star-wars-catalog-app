import { colors } from '../../../../../../components/ui/colors'
import { List } from '../../../../../../components/ui/list'
import { Text } from '../../../../../../components/ui/text'
import { Item } from './item'
import { useCharactersList } from './use-bookmark-list'

export const BookmarkList = () => {
  const { data } = useCharactersList()

  return (
    <List.Root
      data={data}
      isLoading={false}
    >
      <List.List
        style={{ marginTop: 12 }}
        renderItem={(props: any) => <Item id={props.item as any} />}
      />

      <List.NoItems style={{ alignItems: 'center', flex: 1 }}>
        <Text style={{ color: colors.zinc[400] }}>Nenhum Personagem foi encontrado</Text>
      </List.NoItems>

      <List.Loading />
    </List.Root>
  )
}
