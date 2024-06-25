import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { CatalogStack } from '../modules/catalog/routes'

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
      <CatalogStack />
    </NavigationContainer>
  )
}
