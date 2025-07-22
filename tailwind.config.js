/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-black': '#000000',
        'custom-yellow': '#FFCA28',
        'custom-gray': '#A0AEC0',
      },
      fontFamily: {
        'pretendard-bold': ['Pretendard Variable', 'sans-serif'],
        'pretendard-medium': ['Pretendard Variable', 'sans-serif'],
        'pretendard-regular': ['Pretendard Variable', 'sans-serif'],
      }
    },
  },
  plugins: [],
} 