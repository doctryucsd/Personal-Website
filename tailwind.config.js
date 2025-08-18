/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem'
      }
    },
  },
  plugins: [],
}
