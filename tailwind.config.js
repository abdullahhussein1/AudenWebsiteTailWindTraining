/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
    fontFamily: {
      display: ["Poppins"],
    },
    animation: {
      "spin-once": "spin 0.2s linear 1",
    },
  },
  plugins: [require("flowbite/plugin")],
};
