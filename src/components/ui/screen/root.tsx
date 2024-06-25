import { ComponentProps } from 'react'
import { KeyboardAvoidingView, Platform } from 'react-native'

export const Root = (props: ComponentProps<typeof KeyboardAvoidingView>) => (
  <KeyboardAvoidingView
    {...props}
    style={{ flex: 1 }}
    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
  />
)
