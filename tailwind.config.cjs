/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      // you can configure the container to be centered
      center: true,

      // or have default horizontal padding
      padding: '1rem',

      // default breakpoints but with 40px removed
      screens: {
        sm: '100%', // '600px',
        md: '100%', // '728px',
        lg: '100%', // '984px',
        xl: '1170px',
        '2xl': '1320px',
      },
    },

    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'success': '#00AF7C',
        'danger': '#FF6C2C',
        'warning': '#FEDA7E',
      },
    },
    
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      lg: '20px',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '6xl': '70px',
    },
    
    fontFamily: {
      'ubuntu': ['"Ubuntu", sans-serif'],
      'body': ['"Rubik", sans-serif',],
    }
  },
  plugins: [require('flowbite/plugin')],
};
