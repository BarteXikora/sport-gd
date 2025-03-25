import { Pressable, View, Text } from 'react-native'
import { TButtonParentProps } from './Button.types'

const Button = ({
    title, onPress, disabled,
    customClass, containterDefaultClass,
    containterPressedClass, textClass

}: TButtonParentProps) => {
    return (
        <Pressable
            className='flex-grow'
            onPress={onPress}
            disabled={disabled}
        >
            {({ pressed }) => (
                <View
                    className={`
                        ${disabled ? 'bg-gray-500' : pressed ? containterPressedClass : containterDefaultClass}

                        py-[14px] px-[24px] items-center rounded-app flex-1

                        ${customClass?.container}
                    `}
                >
                    <Text
                        className={`
                            ${disabled ? 'font-figtree color-gray-250' : textClass}

                            text-app-default whitespace-nowrap

                            ${customClass?.text}
                        `}
                    >
                        {title}
                    </Text>
                </View>
            )}
        </Pressable>
    )
}

export default Button