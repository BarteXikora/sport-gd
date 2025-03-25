import { RefObject } from 'react'
import { TextInput } from 'react-native'

type TInputProps = {
    value: string
    setValue: (text: string) => void
    placeholder?: string
    contentCenter?: boolean
    keyboarType?: 'default' | 'numeric'
    isWrong?: boolean
    isWarning?: boolean
}

export default TInputProps