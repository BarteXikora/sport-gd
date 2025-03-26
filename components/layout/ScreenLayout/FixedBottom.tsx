import { ReactNode } from 'react'
import { View } from 'react-native'

const FixedBottom = ({ children }: { children: ReactNode }) => {
    return (
        <View className='absolute bottom-0 left-0 w-full bg-black px-[16px] pb-[8px]'>
            {children}
        </View>
    )
}

export default FixedBottom