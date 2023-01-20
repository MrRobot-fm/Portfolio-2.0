/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        blueRadialGradient: 'radial-gradient(var(--gradient-stops))',
        radialModalGradient: 'radial-gradient(var(--radial-modal-stops))'
      }
    },
    screens: {
      xxs: '280px',
      xs: '360px',
      ss: '500px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1240px',
      xxl: '1536px'
    }
  },
  plugins: []
};
