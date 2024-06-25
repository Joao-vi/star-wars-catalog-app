import { ComponentProps } from 'react'
import { ActivityIndicator, View } from 'react-native'
import { useListContext } from './context'

export const Loading = (props: ComponentProps<typeof ActivityIndicator>) => {
  const { isLoading } = useListContext()

  if (!isLoading) return null

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ActivityIndicator
        {...props}
        size={32}
      />
    </View>
  )
}
