/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slateblue: {
          DEFAULT: '#4A5B8C',
          dark: '#3A4A75',
        },
        amber: {
          DEFAULT: '#E8A33D',
          dark: '#C88A2A',
        },
        ink: '#1F2333',
        paper: '#F5F5F3',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}