import type { Config, ConfigSchema, ConfigVariants, OmitUndefined, Props, Style } from './types'

export type VariantProps<Component extends (...args: any) => any> = Omit<
  OmitUndefined<Parameters<Component>[0]>,
  'style'
>

const falsyToString = <T extends unknown>(value: T) =>
  typeof value === 'boolean' ? `${value}` : value === 0 ? '0' : value

const objectToArray = <T extends Record<string, any>>(aObject: T) => Object.entries<T>(aObject)

function getEnabledVariants<T extends ConfigSchema>(
  variants: T,
  props?: Props<T>,
  defaultVariants?: ConfigVariants<T>,
) {
  return Object.keys(variants).map((variant: keyof typeof variants) => {
    const variantProp = props?.[variant as keyof typeof props]
    const defaultVariantProp = defaultVariants?.[variant]

    if (variantProp === null) return null

    const variantKey = (falsyToString(variantProp) ||
      falsyToString(defaultVariantProp)) as keyof (typeof variants)[typeof variant]

    return variants[variant][variantKey]
  })
}

function getEnabledCompoundVariants<T extends ConfigSchema>(
  props: Props<T> | undefined,
  config: Config<T>,
  defaultVariants: ConfigVariants<T> | undefined,
) {
  const propsWithoutUndefined =
    props &&
    Object.entries(props).reduce((acc, [key, value]) => {
      if (value === undefined) return acc

      acc[key] = value
      return acc
    }, {} as Record<string, unknown>)

  const result = config?.compoundVariants?.reduce(
    (acc, { style, ...compoundVariantOptions }) =>
      objectToArray(compoundVariantOptions).every(([key, value]) => {
        return Array.isArray(value)
          ? value.includes(
              {
                ...defaultVariants,
                ...propsWithoutUndefined,
              }[key],
            )
          : {
              ...defaultVariants,
              ...propsWithoutUndefined,
            }[key] === value
      })
        ? [...acc, style]
        : acc,
    [] as Style[],
  )

  return result || []
}

export const cva =
  <T extends ConfigSchema>(base?: Style, config?: Config<T>) =>
  (props?: Props<T>) => {
    if (config?.variants == null) return [base, props?.style]

    const { variants, defaultVariants } = config

    const enabledVariants = getEnabledVariants<T>(variants, props, defaultVariants)

    const enabledCompoundVariants = getEnabledCompoundVariants<T>(props, config, defaultVariants)

    return [base, ...enabledVariants, ...enabledCompoundVariants, props?.style]
  }
