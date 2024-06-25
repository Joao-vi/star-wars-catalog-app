import { createTypedStore } from '../../../services/zustand'

export type Bookmark = {
  ids: number[]
}
const INITIAL_STATE: Bookmark = {
  ids: [],
}

const store = createTypedStore<Bookmark>(() => INITIAL_STATE)

const actions = {
  add: (id: number) =>
    !store.getState().ids.includes(id) && store.setState({ ids: [...store.getState().ids, id] }),

  delete: (id: number) =>
    store.setState({ ids: store.getState().ids.filter((item) => item !== id) }),
}

export const bookmarkStore = {
  store,
  actions,
}
