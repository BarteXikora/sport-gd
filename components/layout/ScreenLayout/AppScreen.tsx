import { ReactNode } from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

const AppScreen = ({ children }: { children: ReactNode }) => {
    return (
        <SafeAreaProvider>
            <SafeAreaView className='bg-black flex-1'>
                {children}
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default AppScreen