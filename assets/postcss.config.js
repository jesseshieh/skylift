var tailwindcss = require('tailwindcss');
module.exports = {
  plugins: [
    // ...
    tailwindcss('./js/tailwind.js'),
    require('autoprefixer'),
    // ...
  ]
}