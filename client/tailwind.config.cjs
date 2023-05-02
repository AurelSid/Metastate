/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "mobile-landscape": {
          raw: "(orientation: landscape) and (max-width: 850px) and (max-height: 480px)",
        },
      },
    },
  },
  plugins: [],
};
