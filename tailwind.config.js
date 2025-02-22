/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5b21b6",
        modalbg: "#e2e8f0",
      },
    },
  },
  plugins: [daisyui],
};
