/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "hsl(14, 86%, 42%)",
        green: "hsl(159, 69%, 38%)",
        "Rose-50": "hsl(20, 50%, 98%)",
        "Rose-100": "hsl(13, 31%, 94%)",
        "Rose-300": "hsl(14, 25%, 72%)",
        "Rose-400": "hsl(7, 20%, 60%)",
        "Rose-900": "hsl(14, 65%, 9%)",
        "Rose-500": "hsl(12, 20%, 44%)",
      },
      fontFamily: {
        "red-hat": ["Red Hat Text", "sans-serif"],
      },
    },
  },
  plugins: [],
};
