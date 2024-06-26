/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/public/images/layer.png')",
      },
      colors: {
        primary: "purple",
      },
    },
  },
  plugins: [],
};
