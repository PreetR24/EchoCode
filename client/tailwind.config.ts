/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{html,js,ts,jsx,tsx}",
        "./src/**/*.{css,scss}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/context/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                dark: "#212429",
                darkHover: "#3D404A",
                light: "#f5f5f5",
                primary: "#39E079",
                danger: "#ef4444",
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
            animation: {
                "up-down": "up-down 2s ease-in-out infinite alternate",
            },
        },
    },
    plugins: [],
    safelist: [
        // Add any classes that might be dynamically generated
        'bg-dark',
        'bg-light',
        'text-dark',
        'text-light',
        'border-dark',
        'border-light',
        'bg-darkHover',
        'bg-primary',
        'bg-danger',
        'text-primary',
        'text-danger',
        'border-primary',
        'border-danger'
    ],
    corePlugins: {
        preflight: true,
    }
}
