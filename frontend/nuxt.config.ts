// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },

  css: [
    '~/assets/scss/app.scss'
  ],

  modules: [
    'nuxt-auth-sanctum',
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
})
