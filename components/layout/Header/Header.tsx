import { View, Text, Pressable } from 'react-native'
import React from 'react'

const Header = () => {
    return (
        <View className='flex-row justify-between items-center'>
            <Text className='font-figtree-black text-[28px] color-white pl-[16px]'>
                SQUASH<Text className='color-secondary-500'>GD</Text>
            </Text>

            <Pressable className='gap-[4.5px] p-[16px]'>
                {[0, 1, 2].map(n => <View key={n} className='w-[24px] h-[3px] bg-white rounded-[3px]' />)}
            </Pressable>
        </View>
    )
}

export default Header