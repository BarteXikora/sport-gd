import TUiProps from '../types/ui.types'

type TSelectElementProps = TUiProps & {
    selected: boolean
    onPress: () => void
}

export default TSelectElementProps

