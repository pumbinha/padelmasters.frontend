/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx,astro,jsx}",
		"./components/**/*.{ts,tsx,astro,jsx}",
		"./app/**/*.{ts,tsx,astro,jsx}",
		"./src/**/*.{ts,tsx,astro,jsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			colors: {
				primary: {
					DEFAULT: "hsl(var(--primary))",
					100: "hsl(var(--primary-100))",
					200: "hsl(var(--primary-200))",
					300: "hsl(var(--primary-300))",
					400: "hsl(var(--primary-400))",
					500: "hsl(var(--primary-500))",
					600: "hsl(var(--primary-600))",
					700: "hsl(var(--primary-700))",
					800: "hsl(var(--primary-800))",
					900: "hsl(var(--primary-900))",
					1000: "hsl(var(--primary-1000))",
					foreground: "hsl(var(--primary-foreground))",
				},
				vivid: {
					100: "hsl(var(--vivid-100))",
					200: "hsl(var(--vivid-200))",
					300: "hsl(var(--vivid-300))",
					400: "hsl(var(--vivid-400))",
					500: "hsl(var(--vivid-500))",
					600: "hsl(var(--vivid-600))",
					700: "hsl(var(--vivid-700))",
					800: "hsl(var(--vivid-800))",
					900: "hsl(var(--vivid-900))",
					1000: "hsl(var(--vivid-1000))",
				},
				neutral: {
					100: "hsl(var(--neutral-100))",
					200: "hsl(var(--neutral-200))",
					300: "hsl(var(--neutral-300))",
					400: "hsl(var(--neutral-400))",
					500: "hsl(var(--neutral-500))",
					600: "hsl(var(--neutral-600))",
					700: "hsl(var(--neutral-700))",
					800: "hsl(var(--neutral-800))",
					900: "hsl(var(--neutral-900))",
					1000: "hsl(var(--neutral-1000))",
				},
				supporting: {
					cyan: {
						100: "hsl(var(--supporting-cyan-100))",
						200: "hsl(var(--supporting-cyan-200))",
						300: "hsl(var(--supporting-cyan-300))",
						400: "hsl(var(--supporting-cyan-400))",
						500: "hsl(var(--supporting-cyan-500))",
						600: "hsl(var(--supporting-cyan-600))",
						700: "hsl(var(--supporting-cyan-700))",
						800: "hsl(var(--supporting-cyan-800))",
						900: "hsl(var(--supporting-cyan-900))",
						1000: "hsl(var(--supporting-cyan-1000))",
					},
					red: {
						100: "hsl(var(--supporting-red-100))",
						200: "hsl(var(--supporting-red-200))",
						300: "hsl(var(--supporting-red-300))",
						400: "hsl(var(--supporting-red-400))",
						500: "hsl(var(--supporting-red-500))",
						600: "hsl(var(--supporting-red-600))",
						700: "hsl(var(--supporting-red-700))",
						800: "hsl(var(--supporting-red-800))",
						900: "hsl(var(--supporting-red-900))",
						1000: "hsl(var(--supporting-red-1000))",
					},
				},

				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
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
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [require("tailwindcss-animate"), require("@tailwindcss/forms")],
};
