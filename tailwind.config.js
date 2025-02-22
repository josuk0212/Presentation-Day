/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#a78bfa",
        second: "#f9fafb",
        modalbg: "#e2e8f0",
      },
    },
  },
  plugins: [daisyui],
};
