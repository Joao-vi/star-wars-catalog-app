import {
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins'
import { useFonts } from 'expo-font'
import { ReactNode } from 'react'

import * as SplashScreen from 'expo-splash-screen'
import { View } from 'react-native'

SplashScreen.preventAutoHideAsync()

type Props = {
  children: ReactNode
}

export const Font = (props: Props) => {
  const [fontsLoaded] = useFonts({
    Poppins: Poppins_400Regular,
    Poppins_300Light,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  })

  const hideSplashScreen = () => SplashScreen.hideAsync()

  if (!fontsLoaded) return null

  return (
    <View
      onLayout={hideSplashScreen}
      style={{ flex: 1 }}
    >
      {props.children}
    </View>
  )
}
