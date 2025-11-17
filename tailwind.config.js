/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-teal': '#1a2e2a',
        'medium-teal': '#2d4a45',
        'cream': '#f5f0e8',
        'beige': '#e8dfd0',
        'gold': '#c9a961',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Outfit', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
