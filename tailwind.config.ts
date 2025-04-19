/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    // Override warna default di level atas
    textColor: {
      DEFAULT: '#cacaca', // Ini akan mengubah warna teks default
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'inter placeholder', 'sans-serif'],
        caveat: ['Caveat', 'sans-serif'],
      },
      fontSize: {
        base: '18px',
      },
      colors: {
        white: {
          DEFAULT: '#cacaca',
          full: '#cacaca',
        },
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false, // This ensures Tailwind doesn't conflict with Vuetify
  },
}