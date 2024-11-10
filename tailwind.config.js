/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
			},
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				customGray: '#16181c', // Custom color
				purpleMain: '#5950b9',
				limeGreen: '#63ea71',
				searchBg: '#1b1b1b',
				modalBg: '#131313',
			},
		},
	},
	plugins: [],
};
