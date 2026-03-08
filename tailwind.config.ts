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
          50: '#e6f6f5',
          100: '#bce3e2',
          500: '#04b8b3',
          700: '#038a86',
          900: '#03A6A1',
        },
        accent: {
          100: '#FFE3BB',
          400: '#FFA673',
          500: '#FF4F0F',
          600: '#d93d07',
        },
        bg: {
          base: '#fbfdfd',
          surface: '#ffffff',
        },
        text: {
          main: '#013130',
          muted: '#025250',
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
