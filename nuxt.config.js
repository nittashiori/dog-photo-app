export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,
  srcDir: 'src/',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'dog-photo-app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'dog-photo-app',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://dog-photo-app.netlify.app/',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'dog photo app',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'DogAPIを使用して犬種ごとに画像一覧を表示するサイトです。',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content:
          'https://dog-photo-app.netlify.app/images/ogp/common.png',
      },
      {
        hid: 'twitter:card',
        property: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/images/favicon/favicon.ico',
      },
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/images/favicon/favicon.svg',
      },
      {
        rel: 'icon alternate',
        type: 'image/png',
        href: '/images/favicon/favicon.png',
      },
      {
        rel: 'apple-touch-icon',
        size: '180x180',
        href: '/images/apple-touch-icon/common.png',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~plugins/localStorage', ssr: false }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/bulma',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
