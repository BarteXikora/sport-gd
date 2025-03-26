import { Pressable, View } from 'react-native'
import TSelectElementProps from './SelectElement.types'

const SelectElement = ({ children, selected, onPress, customClass }: TSelectElementProps) => {
    return (
        <Pressable
            onPress={onPress}
            className={`
                border-[1px] rounded-app py-[12px] px-[18px] mb-[16px]

                ${selected ? 'border-primary-500 bg-gray-750' : 'border-white'}

                ${customClass}
            `}
        >
            {
                selected && (
                    <View className={`w-[12px] h-[22px] absolute right-[18px] top-[6px] rotate-45`}>
                        <View className='absolute w-[100%] h-[3px] bottom-0 bg-primary-500 rounded-app' />
                        <View className='absolute w-[3px] h-[100%] right-0 bg-primary-500 rounded-app' />
                    </View>
                )
            }

            {children}
        </Pressable>
    )
}

export default SelectElement