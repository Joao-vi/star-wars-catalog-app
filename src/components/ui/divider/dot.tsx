import { ComponentProps } from 'react'
import { Text } from '../text'
import { colors } from '../colors'

export const Dot = (props: ComponentProps<typeof Text>) => (
  <Text
    {...props}
    style={[{ color: colors.zinc[400] }, props.style]}
  >
    •
  </Text>
)
