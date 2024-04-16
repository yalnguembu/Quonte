// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/seo',
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt',
    '@pinia/nuxt',
    'nuxt-og-image',
    '@nuxtjs/i18n'
  ],
  tailwindcss:{
    darkMode: 'selector',
    theme: {
      extend: {
        animation: {
          'animate-ping-slow': 'ping 3s linear infinite',
        }
      }
    }
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
  site: {
    url: 'https://infinite-note.com',
    name: 'Infinite Notes',
    description: 'Your all-in-one note-taking app, letting you capture everything from ideas to grocery lists. Take notes on the go and access them from any device.',
  },
  i18n: {
    vueI18n: './i18n.config.ts',
  },
  seo: {
    redirectToCanonicalSiteUrl: true
  }
})