/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        white: '#FFFFFF',
        dark: '#070724',
        'light-grey': '#838391',
        grey: '#38384F',
        'light-blue': '#419EBB',
        blue: '#2d68f0',
        'light-orange': '#EDA249',
        orange: '#CD5120',
        purple: '#6f2ed6',
        'light-red': '#D14C32',
        red: '#D83A34',
        green: '#1ec2a4',
      },
      fontSize: {
        logo: [
          '1.75rem',
          {
            letterSpacing: '-0.065625rem',
            fontWeight: '500',
          },
        ],
        h1: [
          '5rem',
          {
            lineHeight: '6.43rem',
            fontWeight: '500',
          },
        ],
        h2: [
          '2.5rem',
          {
            lineHeight: '3.25',
            letterSpacing: '-0.09rem',
            fontWeight: '500',
          },
        ],
        h3: [
          '0.75rem',
          {
            lineHeight: '1.56rem',
            letterSpacing: '+0.16rem',
            fontWeight: '700',
          },
        ],
        h4: [
          '0.6875rem',
          {
            lineHeight: '1.56rem',
            letterSpacing: '+0.06rem',
            fontWeight: '700',
          },
        ],
        body: [
          '0.875rem',
          {
            lineHeight: '1.56rem',
            fontWeight: '400',
          },
        ],
        navbar: [
          '0.938rem',
          {
            fontWeight: '700',
            lineHeight: '1.563rem',
            letterSpacing: '0.085rem',
          },
        ],
      },
      fontFamily: {
        antonio: ['var(--font-antonio)'],
        spartan: ['var(--font-spartan)'],
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'fade-out': {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.4s ease-in-out',
        'fade-out': 'fade-out 0.4s ease-in-out',
      },
    },
  },
  plugins: [],
}
