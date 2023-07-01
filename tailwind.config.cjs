const { blue } = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
    './node_modules/flowbite-svelte-blocks/**/*.{html,js,svelte,ts}'
  ],
  plugins: [
    require('flowbite/plugin'),
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
       // flowbite-svelte
       primary: blue,
      }
    },
  },
}

