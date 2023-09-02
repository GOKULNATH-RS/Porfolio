/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    boxShadow: {
      primary: "1px 1px 30px 0px rgba(0,0,0,0.15)",
      "3xl": "1px 35px 60px -15px rgba(0, 0, 0, 0.3)",
    },
    fontWeight: {
      bold: "600",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        geologica: ["Geologica", "sans-serif"],
        gruppo: ["Gruppo", "sans-serif"],
      },
      colors: {
        "black-90": "rgba(0,0,0,0.9)",
      },
    },
  },
  plugins: [],
};
