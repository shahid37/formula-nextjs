/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "320px",
      "sm:": "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
      display: ["Open Sans", "sans-serif"],
    },
    extend: {
      colors: {
        // Colors and names are pulled directly from Figma
        teal: "#A0D1CA",
        white: "#FFFFFF",
        "off-white": "#FDF9F4",
        black: "#111111",
        "light-gray": "#EEEEEE",
        gray: "#4E4B48",
        lime: "#A1CD5D",
        red: "#FC5555",
        green: "#29CC6A",
        "input-border": "#635F66",
      },
    },
  },
  plugins: [],
};
