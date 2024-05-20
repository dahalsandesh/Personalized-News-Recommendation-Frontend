/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'login-bg': "url('./src/Images/Login-bg-img.jpg')",
      })
    },
  },
  plugins: [],
}

