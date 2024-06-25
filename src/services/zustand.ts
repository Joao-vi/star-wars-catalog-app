import { create, StateCreator } from 'zustand'

export const createTypedStore = <T, _>(props: StateCreator<T>) => create<T>()(props)
