const path = require("node:path")

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    path.resolve(__dirname, "dist/**/*.html")
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

