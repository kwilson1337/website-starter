// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },
	nitro: {
		prerender: {
			crawlLinks: true,
			routes: ['/']
		}
	},
	
	app: {
		head: {
			title: 'Deeply Designs',
			htmlAttrs: {
				lang: 'en',
			},
			link: [
				{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			],
		}
	},
	css: [
		'~/assets/styles/index.scss'
	],

	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "~/assets/styles/_global.scss" as *;'
				}
			}
		}
	},

	modules: ['nuxt-mdi', '@nuxt/eslint', 'nuxt-schema-org']
})