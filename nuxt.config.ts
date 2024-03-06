// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: true,
	target: 'server',
	nitro: {
		prerender: {
			failOnError: false,
		},
	},
	devtools: { enabled: true },
	css: ['~/assets/css/main.css'],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	modules: ['@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt'],
	pinia: {
		storesDirs: ['./stores/**'],
	},
});
