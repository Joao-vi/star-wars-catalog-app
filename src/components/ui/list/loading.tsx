import { ComponentProps } from 'react'
import { ActivityIndicator, View } from 'react-native'
import { useListContext } from './context'
import { colors } from '../colors'

export const Loading = (props: ComponentProps<typeof ActivityIndicator>) => {
  const { isLoading } = useListContext()

  if (!isLoading) return null

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ActivityIndicator
        {...props}
        size={42}
        color={colors.blue[500]}
      />
    </View>
  )
}
