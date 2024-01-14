/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#518581',
          100: '#DCE7E6',
          200: '#C5D6D5',
          300: '#A8C2C0',
          400: '#8BAEAB',
          500: '#6E9996',
        },
        secondary: {
          DEFAULT: '#FFB23F',
          100: '#FFF0D9',
          200: '#FFE5BF',
          300: '#FFD89F',
          400: '#FFCC7F',
          500: '#FFBF5F',
        },
        title: {
          DEFAULT: '#151411',
          100: '#D0D0CF',
          200: '#B1B1B0',
          300: '#8A8988',
          400: '#636260',
          500: '#3C3B39',
        },
        base: {
          DEFAULT: '#AFADB5',
          100: '#EFEFF0',
          200: '#E4E4E6',
          300: '#D7D6DA',
          400: '#CAC8CE',
          500: '#BCBBC1',
        },
        light: "#F3F3F3",
      },
      fontSize: {
        h1: ['64px', {
          lineHeight: '130%',
          fontWeight: 'bold',
        }],
        h2: ['44px', {
          lineHeight: '130%',
          fontWeight: 'bold',
        }],
        h3: ['24px', {
          lineHeight: '130%',
          fontWeight: 'bold',
        }],
        h4: ['20px', {
          lineHeight: '130%',
          fontWeight: 'bold',
        }],
        h5: ['18px', {
          lineHeight: '130%',
          fontWeight: 'bold',
        }],
        h6: ['16px', {
          lineHeight: '130%',
          fontWeight: 'bold',
        }],
        p1: ['18px', {
          lineHeight: '180%',
          fontWeight: 'medium',
        }],
        p2: ['16px', {
          lineHeight: '180%',
          fontWeight: 'medium',
        }],
        p3: ['14px', {
          lineHeight: '180%',
          fontWeight: 'medium',
        }],
        p4: ['12px', {
          lineHeight: '180%',
          fontWeight: 'medium',
        }],
      },
      backgroundImage: {
        'valid': "url('/icons/valid.svg')",
        'not-valid': "url('/icons/notvalid.svg')",
      },
      backgroundSize: {
        'input-vaild': 'calc(.85em + 0.375rem) calc(.85em + 0.375rem)',
        'input-notvaild': 'calc(1em + 0.375rem) calc(1em + 0.375rem)',
      },
      backgroundPosition: {
        'input-icon': 'right calc(0.375em + 0.1875rem) center',
      }

    },
    container: {
      center: true,
      padding: {
        DEFAULT: '.6rem',
        sm: '1rem',
        lg: '2rem',
      },

    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'class', // only generate classes
    }),
  ],
}
