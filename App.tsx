import { StatusBar } from 'expo-status-bar'
import Toast from 'react-native-toast-message'

import { Router } from './src/router'
import { ReactQueryProvider } from './src/services/react-query'
import { DependencyContainerProvider } from './src/services/dependency-container'

export default function App() {
  return (
    <DependencyContainerProvider>
      <ReactQueryProvider>
        <StatusBar style="dark" />

        <Router />
        <Toast />
      </ReactQueryProvider>
    </DependencyContainerProvider>
  )
}
