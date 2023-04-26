/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'home-bgr': "url('~/src/assets/imgs/home-bg.png')",
                'home-bgr-light': "url('~/src/assets/imgs/home-bg-light.png')",
            },
            gridTemplateColumns: {
                // Simple 16 column grid
                205: 'repeat(20,16%)',
                204: 'repeat(20,22%)',
                202: 'repeat(20,40%)',
                201: 'repeat(20,80%)',
            },
        },
        fontFamily: {},
    },
    plugins: [],
};
