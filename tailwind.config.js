/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        loading: {
          "0%, 100%": {
            marginTop: "25px",
            height: "10px"
          },
          "50%": {
            marginTop: "0px",
            height: "50px"
          }
        }
      },
      animation: {
        'loading': 'loading 1s ease-in-out infinite'
      },
    },
  },
  plugins: [],
}