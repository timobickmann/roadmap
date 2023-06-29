const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        a: { color: "rgb(157, 178, 191)", textDecoration: "underline" },
        html: {
          color: "#d1d5db",
          backgroundColor: "#374151",
          fontFamily: theme("fontFamily.mono"),
        },
      });
    }),
  ],
};
