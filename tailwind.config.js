/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/flowbite-react/**/*.js",
    './pages/**/*.{ts,tsx}', 
    './public/**/*.html',
  ],
  theme: {
    colors: {
      'nav-gray': '#565656',
      'agGreen': '#368454',
      'bgGray': '#6D6D6D',
      'lightGreen': '#BDD69E',
      'darkGreen': '#365341',
      'darkerGreen':'#05712E',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
