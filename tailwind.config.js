/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00BCD4', // Turquoise
          dark: '#00ACC1',
        },
        secondary: {
          DEFAULT: '#4CAF50', // Emerald Green
        },
        accent: {
          DEFAULT: '#FFD700', // Sunny Yellow
          coral: '#FF7F50', // Coral
        },
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
      },
    },
  },
  plugins: [],
};