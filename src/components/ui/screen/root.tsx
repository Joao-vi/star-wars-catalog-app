import { ComponentProps } from 'react'
import { KeyboardAvoidingView, Platform } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export const Root = (props: ComponentProps<typeof KeyboardAvoidingView>) => {
  const { top, bottom } = useSafeAreaInsets()

  return (
    <KeyboardAvoidingView
      {...props}
      style={{ flex: 1, marginTop: top, marginBottom: bottom, padding: 16 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    />
  )
}
