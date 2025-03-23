import { Stack } from 'expo-router'
import useAppFonts from '@/hooks/useAppFonts/useAppFonts'

import '@/global.css'

const RootLayout = () => {
  useAppFonts()

  return <Stack />
}

export default RootLayout