/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.jsx'],
  theme: {
    extend: {
      screens: {
        'ms': '320px',

        'mm': '375px',

        'ml': '430px',

        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1440px',
        // => @media (min-width: 1536px) { ... }
        '3xl': '1700px',
      },
      backgroundImage: {
        godfather: "url('/src/vetores/fundoGodfather.jpg')",
      },
      fontFamily: {
        sans: 'Poppins, sans-serif',
      },
      colors: {
        purple: {
          600: '#7C84BC',
        },
        blue: {
          500: '#1B9DF0',
          600: '#345CF4',
          800: '#040C34',
        },
        gray: {
          100: '#E1E1E6',
          200: '#C4C4CC',
          300: '#8D8D99',
          400: '#323238',
          500: '#343C5C',
          600: '#2F2440',
          700: '#262428',
          800: '#1B1A1D',
          900: '#09090A',
        }
      },
      letterSpacing: {
        widest: '.3em',
      },
      keyframes: {
        macbook: {
          '0%': { width: '0%', height: '0%'},
          '100%': { width: '100%', height: '100%'},
        },
        borderBottom: {
          '0%': { width: '0%' },
          '100%': { width: '100%' }
        }
      },
      animation: {
        macbook: 'macbook 1s linear forwards',
        animateBorder: 'borderBottom 0.5s linear forwards'
      }
    },
  },
  plugins: [],
}
