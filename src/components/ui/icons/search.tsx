import { ComponentProps } from 'react'
import Svg, { Path } from 'react-native-svg'

export const Search = (props: ComponentProps<typeof Svg>) => (
  <Svg
    width={16}
    height={16}
    viewBox="0 0 256 256"
    {...props}
  >
    <Path d="m229.66 218.34-50.07-50.06a88.11 88.11 0 1 0-11.31 11.31l50.06 50.07a8 8 0 0 0 11.32-11.32M40 112a72 72 0 1 1 72 72 72.08 72.08 0 0 1-72-72" />
  </Svg>
)
