/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        'sp':'0 3px 12px 0rgba(0,0,0,0.2)'
      },
      frontFamily: {
        sans:['Avenir','Helvetica','Arial','sans-serif'],
      }
    },
  },
  plugins: [],
}

