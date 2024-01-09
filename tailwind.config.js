

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}', 
  ],
  theme: {
    extend: {
     
      width: {
        '1440': '1440px',
        '1000': '1000px',
        '710': '710px',
        '100%': '100%',
      },
      height: {
        '3950': '3950px',
        '890': '890px',
        '729': '729px',
        '300': '300px',
        '400': '400px',
      }, // Added missing closing brace here
    },
  },
  plugins: [],
};
