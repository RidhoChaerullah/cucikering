/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: "#4F378A",
        secondary: "#EADDFF",
        main: "#f3f4f6",
      },
    },
  },
  plugins: [],
}

