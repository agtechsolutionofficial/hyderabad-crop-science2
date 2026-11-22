/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#174D32',
          dark: '#0F3422',
          light: '#1F5E3E',
          surface: '#123C27',
        },
        secondary: {
          green: '#2F6B49',
          light: '#3C855D',
        },
        sage: {
          DEFAULT: '#8FAF98',
          light: '#B2CBBB',
          muted: '#CADBD0',
        },
        bg: {
          ivory: '#F5F3EC',
          soft: '#E9EFE7',
          paper: '#FAF9F5',
        },
        charcoal: {
          DEFAULT: '#24312C',
          dark: '#1A2320',
          light: '#2D3D37',
        },
        text: {
          primary: '#34423B',
          muted: '#6D7B73',
          light: '#8C9B93',
        },
        border: {
          DEFAULT: '#D7DED7',
          soft: '#E3E9E3',
        },
        gold: {
          DEFAULT: '#C99432',
          soft: '#E9D7AA',
          light: '#F5EBD0',
          dark: '#A67722',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Manrope"', 'sans-serif'],
        sans: ['"Inter"', '"DM Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft-sm': '0 2px 8px -2px rgba(23, 77, 50, 0.06)',
        'soft': '0 8px 30px -4px rgba(23, 77, 50, 0.08)',
        'soft-lg': '0 20px 40px -10px rgba(23, 77, 50, 0.12)',
        'gold-glow': '0 0 25px -5px rgba(201, 148, 50, 0.25)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
