/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'login-bg': "url('./src/Images/Login-bgImg.jpg')",
        'signup-bg': "url('./src/Images/Signup-bg-img.jpg')",
        
      })
    },
  },
  plugins: [],
}

