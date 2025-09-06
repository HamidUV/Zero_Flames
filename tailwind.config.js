/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        cinematicPop: {
          "0%": { opacity: "0", transform: "scale(0.8)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        fadeOutBlack: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'], // replace default
      },
      },
      animation: {
        cinematicPop: "cinematicPop 1.8s ease-out forwards",
        fadeOutBlack: "fadeOutBlack 1s ease-in forwards",
        slideInLeft: "slideInLeft 1s ease-out forwards",
        slideInRight: "slideInRight 1s ease-out forwards",
        float: "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
