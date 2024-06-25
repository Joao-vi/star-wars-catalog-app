import { ComponentProps } from 'react'
import { TextInput as TextInputP, View } from 'react-native'

import { InputProps } from '../shared/input-field'
import { Label } from '../shared/label'
import { Show } from '../../show'
import { TextError } from '../shared/text-error'
import { Description } from '../shared/description'
import { useStatus } from './use-status'
import { colors } from '../../colors'
import { variants } from './variants'

type TextInputProps = InputProps & ComponentProps<typeof TextInputP>

export const TextInput = ({ label, error, style, description, ...props }: TextInputProps) => {
  const { status, setStatus } = useStatus(!!error)

  return (
    <View style={{ gap: 4 }}>
      <Show show={!!label}>
        <Label>{label}</Label>
      </Show>

      <TextInputP
        {...props}
        style={variants({ status, style })}
        placeholderTextColor={colors.zinc[400]}
        onFocus={() => setStatus('focus')}
        onBlur={() => setStatus('idle')}
        autoCapitalize="none"
      />

      <Show show={!!error}>
        <TextError>{error}</TextError>
      </Show>

      <Show show={!error && !!description}>
        <Description>{description}</Description>
      </Show>
    </View>
  )
}
