import { ComponentProps } from 'react'
import Svg, { Path } from 'react-native-svg'

export const Bookmark = (props: ComponentProps<typeof Svg>) => (
  <Svg
    width={16}
    height={16}
    viewBox="0 0 256 256"
    {...props}
  >
    <Path d="M160 56H64a16 16 0 0 0-16 16v152a8 8 0 0 0 12.65 6.51L112 193.83l51.36 36.68A8 8 0 0 0 176 224V72a16 16 0 0 0-16-16m0 152.46-43.36-31a8 8 0 0 0-9.3 0L64 208.45V72h96ZM208 40v152a8 8 0 0 1-16 0V40H88a8 8 0 0 1 0-16h104a16 16 0 0 1 16 16" />
  </Svg>
)
