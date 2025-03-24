type TButtonProps = {
    title: string
    onPress: () => void
    type?: 'PRIMARY' | 'SECONDARY'
    disabled?: boolean
    customClass?: {
        container?: string
        text?: string
    }
}

export type TButtonHook = Pick<TButtonProps, 'type' | 'disabled'>

export default TButtonProps