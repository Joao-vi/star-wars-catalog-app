import { cva, VariantProps } from '../../../../services/cva'
import { colors } from '../../colors'

export const variants = cva(
  {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,

    fontWeight: '500',
    color: colors.zinc[700],
  },
  {
    variants: {
      status: {
        idle: {
          borderColor: colors.zinc[200],
          backgroundColor: colors.zinc[50],
        },

        focus: {
          borderColor: colors.blue[200],
          backgroundColor: colors.blue[50],
        },

        error: {
          borderColor: colors.red[200],
          backgroundColor: colors.red[50],
        },
      },
    },

    defaultVariants: {
      status: 'idle',
    },
  }
)

export type TextInputVariants = VariantProps<typeof variants>
