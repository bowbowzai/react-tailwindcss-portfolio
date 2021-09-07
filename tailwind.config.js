module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                'lobster': 'Lobster',
                'zilla-slab': 'Zilla Slab',
                'acme': 'Acme',
                'poppins': 'Poppins'
            },
            colors: {
                'crimson': '#cc005f',
                'coral': 'hsl(0, 100%, 86%)'
            },
            keyframes: {
                fadeIn: {
                    '0%': {
                        opacity: 0
                    },
                    '100%': {
                        opacity: 1
                    }
                }
            },
            animation: {
                fadeIn: 'fadeIn 1s ease'
            }
        },
    },
    variants: {
        extend: {
            display: ['responsive', 'group-hover', 'group-focus'],
            position: ['group-hover'],
            scale: ['group-hover'],
            transform: ['group-hover'],
        },
    },
    plugins: [],
}