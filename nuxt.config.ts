// TODO: Fix this in CI
// import './env'
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  app: {
    head: {
      title: 'StursbyKit'
    }
  },
  modules: ['@nuxthub/core', '@nuxt/ui-pro'],
  hub: {
    database: true,
    kv: true
  },
  // runtimeConfig: {
  //   public: {
  //     auth: {
  //       redirectUserTo: '/dashboard',
  //       redirectGuestTo: '/login'
  //     }
  //   }
  // },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()]
  },
  colorMode: {
    preference: 'system'
  },
  future: {
    compatibilityVersion: 4
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true }
})
