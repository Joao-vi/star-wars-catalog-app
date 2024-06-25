import { ComponentProps } from 'react'
import debounce from 'lodash.debounce'

import { Input } from '../input/intex'
import { useListContext } from './context'

type SearchFieldProps = ComponentProps<typeof Input.TextInput>

export const SearchField = ({ ...props }: SearchFieldProps) => {
  const { onSearch } = useListContext()

  return (
    <Input.TextInput
      {...props}
      onChangeText={onSearch && debounce(onSearch, 500)}
    />
  )
}
