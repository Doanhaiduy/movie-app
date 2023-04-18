/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'home-bgr': "url('~/src/assets/imgs/home-bg.png')",
                'home-bgr-light': "url('~/src/assets/imgs/home-bg-light.png')",
            },
        },
        fontFamily: {},
    },
    plugins: [],
};
