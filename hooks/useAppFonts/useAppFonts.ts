import { useFonts } from 'expo-font'

const useAppFonts = () => {
    useFonts({
        'figtree': require('@/assets/fonts/Figtree-Regular.ttf'),
        'figtree-black': require('@/assets/fonts/Figtree-Black.ttf'),
        'figtree-italic': require('@/assets/fonts/Figtree-Italic.ttf')
    })
}

export default useAppFonts