import { ReactNode } from 'react'
import { View } from 'react-native'

const FixedBottom = ({ children }: { children: ReactNode }) => {
    return (
        <View className='px-[16px] pb-[8px]'>
            {children}
        </View>
    )
}

export default FixedBottom