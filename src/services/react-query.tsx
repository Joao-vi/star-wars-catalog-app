import { ReactNode } from 'react'
import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Toast from 'react-native-toast-message'

type ReactQueryProviderProps = {
  children: ReactNode
}

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error: any, query) => {
      // 🎉 only show error toasts if we already have data in the cache
      // which indicates a failed background update
      if (query.state.data !== undefined) {
        Toast.show({ type: 'error', text1: error?.message || 'Um erro inesperado aconteceu' })
      }
    },
  }),

  mutationCache: new MutationCache({
    onError: (error: any) => {
      Toast.show({ type: 'error', text1: error?.message || 'Um erro inesperado aconteceu' })
    },
  }),
})

export const ReactQueryProvider = (props: ReactQueryProviderProps) => (
  <QueryClientProvider client={queryClient}>{props.children}</QueryClientProvider>
)
