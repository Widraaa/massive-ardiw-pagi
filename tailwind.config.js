/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#14b8a6",
        headingColor: "#0f766e",
        smallTextColor: "#134e4a",
      },
    },
  },
  plugins: [],
};
