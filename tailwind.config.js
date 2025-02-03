/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF3002',
        secondary: '#002E5D',
        'ochre-light': '#FFF5E9',
      },
      maxWidth: {
        '8xl': '1400px'
      }
    },
  },
  plugins: [],
};