export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Server Side Rendering',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'description' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        name: 'google-site-verification',
        content: 'T6AzUzWefm1nfXnQ2fboOqgsGOAk6WqEpjBOoauBPbE'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://www.tuomovitikainen.fi', crossorigin: true },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/apollo',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
  ],
  sitemap: {
    routes: [
      '/esimerkkisivu',
      '/testailusivu',
    ]
  },
  robots: [
    {
      UserAgent: '*',
      Disallow: '/users/'
    }
  ],
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint:
        process.env.NODE_ENV === 'dev'
        ? 'https://www.tuomovitikainen.fi/puhdas/graphql'
        : 'https://www.tuomovitikainen.fi/puhdas/graphql'
      }
    }
  },


  
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
