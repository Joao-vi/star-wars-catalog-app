import { StatusBar } from 'expo-status-bar'
import Toast from 'react-native-toast-message'

import { Router } from './src/router'
import { ReactQueryProvider } from './src/services/react-query'
import { DependencyContainerProvider } from './src/services/dependency-container'
import { Font } from './src/components/ui/font'

export default function App() {
  return (
    <DependencyContainerProvider>
      <ReactQueryProvider>
        <Font>
          <StatusBar style="dark" />

          <Router />
          <Toast />
        </Font>
      </ReactQueryProvider>
    </DependencyContainerProvider>
  )
}
