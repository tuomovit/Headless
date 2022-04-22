const main_base_URL =  'https://tuomovitikainen.fi';

export default {
  ssr: false, // Disable Server Side rendering
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Headless WP',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'description' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'preconnect', href: 'https://www.tuomovitikainen.fi', crossorigin: true },
    ],
    script: [
      {
        src: "<meta name='google-site-verification' content='T6AzUzWefm1nfXnQ2fboOqgsGOAk6WqEpjBOoauBPbE' />'",
      },
    ],
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
    hostname: main_base_URL,
    routes: [
      '/esimerkkisivu',
      '/testailusivu',
    ]
  },
  env: {
    main_base_URL
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