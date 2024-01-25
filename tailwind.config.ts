import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        innerDown: "inset -2px 2px 5px 0px rgb(0 0 0 / 0.2)",
      },
      height: {
        nav: "48px",
      },
      colors: {
        main: "#FAC69F",
        warning: "#FFF78A",
        forbiden: "#FF5966",
        info: "#78C5FF",
        check: "#48EE8F",
        delay: "7D87FF",
        main_white: "#FEF1E8",
        text_dark: "#565656",
        dark: "#100701",
        sub: "#FAAF9F",
        bg: "#FDE7D7",
        gray: "#D1D1D1",
        dark_gray: "#ABABAB",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
export default config;
