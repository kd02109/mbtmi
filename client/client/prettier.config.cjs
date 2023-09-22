/** @type {import("prettier").Config} */
module.exports = {
  plugins: [require('prettier-plugin-tailwindcss')],
  tailwindConfig: './tailwind.config.js',
  singleQuote: true,
  endOfLine: 'auto',
  tabWidth: 2,
  arrowParens: 'avoid',
  bracketSpacing: true,
  bracketSameLine: true,
  printWidth: 80,
  trailingComma: 'all',
};
