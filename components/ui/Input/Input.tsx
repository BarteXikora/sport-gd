import { View, Text, TextInput } from 'react-native'
import TInputProps from './Input.types'

const Input = ({ value, setValue, placeholder, contentCenter, keyboarType, isWrong, isWarning }: TInputProps) => {
    return (
        <TextInput
            placeholder={placeholder}
            value={value}
            onChangeText={text => setValue(text)}

            keyboardType={keyboarType || 'default'}
            numberOfLines={1}
            className={`
                bg-gray-750 rounded-app text-app-default font-figtree color-white 
                py-[11px] px-[21px] border-[3px] border-gray-750 flex-1 box-border
                focus:border-secondary-500 focus:color-white placeholder:color-gray-250
                focus:placeholder:color-gray-250

                ${contentCenter && 'text-center'}

                ${isWrong && 'border-wrong color-wrong placeholder:color-wrong'}
                ${isWarning && 'border-warning color-warning placeholder:color-warning'}
            `}
        />
    )
}

export default Input