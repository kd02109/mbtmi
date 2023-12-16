import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bgGray: '#f5f5f5',
        bgChating: '#D5EBFF',
        bgBrown: '#401D1D',
        bgYellow: '#FEE502',
      },
      animation: {},
    },
  },
  plugins: [require('daisyui')],
};
export default config;
