import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        maru: {
          50:  '#f4f7fb',
          100: '#e7ecf3',
          400: '#5e7aa3',
          600: '#3b5377',
          900: '#172234',
        },
      },
    },
  },
  plugins: [],
};
export default config;
