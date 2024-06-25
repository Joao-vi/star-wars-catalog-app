import { ComponentProps } from 'react'
import { FlatList } from 'react-native'
import { useListContext } from './context'

type FlatListProps = ComponentProps<typeof FlatList>

type ListProps = Omit<FlatListProps, 'data'>

export const List = (props: ListProps) => {
  const { data, isLoading } = useListContext()

  if (isLoading) return null

  return (
    <FlatList
      {...props}
      data={data}
    />
  )
}
