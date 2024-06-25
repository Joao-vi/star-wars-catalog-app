import { View } from 'react-native'
import { Avatar } from '../../../../../../components/ui/avatar'
import { Button } from '../../../../../../components/ui/button'
import { Text } from '../../../../../../components/ui/text'
import { Character } from '../../../../models/character'
import { getGenderLabel } from '../../../../models/gender'
import { Divider } from '../../../../../../components/ui/divider'

type ItemProps = {
  data: Character
  onSelect(): void
}

export const Item = ({ data, onSelect }: ItemProps) => {
  return (
    <Button
      variant="ghost"
      style={{ justifyContent: 'flex-start', gap: 8, marginBottom: 8 }}
      onPress={onSelect}
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
