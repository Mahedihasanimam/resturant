/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      cinzel:["'Cinzel', serif"]
    },

    extend: {
      backgroundImage: {
        'mybg': "url('/src/assets/home/featured.jpg')",
        'mybg2':"url('/src/assets/home/chef-service.jpg')",
        'menubanner':"url('/src/assets/menu/banner3.jpg')"

      }
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui'),
  ],
}

