/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('./src/assets/bg.png')",
      },
      fontFamily: {
        righteous: ['Righteous', 'sans-serif'],
      },
    },
  },
  plugins: [],
}