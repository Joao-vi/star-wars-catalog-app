import { VariantProps, cva } from '../../../services/cva'
import { colors } from '../colors'

export type ButtonVariants = VariantProps<typeof variants>

export const variants = cva(
  {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',

    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  {
    variants: {
      variant: {
        primary: {
          backgroundColor: colors.blue[500],
        },

        primary_secondary: {
          backgroundColor: colors.blue[100],
        },

        ghost: {
          backgroundColor: colors.zinc[100],
        },

        icon: {},
      },
    },

    defaultVariants: {
      variant: 'primary',
    },
  }
)

export const underlayColor: Record<string, string> = {
  primary: colors.blue[600],
  primary_secondary: colors.blue[200],
  ghost: colors.zinc[200],
}
