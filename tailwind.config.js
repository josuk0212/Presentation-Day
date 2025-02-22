/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3f3f46",
        second: "#f9fafb",
        background: "#f1f5f9",
        modalbg: "#e2e8f0",
      },
    },
  },
  plugins: [daisyui],
};
