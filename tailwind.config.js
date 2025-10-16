/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#6366F1",
          secondary: "#EC4899",
          accent: "#22D3EE",
        },
      },
      boxShadow: {
        glow: "0 25px 50px -12px rgba(99, 102, 241, 0.35)",
      },
      backgroundImage: {
        "hero-light":
          "radial-gradient(circle at top left, rgba(99,102,241,0.18), transparent 55%), radial-gradient(circle at top right, rgba(14,165,233,0.18), transparent 60%)",
        "hero-dark":
          "radial-gradient(circle at top left, rgba(99,102,241,0.25), transparent 55%), radial-gradient(circle at bottom right, rgba(236,72,153,0.2), transparent 60%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        fadeUp: "fadeUp 0.7s ease-out forwards",
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
