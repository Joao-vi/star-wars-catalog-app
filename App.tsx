import { StatusBar } from 'expo-status-bar'
import Toast from 'react-native-toast-message'

import { Router } from './src/router'
import { ReactQueryProvider } from './src/services/react-query'

export default function App() {
  return (
    <ReactQueryProvider>
      <StatusBar style="dark" />

      <Router />
      <Toast />
    </ReactQueryProvider>
  )
}
