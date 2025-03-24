import { TouchableOpacity, Text } from 'react-native'
import TButtonProps from './Button.types'

const Button = ({ title, onPress, type, disabled, customClass }: TButtonProps) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled}

            className={`
                ${disabled ?
                    'bg-gray-500'
                    :
                    type === 'SECONDARY' ?
                        'bg-gray-750'
                        :
                        'bg-primary-500'
                }
                
                text-app-default py-[14px] px-[24px] items-center rounded-app flex-1

                ${customClass?.container}
            `}
        >
            <Text
                className={`
                    ${disabled ?
                        'font-figtree color-gray-250'
                        :
                        type === 'SECONDARY' ?
                            'font-figtree color-white'
                            :
                            'color-black font-figtree-black'} 
                            
                        text-app-default

                        ${customClass?.text}
                    `}
            >
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default Button