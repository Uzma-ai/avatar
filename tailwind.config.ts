import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		  colors: {
			primarycolor: "#F3F3F3",
			secondarycolor: "#5D8BE5",
			legendText:'#F7F7F7',
			inputbackground: "#E9EEF6",
			blackcolor: "#1F1F1F",
			mediumWhite: "#FFFFFF4D",
			lightWhite: "#ffffff92",
			blurwhite:"#FFFFFF99",
			lightgray: "#e1ecee",
			textMedium:"#A1A1A1",
			mediumgray: "#D4D4D4",
			mediumgray2: "#929292",
			mediumgray3:"#D9D9D9",
			whitecolor: "#fefefe",
			iconBackground: "#E9EEF680",
			dropdownBackground: "#D8D8D84C",
			borderColor1:"#79747E",
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
			dropdownlightgray:'#D8D8D84D',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
		  },
		fontFamily: {
        figtree: ['Figtree', 'sans-serif'],
		  },
		  backgroundImage: {
			 'primary-gradient': 'linear-gradient(171.9deg, #5182E3 0%, #FFFFFF 136.83%)',
		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
