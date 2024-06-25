import { VariantProps, cva } from '../../../services/cva'
import { colors } from '../colors'

export type TextVariants = VariantProps<typeof variants>

export const variants = cva(
  {
    color: colors.zinc[700],
    fontWeight: '500',
  },
  {
    variants: {
      size: {
        xs: {
          fontSize: 12,
          lineHeight: 13,
        },
        sm: {
          fontSize: 14,
          lineHeight: 15,
        },
        base: {
          fontSize: 16,
          lineHeight: 17,
        },
        lg: {
          fontSize: 18,
          lineHeight: 19,
        },

        xl: {
          fontSize: 20,
          lineHeight: 21,
        },
      },
    },

    defaultVariants: {
      size: 'base',
    },
  }
)
