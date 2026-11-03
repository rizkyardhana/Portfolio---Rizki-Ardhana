/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lavender: {
          50: '#F2F9F5',
          100: '#E4F3EA',
          200: '#C7E7D5',
          300: '#99D5B3',
          400: '#52B67E',
          500: '#1F9959',
          600: '#0D5C3A', // Official HASANI Emerald Green
          700: '#0A4D30',
          800: '#083F27',
          900: '#072C1C',
          950: '#041B11', // Deep Forest Charcoal
        },
        herbal: {
          50: '#F2F9F5',
          100: '#E4F3EA',
          200: '#C7E7D5',
          300: '#99D5B3',
          400: '#52B67E',
          500: '#1F9959',
          600: '#0D5C3A',
          700: '#0A4D30',
          800: '#083F27',
          900: '#072C1C',
          950: '#041B11',
        },
        gold: {
          50: '#FDFBF5',
          100: '#FBF5E6',
          200: '#F6E8BF',
          300: '#EFD58E',
          400: '#DCB74B',
          500: '#C59B27', // Official HASANI Royal Gold
          600: '#A9811C',
          700: '#876414',
          800: '#674B11',
          900: '#4A340D',
        },
        brand: {
          dark: '#081C13',
          darker: '#04150D',
          deep: '#0F281E',
          soft: '#F4F9F6',
          border: '#DCE8E1',
          accent: '#C59B27',
          gold: '#C59B27',
          pink: '#FBF5E6'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'Poppins', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'Manrope', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(13, 92, 58, 0.08)',
        'elevated': '0 12px 30px -4px rgba(15, 40, 30, 0.12)',
        'card': '0 2px 12px -1px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.03)',
        'glow': '0 0 35px -5px rgba(13, 92, 58, 0.35)',
      }
    },
  },
  plugins: [],
}
