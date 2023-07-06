const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {themes: true},
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: 
  [ require("@tailwindcss/typography"), require("daisyui"),
    plugin(function ({ addBase, addUtilities, theme }) {
      addBase({
        "main a": {color: "hsl(var(--p))"},
        "main a:hover": {color: "hsl(var(--pf))"}
       
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
