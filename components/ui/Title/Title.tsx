import { Text } from 'react-native'
import TUiProps from '../types/ui.types'

const Title = ({ children, customClass }: TUiProps) => {
    return (
        <Text
            className={`mb-[8px] font-figtree-black text-app-title color-white ${customClass}`}
        >
            {children}
        </Text>
    )
}

export default Title