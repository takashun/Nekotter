module.exports = {
  ssr: true,
  telemetry: false,
  /*
   ** Headers of the page
   */
  head: {
    title: '',
    titleTemplate: '%s | Nekotter',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/scss/app.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~plugins/infiniteloading', ssr: false }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    ['bootstrap-vue/nuxt', { css: false }],
    'nuxt-fontawesome',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['faVideo', 'faUser', 'faExpand', 'faListUl', 'faRandom'],
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['faTwitter'],
      },
    ],
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL:
      process.env.NODE_ENV === 'production'
        ? 'https://app.takashun.dev/'
        : 'http://localhost:3000/',
  },
  pwa: {
    manifest: {
      name: 'Nekotter',
      title: 'Nekotter',
      description: 'Neko is GOD.',
      lang: 'ja',
      theme_color: '#1c2938',
      background_color: '#10171e',
      display: 'fullscreen',
      scope: '/',
      start_url: '/date/latest',
    },
    lang: 'ja',
    theme_color: '#1c2938',
    background_color: '#10171e',
    display: 'fullscreen',
    scope: '/',
    start_url: '/date/latest',
  },
  workbox: {
    skipWaiting: true,
    clientsClaim: true,
    runtimeCaching: [
      {
        urlPattern:
          '/\\/api\\/v1\\/date\\/([1-9][0-9]{3})-(0[1-9]{1}|1[0-2]{1})-(0[1-9]{1}|[1-2]{1}[0-9]{1}|3[0-1]{1})$/',
        handler: 'cacheFirst',
        method: 'GET',
        strategyOptions: {
          cacheExpiration: {
            maxAgeSeconds: 60 * 60 * 24,
          },
          cacheableResponse: {
            statuses: [200],
          },
        },
      },
    ],
  },
  /*
   ** Build configuration
   */
  // router: {
  //   scrollBehavior(to, from, savedPosition) {
  //     return { x: 0, y: 0 }
  //   }
  // },
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
}
