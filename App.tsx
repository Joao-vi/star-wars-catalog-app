import { DependencyContainerProvider } from './src/services/dependency-container'
import Toast from 'react-native-toast-message'
import { Font } from './src/components/ui/font'
import { ReactQueryProvider } from './src/services/react-query'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Router } from './src/router'

export default function App() {
  return (
    <DependencyContainerProvider>
      <ReactQueryProvider>
        <SafeAreaProvider>
          <Font>
            <StatusBar style="auto" />
            <Router />
          </Font>
        </SafeAreaProvider>
      </ReactQueryProvider>

      <Toast />
    </DependencyContainerProvider>
  )
}
