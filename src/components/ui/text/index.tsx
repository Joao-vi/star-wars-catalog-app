import { ComponentProps } from 'react'
import { Text as TextP } from 'react-native'
import { TextVariants, variants } from './variants'

type ButtonProps = TextVariants & ComponentProps<typeof TextP>

export const Text = ({ size, style, ...props }: ButtonProps) => (
  <TextP
    {...props}
    style={variants({ size, style })}
  />
)
