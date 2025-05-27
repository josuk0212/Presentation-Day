/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3f3f46",
        second: "#71717a",
        third: "#f9fafb",
        modalbg: "#e2e8f0",
      },
    },
  },
  plugins: [daisyui],
};
