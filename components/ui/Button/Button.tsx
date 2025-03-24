import { useState } from 'react'
import { Pressable, View, Text } from 'react-native'
import useButtonClass from '@/hooks/useButtonClass/useButtonClass'

import TButtonProps from './Button.types'

const Button = ({ title, onPress, type, disabled, customClass }: TButtonProps) => {
    const { buttonContainerClass, buttonTextClass, setIsPressed } = useButtonClass({ type, disabled })

    return (
        <Pressable
            className='flex-grow'
            onPress={onPress}
            disabled={disabled}
            onPressIn={() => setIsPressed(true)}
            onPressOut={() => setIsPressed(false)}
        >
            <View
                className={`
                    ${buttonContainerClass}

                    text-app-default py-[14px] px-[24px] items-center rounded-app flex-1
                        
                    ${customClass?.container}
                `}
            >
                <Text
                    className={`
                        ${buttonTextClass} 
                            
                        text-app-default whitespace-nowrap

                        ${customClass?.text}
                    `}
                >
                    {title}
                </Text>
            </View>
        </Pressable>
    )
}

export default Button