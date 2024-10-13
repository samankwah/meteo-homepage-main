/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#281432",
        primary: {
          light: "#bf4596",
          DEFAULT: "#FF00C3",
          dark: "#7c2b61",
        },
        secondary: {
          light: "#ffb3ba",
          DEFAULT: "#ff6b6b",
          dark: "#c0392b",
        },
        accent: {
          light: "#ffe599",
          DEFAULT: "#ffcc00",
          dark: "#b37f00",
        },
        neutral: {
          light: "#f5f5f5",
          DEFAULT: "#e0e0e0",
          dark: "#9e9e9e",
        },
      },
      fontFamily: {
        sans: [
          "Cougette",
          "Montserrat",
          "Amatic SC",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Amatic SC",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        // You can also add it to other categories if needed, for example:
        serif: ["Cougette", "ui-serif", "Georgia"],
        mono: ["Poppins", "ui-monospace", "SFMono-Regular"],
      },
    },
  },
  plugins: [],
};
