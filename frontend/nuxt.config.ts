import Aura from '@primevue/themes/aura';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },

  css: [
    'primeicons/primeicons.css',
    '~/assets/scss/app.scss',
    '~/assets/scss/styles.scss'
  ],

  modules: [
    'nuxt-auth-sanctum',
    '@primevue/nuxt-module',
    '@nuxtjs/tailwindcss',
  ],

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  sanctum: {
    baseUrl: 'http://localhost',
    endpoints: {
      login: 'api/v1/auth/login',
      user: 'api/v1/auth/user',
      logout: 'api/v1/auth/logout'
    },
    redirect: {
      onLogout: '/login'
    }
  },

  primevue: {
    options: {
      ripple: true,
      inputVariant: 'filled',
      theme: {
          preset: Aura,
          options: {
              prefix: 'p',
              darkModeSelector: 'light',
              cssLayer: false
          }
      }
  }
  },
})
