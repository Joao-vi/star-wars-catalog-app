import { ComponentProps } from 'react'
import { Text } from '../../text'
import { colors } from '../../colors'

export const TextError = (props: ComponentProps<typeof Text>) => (
  <Text
    {...props}
    style={[{ color: colors.red[500] }, props.style]}
    size="xs"
  />
)
