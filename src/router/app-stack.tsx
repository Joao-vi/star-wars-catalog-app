import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AppTabNavigator } from './app-tab-navigator'
import { CharacterDetailsScreen } from '../modules/catalog/screens/details-screen'

export type AppStackRouteNames = {
  AppTabNavigator: undefined
  CharacterDetailsScreen: {
    id: number
  }
}

const Stack = createNativeStackNavigator<AppStackRouteNames>()

export function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}
    >
      <Stack.Screen
        name="AppTabNavigator"
        component={AppTabNavigator}
      />

      <Stack.Screen
        name="CharacterDetailsScreen"
        component={CharacterDetailsScreen}
      />
    </Stack.Navigator>
  )
}
