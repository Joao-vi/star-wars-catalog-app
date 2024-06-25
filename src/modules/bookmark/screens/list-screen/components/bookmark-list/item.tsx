import { View } from 'react-native'
import { Avatar } from '../../../../../../components/ui/avatar'
import { Button } from '../../../../../../components/ui/button'
import { Text } from '../../../../../../components/ui/text'
import { Divider } from '../../../../../../components/ui/divider'
import { useGetCharacterById } from '../../../../../catalog/use-cases/get-character-by-id/use-get-character-by-id'
import { getGenderLabel } from '../../../../../catalog/models/gender'
import { bookmarkStore } from '../../../../models/bookmark'

type ItemProps = {
  id: number
}

export const Item = ({ id }: ItemProps) => {
  const { data } = useGetCharacterById({ id })

  if (!data) return null

  return (
    <Button
      variant="primary_secondary"
      style={{ justifyContent: 'flex-start', gap: 8, marginBottom: 8 }}
      onPress={() => bookmarkStore.actions.delete(id)}
    >
      <Avatar alt={data.name} />

      <View>
        <View style={{ flexDirection: 'row', gap: 4 }}>
          <Text size="sm">{data.name}</Text>
          <Divider.Dot />
          <Text size="sm">{getGenderLabel(data.gender)}</Text>
          <Divider.Dot />
          <Text size="sm">{data.birthYear}</Text>
        </View>

        <View style={{ flexDirection: 'row', gap: 4 }}>
          <Text size="sm">{`${data.weight.value} ${data.weight.unit}`} </Text>
          <Divider.Dot />
          <Text size="sm">{`${data.height.value} ${data.height.unit}`} </Text>
        </View>
      </View>
    </Button>
  )
}
