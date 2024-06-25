import { useNavigation } from '@react-navigation/native'
import { colors } from '../colors'
import { Button } from '../button'
import { CaretLeft } from '../icons/caret-left'
import { Text } from '../text'
import { View } from 'react-native'

export const Controls = () => {
  const { goBack, canGoBack } = useNavigation()

  const handleGoBack = () => goBack()

  return (
    <View style={{ flexDirection: 'row', marginBottom: 12 }}>
      {canGoBack() && (
        <Button
          onPress={handleGoBack}
          variant="ghost"
          style={{ alignItems: 'flex-start' }}
        >
          <CaretLeft fill={colors.blue[500]} />

          <Text style={{ color: colors.blue[500] }}>Voltar</Text>
        </Button>
      )}
    </View>
  )
}
