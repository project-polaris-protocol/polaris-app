/** @type {import('tailwindcss').Config} */
export default {
	content: ['./components/**/*.{js,vue,ts}', './layouts/**/*.vue', './pages/**/*.vue', './plugins/**/*.{js,ts}', './app.vue', './error.vue'],
	theme: {
		extend: {},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#00517C',
					secondary: '#7d0051',
					accent: '#517d00',
					neutral: '#3d4451',
					'base-100': '#ffffff',
				},
			},
		],
	},
};
