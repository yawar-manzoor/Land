// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    Main: 'var(--primary-color)',
                    50: 'var(--primary50)',
                    100: 'var(--primary100)',
                    200: 'var(--primary200)',
                    300: 'var(--primary300)',
                    400: 'var(--primary400)',
                    500: 'var(--primary500)',
                    600: 'var(--primary600)',
                    700: 'var(--primary700)',
                },
                neutral: {
                    50: 'var(--neutral50)',
                    400: 'var(--neutral400)',
                    500: 'var(--neutral500)',
                    600: 'var(--neutral600)',
                    700: 'var(--neutral700)',
                    800: 'var(--neutral800)',
                },
                primaryYellow: {
                    100: 'var(--primary-yellow200)',
                    500: 'var(--primary-yellow)',
                },
                primaryGreen: {
                    200: 'var(--primary-green200)',
                    300: 'var(--primary-green300)',
                },

                secondary: 'var(--secondary)',
                secondary500: 'var(--secondary500)',
                success: 'var(--success)',
                warning: 'var(--warning)',
            },
            screens: {
                '3xl': '2200px', // Adjust the pixel value to your desired breakpoint
            },
            content: {
                link: 'url("assets/Arrow.svg")',
            },
        },
    },
    plugins: [],
}
