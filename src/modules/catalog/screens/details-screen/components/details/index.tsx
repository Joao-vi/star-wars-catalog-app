import { View } from 'react-native'
import { GeneralDetails } from './general-details'
import { MoviesList } from './movies-list'
import { BookmarkButton } from './bookmark-button'

export const Details = () => {
  return (
    <View style={{ gap: 12, flex: 1 }}>
      <GeneralDetails />

      <MoviesList />

      <BookmarkButton />
    </View>
  )
}
