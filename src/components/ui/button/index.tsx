import { ComponentProps } from 'react'
import { TouchableHighlight } from 'react-native'

import { ButtonVariants, underlayColor, variants } from './variants'

type ButtonProps = ButtonVariants & ComponentProps<typeof TouchableHighlight>

export const Button = ({ children, style, variant, ...props }: ButtonProps) => (
  <TouchableHighlight
    {...props}
    underlayColor={underlayColor[variant || 'primary']}
    style={variants({ variant, style })}
  >
    <>{children}</>
  </TouchableHighlight>
)
