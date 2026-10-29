/** @type {import('tailwindcss').Config} */
module.exports = {
  // Scan the HTML (and any JS inside it) for class names
  content: ["./index.html"],

  // Dark mode is driven by a `dark` class on the <html> tag
  darkMode: "class",

  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2F4B7C", // glaze blue
          light: "#5C79A8",
          dark: "#1E3257",
        },
        accent: {
          DEFAULT: "#D9480F", // kiln orange
          light: "#F08A5D",
          dark: "#B33A0A",
        },
        mist: "#EEF2F6", // light page background
        ink: "#0F1724",  // dark page background
      },
      fontFamily: {
        heading: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translateY(0) rotate(-1deg)" },
          "50%": { transform: "translateY(-12px) rotate(1deg)" },
        },
      },
      animation: {
        drift: "drift 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
