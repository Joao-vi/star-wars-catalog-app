import { create, StateCreator } from 'zustand'

export const createTypedStore = <T>(props: StateCreator<T>) => create<T>()(props)
