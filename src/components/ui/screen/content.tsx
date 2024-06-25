import { ComponentProps } from 'react'
import { ScrollView, View } from 'react-native'

export const Scrollable = (props: ComponentProps<typeof ScrollView>) => {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      style={{ flex: 1, gap: 24 }}
      {...props}
    />
  )
}

export const Fixed = (props: ComponentProps<typeof View>) => {
  return (
    <View
      style={{ flex: 1, gap: 24 }}
      {...props}
    />
  )
}

export const Content = {
  Scrollable,
  Fixed,
}
