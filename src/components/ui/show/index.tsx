import { Fragment, ReactNode } from 'react'

type ShowProps = {
  children: ReactNode
  show: boolean
}

export const Show = (props: ShowProps) => {
  if (!props.show) return null

  return <Fragment>{props.children}</Fragment>
}
