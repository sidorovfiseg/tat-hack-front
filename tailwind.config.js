/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      pacifico: ["var(--font-pacifico)"],
      scp: ["var(--font-scp)"],
      montserrat: ["var(--font-montserrat)"],
    },
    extend: {
      transitionProperty: {
        bg: "background-color",
        colors: "color, background-color",
      },
    },
  },
  plugins: [],
};
