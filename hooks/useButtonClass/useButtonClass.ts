import { TButtonHook } from '@/components/ui/Button/Button.types'
import { useState, useEffect } from 'react'

const buttonClasses = {
    container: {
        primary: { default: 'bg-primary-500', pressed: 'bg-primary-250' },
        secondary: { default: 'bg-gray-750', pressed: 'bg-gray-500' },
        disabled: 'bg-gray-500'
    },
    text: {
        primary: 'color-black font-figtree-black',
        secondary: 'font-figtree color-white',
        disabled: 'font-figtree color-gray-250'
    }
}

const useButtonClass = ({ type, disabled }: TButtonHook) => {
    const [isPressed, setIsPressed] = useState<boolean>(false)
    const [buttonContainerClass, setButtonContainerClass] = useState<string>('')
    const [buttonTextClass, setButtonTextClass] = useState<string>('')

    useEffect(() => {
        if (disabled) {
            setButtonContainerClass(buttonClasses.container.disabled)
            setButtonTextClass(buttonClasses.text.disabled)

        } else if (type === 'SECONDARY') {
            setButtonTextClass(buttonClasses.text.secondary)

            if (isPressed) setButtonContainerClass(buttonClasses.container.secondary.pressed)
            else setButtonContainerClass(buttonClasses.container.secondary.default)

        } else {
            setButtonTextClass(buttonClasses.text.primary)

            if (isPressed) setButtonContainerClass(buttonClasses.container.primary.pressed)
            else setButtonContainerClass(buttonClasses.container.primary.default)
        }

    }, [isPressed])

    return { buttonContainerClass, buttonTextClass, setIsPressed }
}

export default useButtonClass