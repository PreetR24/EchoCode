export default {
    plugins: {
        'postcss-nesting': {},
        tailwindcss: {},
        autoprefixer: {
            flexbox: true,
            grid: true,
            overrideBrowserslist: ['last 2 versions', '> 1%', 'IE 10'],
        },
    },
}
