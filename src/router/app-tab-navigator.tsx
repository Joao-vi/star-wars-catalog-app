import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { CharactersListScreen } from '../modules/catalog/screens/list-screen'
import { colors } from '../components/ui/colors'
import { Text } from '../components/ui/text'
import { Search } from '../components/ui/icons/search'
import { Bookmark } from '../components/ui/icons/bookmark'
import { BookmarkListScreen } from '../modules/bookmark/screens/list-screen'

export type AppTabBottomRouteNames = {
  CharactersListScreen: undefined
  FavoriteList: undefined
}
const Tab = createBottomTabNavigator<AppTabBottomRouteNames>()

const getTabBarLabel = (routeName: string) => {
  switch (routeName) {
    case 'CharactersListScreen':
      return 'Catálago'

    case 'FavoriteList':
      return 'Favoritos'

    default:
      throw new Error(`${routeName} was not found`)
  }
}

const getTabBarIcons = (routeName: string) => {
  switch (routeName) {
    case 'CharactersListScreen':
      return Search

    case 'FavoriteList':
      return Bookmark

    default:
      throw new Error(`${routeName} was not found`)
  }
}

export function AppTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          height: 58,
          borderTopLeftRadius: 38,
          borderTopRightRadius: 38,
          bottom: 0,
          borderTopWidth: 1,
          borderLeftWidth: 1,
          borderRightWidth: 1,
          borderColor: colors.zinc[200],
          paddingBottom: 8,
          paddingTop: 4,
        },
        tabBarItemStyle: {
          flexDirection: 'column',
        },

        tabBarIcon: ({ focused }) => {
          const Icon = getTabBarIcons(route.name)

          return (
            <Icon
              fill={focused ? colors.blue[500] : colors.zinc[400]}
              width={20}
              height={20}
            />
          )
        },

        tabBarLabel: ({ focused }) => (
          <Text
            size="sm"
            style={{ color: focused ? colors.blue[500] : colors.zinc[400] }}
          >
            {getTabBarLabel(route.name)}
          </Text>
        ),
      })}
    >
      <Tab.Screen
        name="CharactersListScreen"
        component={CharactersListScreen}
      />

      <Tab.Screen
        name="FavoriteList"
        component={BookmarkListScreen}
      />
    </Tab.Navigator>
  )
}
