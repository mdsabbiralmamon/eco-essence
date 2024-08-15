import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: [
      {
        ecoessence: {
          'primary': '#6bb53e',
          'primary-focus': '#5aa734', // Slightly darker shade for focus state
          'primary-content': '#ffffff', // Text color on primary elements
          'secondary': '#d3f9d8', // Soft complementary color
          'secondary-focus': '#b8e8bb',
          'secondary-content': '#1a1a1a', // Text color on secondary elements
          'accent': '#3bb5a5', // Accent color for additional highlights
          'neutral': '#3d4451', // Neutral color for backgrounds or borders
          'base-100': '#ffffff', // Base background color
          'info': '#2094f3', // Info color
          'success': '#009485', // Success color
          'warning': '#ff9900', // Warning color
          'error': '#ff5724', // Error color
        },
      },
    ],
  },
}
