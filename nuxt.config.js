export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'DestinyArena',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading: { color: '#fff' },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@assets/scss/index.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    '@nuxtjs/recaptcha',
    ['nuxt-vuex-localstorage', {
      localStorage: ['auth'],
      sessionStorage: ['auth']
    }],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
      prefix: '/api',
      port: '443',
      host: 'destinyarena.app',
      https: true,
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  recaptcha: {
    size: 'normal',
    siteKey: '6LcIWdMUAAAAAEO8tZI7KCdQOKBup1JWIPHCsUgz',
    version: 2
  },

  sentry: {
    dsn: "https://a8173b6bdf9446a29752775735d811f2@o471645.ingest.sentry.io/5503927",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend (config, ctx) {
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      })
    }
  } 
}
