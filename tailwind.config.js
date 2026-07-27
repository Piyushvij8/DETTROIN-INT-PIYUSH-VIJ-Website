/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#16233F",
          light: "#22335A",
          dark: "#0E1729",
        },
        sage: {
          DEFAULT: "#EEF1EA",
          deep: "#DCE3D6",
        },
        marigold: {
          DEFAULT: "#D9A441",
          dark: "#B9862B",
        },
        forest: {
          DEFAULT: "#33513B",
          light: "#436B4D",
        },
        maroon: {
          DEFAULT: "#8B3A3A",
          dark: "#6F2C2C",
        },
      },
      fontFamily: {
        display: ["'Fraunces'", "serif"],
        body: ["'Public Sans'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
    },
  },
  plugins: [],
};
