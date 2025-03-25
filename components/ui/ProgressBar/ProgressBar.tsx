import { useState, useEffect } from 'react'
import { View } from 'react-native'
import TProgressBarProps from './ProgressBar.types'

const ProgressBar = ({ percent, customClass }: TProgressBarProps) => {
    const [fixedPercent, setFixedPercent] = useState<number>(4)

    useEffect(() => {
        if (percent < 4) setFixedPercent(4)
        else if (percent > 100) setFixedPercent(100)
        else setFixedPercent(percent)

    }, [percent])

    return (
        <View className={`bg-gray-750 h-[12px] items-start rounded-app ${customClass}`}>
            <View style={{ width: `${fixedPercent}%` }} className='bg-primary-500 rounded-app h-[12px]' />
        </View>
    )
}

export default ProgressBar