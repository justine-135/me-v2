/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      encode: "Encode Sans Condensed, sans-serif",
      josefin: "Josefin Sans, sans-serif",
    },
    extend: {
      colors: {
        darkH: "#a5f3fc",
        p: "#334155",
        darkP: "#06b6d4",
        "title-sm": "#64748b",
        darkBg: "#083344",
        darkBorder: "#164e63",
        darkBorderHover: "#0e7490",
      },
    },
  },
  plugins: [],
};
