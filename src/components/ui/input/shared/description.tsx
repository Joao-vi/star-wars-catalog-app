import { ComponentProps } from 'react'
import { Text } from '../../text'
import { colors } from '../../colors'

export const Description = (props: ComponentProps<typeof Text>) => (
  <Text
    {...props}
    style={[{ color: colors.zinc[400] }, props.style]}
    size="xs"
  />
)
