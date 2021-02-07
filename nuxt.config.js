module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'bigfiveaspectsscale',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  modules: [
    ['nuxt-i18n', {
      lazy: true,
      locales: [
        {
          code: 'en',
          file: 'en.js',
          name: 'english'
        },
        {
          code: 'es',
          file: 'es.js',
          name: 'spanish'
        },
        {
          code: 'fr',
          file: 'fr.js',
          name: 'french'
        },
        {
          code: 'de',
          file: 'de.js',
          name: 'german'
        },
        {
          code: 'it',
          file: 'it.js',
          name: 'italian'
        }
      ],
      langDir: 'locales/',
      defaultLocale: 'en',
      strategy: 'no_prefix',
    }]
  ],

  watchers: {
    webpack: {
      aggregateTimeout: 300,
      poll: 1000
    }
  },
  buildModules: [
    '@nuxtjs/vuetify'
  ],
  vuetify: {
    defaultAssets:{ font: false, icons: false},
    treeShake: true
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  css: [
    "~/assets/main.css"
  ],
  components: true,
  vendor: ["axios"],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

