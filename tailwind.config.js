/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./src/App.js"
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
    extend: {
      colors: {
        gray: '#ABB2BF',
        purple: '#C778DD',
        pageBg: '#282C33',
      },
      backgroundImage: {
        'pageImg': "url('https://www.transparenttextures.com/patterns/always-grey.png')",
      },
    },
  },
  plugins: [],
}