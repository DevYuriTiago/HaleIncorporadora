/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6B8E4E', // Verde HALE
          light: '#7fa05e',
          dark: '#577240',
        },
        secondary: {
          DEFAULT: '#F47B20', // Laranja HALE
          light: '#ff8c33',
          dark: '#d66a1a',
        },
        text: {
          DEFAULT: '#2D3748', // Cinza escuro para texto principal
          light: '#4A5568', // Cinza médio para texto secundário
          dark: '#1A202C', // Cinza muito escuro para títulos
        }
      },
      backgroundColor: {
        base: '#708948', // Verde HALE como cor de fundo base
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
};