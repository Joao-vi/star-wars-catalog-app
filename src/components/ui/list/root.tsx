import { ReactNode } from 'react'
import { Context, IListContext } from './context'

type RootProps<T> = {
  children: ReactNode
} & IListContext<T>

export const Root = <T,>({ children, ...props }: RootProps<T>) => (
  <Context.Provider value={props}>{children}</Context.Provider>
)
