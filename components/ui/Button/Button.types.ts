export type TButtonProps = {
    title: string
    onPress: () => void
    disabled?: boolean
    customClass?: {
        container?: string
        text?: string
    }
}

export type TButtonParentProps = TButtonProps & {
    containterDefaultClass: string
    containterPressedClass: string
    textClass: string
}