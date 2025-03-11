/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html", // Include index.html
    "./src/**/*.{js,ts,jsx,tsx}", // Include all files in src directory
    "./app/**/*.{js,ts,jsx,tsx}", // Include all files in app directory
    "./pages/**/*.{js,ts,jsx,tsx}", // Include all files in pages directory
    "./components/**/*.{js,ts,jsx,tsx}", // Include all files in components directory
    "*.{js,ts,jsx,tsx,mdx}", // Include all files in the root directory
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        rajdhani: ["Rajdhani", "sans-serif"],
      },
      colors: {
        void: "#0a0a0a",
        "neon-pink": "#FF00FF",
        "electric-blue": "#00F3FF",
        "hacker-green": "#00FF00",
        "neon-purple": "#6A00FF",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        dark: "#2E1E8A",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "pulse-neon": "pulse-neon 2s infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        "pulse-neon": {
          "0%, 100%": {
            boxShadow:
              "0 0 10px var(--color-neon-pink), 0 0 20px var(--color-neon-pink)",
          },
          "50%": {
            boxShadow:
              "0 0 20px var(--color-neon-pink), 0 0 40px var(--color-neon-pink)",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
