import { Stack } from 'expo-router'
import useAppFonts from '@/hooks/useAppFonts/useAppFonts'

import '@/global.css'

const RootLayout = () => {
  useAppFonts()

  return <Stack
    screenOptions={{
      headerShown: false,
      navigationBarColor: '#001329',
      statusBarBackgroundColor: '#001329',
      statusBarStyle: 'light'
    }}
  />
}

export default RootLayout