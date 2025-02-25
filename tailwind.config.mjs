/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#2e266d',
        muted: '#737373',
        border: '#e5e5e5',
        background: '#eed202',
      },
      fontFamily: {
        serif: ['var(--font-roboto-serif)'],
        mono: ['var(--font-roboto-mono)']
      },
    },
  },
  plugins: [],
};

// yellow: 2e266d
// secondary:#ef4444
