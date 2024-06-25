import { View } from 'react-native'
import { Text } from '../../../../../../components/ui/text'
import { Button } from '../../../../../../components/ui/button'
import { GeneralDetails } from './general-details'
import { MoviesList } from './movies-list'

export const Details = () => {
  return (
    <View style={{ gap: 12, flex: 1 }}>
      <GeneralDetails />

      <MoviesList />

      <Button>
        <Text style={{ color: 'white' }}>Favoritar</Text>
      </Button>
    </View>
  )
}
