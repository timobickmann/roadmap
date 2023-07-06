const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {themes: ["dark", "business", "light"]},
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: 
  [ require("@tailwindcss/typography"), require("daisyui"),
    plugin(function ({ addBase, addUtilities, theme }) {
      addBase({
        
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
