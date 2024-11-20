/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Poppins', 'serif'], 
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

