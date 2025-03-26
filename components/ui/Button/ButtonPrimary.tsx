import Button from './Button'
import { TButtonProps } from './Button.types'

const ButtonPrimary = ({ title, onPress, disabled, customClass }: TButtonProps) => {
    return <Button
        title={title}
        onPress={onPress}
        disabled={disabled}
        customClass={customClass}

        containterDefaultClass='bg-primary-500'
        containterPressedClass='bg-primary-250'
        textClass='color-black font-figtree-black'
    />
}

export default ButtonPrimary