import { Text } from 'react-native'
import TUiProps from '../types/ui.types'

const Paragraph = ({ children, customClass }: TUiProps) => {
    return <Text className={`mb-[8px] font-figtree text-app-default color-white ${customClass}`}>{children}</Text>
}

export default Paragraph