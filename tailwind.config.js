/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '15px'
    },
    fontFamily: {
      primary: "var(--font-bebas)",
      secondary: "var(--font-inter)"
    },
    extend: {
      colors: {
        primary: "#10151f",
        secondary: "#475467",
        accent: {
          DEFAULT: "#7edad2",
          hover: "#79ccd3"
        }
      },
      boxShadow: {
        custom: "0px 15px 54px rgba(0,0,0,0.4)"
      }
    },
  },
  plugins: [],
};
