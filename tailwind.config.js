import tailwindcssAnimate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
const config = {
	darkMode: ['class'],
	content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './presentation/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			textShadow: {
				DEFAULT: '2px 2px 6px rgba(0,0,0,0.25)',
				sm: '1px 1px 3px rgba(0,0,0,0.20)',
				md: '3px 3px 8px rgba(0,0,0,0.30)',
				lg: '4px 4px 12px rgba(0,0,0,0.35)',
				primary: '2px 2px 6px #fbac3c',
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				primary: {
					100: '#fff3e0',
					200: '#ffe0b2',
					300: '#ffcc80',
					400: '#fbac3c', // color principal
					500: '#fbac3c',
					600: '#e09a34',
					700: '#b97c29',
					800: '#8c5c1e',
					900: '#5c3912',
					DEFAULT: '#fbac3c',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					1: 'hsl(var(--chart-1))',
					2: 'hsl(var(--chart-2))',
					3: 'hsl(var(--chart-3))',
					4: 'hsl(var(--chart-4))',
					5: 'hsl(var(--chart-5))',
				},
			},
		},
	},
	plugins: [
		tailwindcssAnimate,
		function ({ addUtilities, theme }) {
			const textShadow = theme('textShadow');
			const newUtilities = {};
			for (const key in textShadow) {
				const className = key === 'DEFAULT' ? '.text-shadow' : `.text-shadow-${key}`;
				newUtilities[className] = { textShadow: textShadow[key] };
			}
			addUtilities(newUtilities, ['responsive']);
		},
	],
};

export default config;
