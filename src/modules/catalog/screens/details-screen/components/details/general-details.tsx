import { View } from 'react-native'
import { colors } from '../../../../../../components/ui/colors'
import { getGenderLabel } from '../../../../models/gender'
import { useDetailsScreen } from '../../use-details-screen'
import { Text } from '../../../../../../components/ui/text'

export const GeneralDetails = () => {
  const { getCharacterById } = useDetailsScreen()

  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: colors.zinc[200],
        borderRadius: 12,
        padding: 12,
        gap: 8,
      }}
    >
      <Text>Informações gerais</Text>

      <View style={{ gap: 4 }}>
        <View
          style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
        >
          <Text
            style={{ color: colors.zinc[400] }}
            size="sm"
          >
            Nome
          </Text>
          <Text>{getCharacterById.data?.name}</Text>
        </View>

        <View
          style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
        >
          <Text
            style={{ color: colors.zinc[400] }}
            size="sm"
          >
            Peso
          </Text>
          <Text>{`${getCharacterById.data?.weight.value} ${getCharacterById.data?.weight.unit}`}</Text>
        </View>

        <View
          style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
        >
          <Text
            style={{ color: colors.zinc[400] }}
            size="sm"
          >
            Altura
          </Text>
          <Text>{`${getCharacterById.data?.height.value} ${getCharacterById.data?.height.unit}`}</Text>
        </View>

        <View
          style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
        >
          <Text
            style={{ color: colors.zinc[400] }}
            size="sm"
          >
            Data nascimento
          </Text>
          <Text>{getCharacterById.data?.birthYear}</Text>
        </View>

        <View
          style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
        >
          <Text
            style={{ color: colors.zinc[400] }}
            size="sm"
          >
            Gênero
          </Text>
          <Text>
            {getCharacterById.data?.gender && getGenderLabel(getCharacterById.data.gender)}
          </Text>
        </View>

        <View
          style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
        >
          <Text
            style={{ color: colors.zinc[400] }}
            size="sm"
          >
            Cor cabelo
          </Text>
          <Text>{getCharacterById.data?.hairColor}</Text>
        </View>

        <View
          style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
        >
          <Text
            style={{ color: colors.zinc[400] }}
            size="sm"
          >
            Cor olhos
          </Text>
          <Text>{getCharacterById.data?.eyeColor}</Text>
        </View>

        <View
          style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
        >
          <Text
            style={{ color: colors.zinc[400] }}
            size="sm"
          >
            Cor pele
          </Text>
          <Text>{getCharacterById.data?.skinColor}</Text>
        </View>
      </View>
    </View>
  )
}
