
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Destiny Arena',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Registration website for Destiny Arena' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.jpg' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@assets/scss/index.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/sentry',
    // Doc: https://axios.nuxtjs.org/usage
    ['@nuxtjs/axios', {
      prefix: '/api',
      port: '443',
      host: 'destinyarena.app',
      https: true
    }],

    ['nuxt-vuex-localstorage', {
      localStorage: ['auth'],
      sessionStorage: ['auth']
    }],

    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // Doc: https://github.com/nuxt-community/recaptcha-module
    ['@nuxtjs/recaptcha', {
      size: 'normal',
      siteKey: '6LcIWdMUAAAAAEO8tZI7KCdQOKBup1JWIPHCsUgz',
      version: 2
    }]
  ],
  sentry: {
    dsn: "https://a8173b6bdf9446a29752775735d811f2@o471645.ingest.sentry.io/5503927",

  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
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
