/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'colonial-white': '#F5F5DC',
        'terracotta': {
          DEFAULT: '#8E3A1F',
          light: '#A6513C',
          dark: '#6B2D17',
          50: '#FAF2F0',
          100: '#F5E5E1',
          200: '#E8C4B8',
          300: '#DBA38F',
          400: '#CE8266',
          500: '#8E3A1F',
          600: '#7D3319',
          700: '#6B2D17',
          800: '#592414',
          900: '#471C11',
        },
        'gold': {
          DEFAULT: '#D4AF37',
          light: '#E4C76D',
          dark: '#B8941F',
          50: '#FDFBF3',
          100: '#FAF6E7',
          200: '#F5EDCF',
          300: '#EFE4B7',
          400: '#E9DB9F',
          500: '#D4AF37',
          600: '#C09C1F',
          700: '#A68519',
          800: '#8C6F14',
          900: '#725810',
        },
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'Montserrat', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
};
