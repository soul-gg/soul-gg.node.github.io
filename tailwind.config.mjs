// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', 
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          DEFAULT: '#00bcd4', // Existing cyan color
          500: '#00c9ff',    // Vibrant cyan
          600: '#00b8e6',    // Slightly darker cyan
        },
        purple: {
          600: '#6a0dad',    // Existing dark purple
          500: '#9b4f96',    // Existing lighter purple
          400: '#a855f7',    // New light purple for advanced styling
        },
      },
      fontFamily: {
        modern: ['Poppins', 'sans-serif'],   // High-tech font
        digital: ['Orbitron', 'sans-serif'], // Digital font for "Node"
      },
      animation: {
        fadeIn: 'fadeIn 1.5s ease-out forwards',
        slideIn: 'slideIn 1.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideIn: {
          '0%': {  opacity: 0 },
          '100%': {opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};