/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "green-400": "#306844",
        "green-700": "#2c4c3b",
        "green-800": "#1e453e",
        "green-900": "#182c25",
      },
    },
  },
  plugins: [],
};
