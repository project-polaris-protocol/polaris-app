/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./components/**/*.{js,vue,ts}', './layouts/**/*.vue', './pages/**/*.vue', './plugins/**/*.{js,ts}', './app.vue', './error.vue'],
	theme: {
		extend: {},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#a991f7',
					secondary: '#f6d860',
					accent: '#37cdbe',
					neutral: '#3d4451',
					'base-100': '#ffffff',
				},
			},
			'light',
			'dark',
			'cupcake',
		],
	},
};
