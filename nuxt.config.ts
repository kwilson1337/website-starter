// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true }, 
	css: [
		'~/assets/styles/default.scss' 
	],
	vite: {
    css: {
      preprocessorOptions: {
        scss: {          
          additionalData: '@use "~/assets/styles/index.scss" as *;'
        }
      }
    }
  }
})
