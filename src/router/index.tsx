import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { AppStack } from './app-stack'

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
}

export const Router = () => {
  return (
    <NavigationContainer theme={theme}>
      <AppStack />
    </NavigationContainer>
  )
}
