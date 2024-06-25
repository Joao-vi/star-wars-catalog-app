import { ComponentProps } from 'react'
import { View } from 'react-native'
import { VariantProps, cva } from '../../../services/cva'
import { colors } from '../colors'

type LineProps = ComponentProps<typeof View> & VariantProps<typeof variants>

const variants = cva(
  {
    backgroundColor: colors.zinc[200],
  },
  {
    variants: {
      direction: {
        vertical: {
          width: 1,
          height: '100%',
        },
        horizontal: {
          width: '100%',
          height: 1,
        },
      },
    },

    defaultVariants: {
      direction: 'horizontal',
    },
  }
)

export const Line = ({ style, direction, ...props }: LineProps) => (
  <View
    {...props}
    style={variants({ direction, style })}
  />
)
