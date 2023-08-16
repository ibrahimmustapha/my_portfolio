/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.js"],
  theme: {
    fontFamily: {
      'poppins': ["Poppins", "sans-serif"]
    },
    extend: {
      width: {
        128: "30rem",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
