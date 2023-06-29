const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase, addUtilities, theme }) {
      addBase({
        a: { color: "rgb(157, 178, 191)", textDecoration: "underline" },
        html: {
          color: "#d1d5db",
          "background-color": "#374151",
          "font-family": theme("fontFamily.mono"),
        },
      }),
        addUtilities({
          ".scrollbar-hide": {
            "-ms-overflow-style": "none",
            "scrollbar-width": "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          },
        });
    }),
  ],
};
