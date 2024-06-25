import { ReactNode, createContext, useContext } from 'react'
import { swapiHttpClient } from '../modules/catalog/infra/swapi-http-client'
import { CharacterRepository } from '../modules/catalog/repository/character'

type IDependencyContainer = typeof dependencyContainer

const dependencyContainer = {
  characterRepository: new CharacterRepository(swapiHttpClient),
}

const Context = createContext<IDependencyContainer | undefined>(undefined)

export const useDependencyContainer = () => {
  const ctx = useContext(Context)
  if (!ctx) throw new Error('DependencyContainerProvider was not found')

  return ctx
}

export const DependencyContainerProvider = (props: { children: ReactNode }) => (
  <Context.Provider value={dependencyContainer}>{props.children}</Context.Provider>
)
