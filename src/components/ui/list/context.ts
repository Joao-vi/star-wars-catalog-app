import { createContext, useContext } from 'react'

export type IListContext<T> = {
  data?: T[]
  isLoading?: boolean
  onSearch?: (search: string) => void
}

export const Context = createContext<IListContext<any> | undefined>(undefined)

export const useListContext = () => {
  const ctx = useContext(Context)
  if (!ctx) throw new Error('')

  return ctx
}
