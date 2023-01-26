/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      colors:{
        windows:{
          gray:{
            light:"#ededed",
            main:"#c3c3c3",
            dark:"#404040"
          },
          blue:"#010081",
          green:"#008080"
        }
      }
    },
    fontFamily:{
      sans:["PX-Sans", "sans-serif"]
    }
  },
  plugins: [],
}
