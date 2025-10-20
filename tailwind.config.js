/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cream': '#FDF6E3',
        'yellow': '#FFD23F',
        'yellow-hover': '#FFCD1F',
        'gray-text': '#6B7280',
        'dark-gray': '#374151',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}