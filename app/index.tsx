import { Text, View } from 'react-native'
import { AppScreen, MainScroll, FixedBottom } from '@/components/layout/ScreenLayout'

const Index = () => {
  return (
    <AppScreen>
      <MainScroll>
        <Text className='color-white text-app-default'>Hello, World!</Text>
      </MainScroll>

      <FixedBottom>
        <Text className='color-white'>I am footer 👉👈</Text>
      </FixedBottom>
    </AppScreen>
  )
}

export default Index