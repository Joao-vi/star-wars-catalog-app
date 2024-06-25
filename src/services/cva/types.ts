import { ImageStyle, StyleProp, TextStyle, ViewStyle } from 'react-native'

type ComponentStyles = ImageStyle | TextStyle | ViewStyle

export type Style = StyleProp<ComponentStyles>

export type ClassProp = {
  style?: Style
}

export type OmitUndefined<T> = T extends undefined ? never : T

export type StringToBoolean<T> = T extends 'true' | 'false' ? boolean : T

export type ConfigSchema = Record<string, Record<string, Style>>

export type ConfigVariants<T extends ConfigSchema> = {
  [Variant in keyof T]?: StringToBoolean<keyof T[Variant]> | null | undefined
}

type ConfigVariantsMulti<T extends ConfigSchema> = {
  [Variant in keyof T]?:
    | StringToBoolean<keyof T[Variant]>
    | StringToBoolean<keyof T[Variant]>[]
    | undefined
}

export type Config<T extends ConfigSchema> = {
  variants?: T
  defaultVariants?: ConfigVariants<T>
  compoundVariants?: ((ConfigVariants<T> | ConfigVariantsMulti<T>) & ClassProp)[]
}

export type Props<T extends ConfigSchema> = ConfigVariants<T> & ClassProp
