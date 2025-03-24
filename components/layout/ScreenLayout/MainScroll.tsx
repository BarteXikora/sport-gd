import { ScrollView } from 'react-native'
import { View } from 'react-native'
import TMainScrollProps from './MainScroll.types'
import Header from '@/components/layout/Header/Header'

const MainScroll = ({ children, justify, showHeader }: TMainScrollProps) => {
    return (
        <View className='flex-1'>
            {(showHeader || showHeader === undefined) && <Header />}

            <ScrollView
                contentContainerClassName={`
                    ${justify === 'center' && 'flex-grow justify-center'} 
                    ${showHeader === false && 'pt-[8px]'}
                    
                    px-[16px]
                `}

                keyboardShouldPersistTaps='handled'
            >
                {children}
            </ScrollView>
        </View>
    )
}

export default MainScroll