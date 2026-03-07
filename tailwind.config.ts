import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f4f6f8',
          100: '#e3e8ef',
          500: '#3b5998',
          700: '#2c3e50',
          900: '#1a252f',
        },
        accent: {
          100: '#e0f2fe',
          500: '#0ea5e9',
          600: '#0284c7',
        },
        bg: {
          base: '#fafafa',
          surface: '#ffffff',
        },
        text: {
          main: '#1e293b',
          muted: '#64748b',
        }
      },
      spacing: {
        'section': '6rem',
        'section-sm': '4rem',
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 10px 30px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [],
};

export default config;
