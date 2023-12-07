/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
],
  theme: {
    extend: {
      colors: {
        animal_crossing_brown: '#ceba95',
        animal_crossing_sky: '#a4eaf6',
        animal_crossing_sea: '#84d7df',
        animal_crossing_sage: '#c4d9a9',
        animal_crossing_tan: '#f6eee3',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}


