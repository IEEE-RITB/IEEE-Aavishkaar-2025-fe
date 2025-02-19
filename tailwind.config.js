/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
      },
      colors: {
        void: '#0a0a0a',
        'neon-pink': '#FF00FF',
        'electric-blue': '#00F3FF',
        'hacker-green': '#00FF00',
        'neon-purple': '#6A00FF',
      },
      animation: {
        'pulse-neon': 'pulse-neon 2s infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'pulse-neon': {
          '0%, 100%': {
            boxShadow: '0 0 10px var(--color-neon-pink), 0 0 20px var(--color-neon-pink)',
          },
          '50%': {
            boxShadow: '0 0 20px var(--color-neon-pink), 0 0 40px var(--color-neon-pink)',
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};