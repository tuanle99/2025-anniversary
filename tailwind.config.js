/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "fade-down": {
          "0%": {
            opacity: "1",
            transform: "translateY(-1000px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(1000px)",
          },
        },
      },
      animation: {
        "fade-down-infinite": "fade-down 20s ease-out forwards infinite ",
      },
    },
  },
  plugins: [],
};
