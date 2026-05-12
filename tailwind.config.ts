import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff1f2',
          500: '#e11d48', // Reddish pink
          600: '#be123c',
        },
        accent: {
          300: '#fde047', // Pale yellow
          400: '#facc15',
        },
      },
    },
  },
  plugins: [],
};
export default config;