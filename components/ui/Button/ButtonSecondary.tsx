import Button from './Button'
import { TButtonProps } from './Button.types'

const ButtonSecondary = ({ title, onPress, disabled, customClass }: TButtonProps) => {
    return <Button
        title={title}
        onPress={onPress}
        disabled={disabled}
        customClass={customClass}

        containterDefaultClass='bg-gray-750'
        containterPressedClass='bg-gray-500'
        textClass='font-figtree color-white'
    />
}

export default ButtonSecondary