/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all of your component files.
    content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: {
                black: '#001329',
                white: '#EEF6FF',
                gray: {
                    '250': '#BAC3CC',
                    '500': '#62768C',
                    '750': '#192D44'
                },
                primary: {
                    '250': '#C4F329',
                    '500': '#96D100',
                    '750': '#558A01'
                },
                secondary: {
                    '250': '#72EFF3',
                    '500': '#31A1BE',
                    '750': '#0B6386'
                },
                warning: '#FFB200',
                wrong: '#DA394C',
                gold: '#E9C76A',
                silver: '#CADFEE',
                bronze: '#A59085'
            },
            fontFamily: {
                figtree: ['figtree'],
                'figtree-black': ['figtree-black'],
                'figtree-italic': ['figtree-italic']
            },
            fontSize: {
                'app-title': '36px',
                'app-subtitle': '20px',
                'app-default': '16px'
            },
            borderWidth: {
                'app-default': '3px',
                'app-small': '1px'
            },
            borderRadius: {
                app: '6px'
            },
        },
    },
    plugins: [],
}