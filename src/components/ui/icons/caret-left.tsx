import { ComponentProps } from 'react'
import Svg, { Path } from 'react-native-svg'
import { colors } from '../colors'

export const CaretLeft = (props: ComponentProps<typeof Svg>) => (
  <Svg
    viewBox="0 0 256 256"
    {...props}
    width={props.width || 16}
    height={props.width || 16}
    fill={props.fill || colors.zinc[500]}
  >
    <Path d="M168.49 199.51a12 12 0 0 1-17 17l-80-80a12 12 0 0 1 0-17l80-80a12 12 0 0 1 17 17L97 128Z" />
  </Svg>
)
