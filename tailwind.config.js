// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair-display': ['"Playfair Display"', 'serif'],
        // You might need to add other fonts here if you're using them
      },
      keyframes: {
        'bounce-in-down': {
          '0%, 60%, 75%, 90%, 100%': {
            '-webkit-transition-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            'transition-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
          },
          '0%': {
            opacity: '0',
            '-webkit-transform': 'translate3d(0, -3000px, 0) scaleY(3)',
            'transform': 'translate3d(0, -3000px, 0) scaleY(3)',
          },
          '60%': {
            opacity: '1',
            '-webkit-transform': 'translate3d(0, 25px, 0) scaleY(0.9)',
            'transform': 'translate3d(0, 25px, 0) scaleY(0.9)',
          },
          '75%': {
            '-webkit-transform': 'translate3d(0, -10px, 0) scaleY(0.95)',
            'transform': 'translate3d(0, -10px, 0) scaleY(0.95)',
          },
          '90%': {
            '-webkit-transform': 'translate3d(0, 5px, 0) scaleY(0.98)',
            'transform': 'translate3d(0, 5px, 0) scaleY(0.98)',
          },
          '100%': {
            '-webkit-transform': 'translate3d(0, 0, 0)',
            'transform': 'translate3d(0, 0, 0)',
          },
        },
        'fade-in-up': {
            '0%': { opacity: '0', transform: 'translateY(20px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        // Add existing animations if you have them, e.g., for animate-fade-in
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'bounce-in-down': 'bounce-in-down 1s ease-out',
        'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
        'fade-in': 'fade-in 1s ease-out forwards', // Assuming you already had this
        // Make sure your existing animate-spin is already here or add it
        'spin': 'spin 1s linear infinite',
      },
    },
  },
  plugins: [],
}
