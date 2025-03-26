import { Text } from 'react-native'
import TUiProps from '../types/ui.types'

const Accent = ({ children, customClass }: TUiProps) => {
    return <Text className={`color-primary-500 ${customClass}`}>{children}</Text>
}

const Warning = ({ children, customClass }: TUiProps) => {
    return <Text className={`color-warning ${customClass}`}>{children}</Text>
}

const Wrong = ({ children, customClass }: TUiProps) => {
    return <Text className={`color-wrong ${customClass}`}>{children}</Text>
}

const Bold = ({ children, customClass }: TUiProps) => {
    return <Text className={`font-figtree-black ${customClass}`}>{children}</Text>
}

const Italic = ({ children, customClass }: TUiProps) => {
    return <Text className={`font-figtree-italic ${customClass}`}>{children}</Text>
}

export { Accent, Warning, Wrong, Bold, Italic }