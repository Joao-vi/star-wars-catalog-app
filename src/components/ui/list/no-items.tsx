import { ComponentProps } from 'react'
import { View } from 'react-native'
import { useListContext } from './context'

export const NoItems = (props: ComponentProps<typeof View>) => {
  const { isLoading, data } = useListContext()

  if (isLoading || !!data?.length) return null

  return <View {...props} />
}
