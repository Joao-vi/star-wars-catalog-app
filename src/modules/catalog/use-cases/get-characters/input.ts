import { createTypedStore } from '../../../../services/zustand'

export type GetCharactersInput = {
  search?: string
  page?: number
}

const INITIAL_STATE: GetCharactersInput = {}

const store = createTypedStore<GetCharactersInput>(() => INITIAL_STATE)

const actions = {
  setSearch: (search: string) => store.setState({ search }),
  setPage: (page: number) => store.setState({ page }),
  reset: () => store.setState(INITIAL_STATE),
}

export const getCharactersInputStore = {
  actions,
  store,
}
