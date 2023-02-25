module.exports = {
  title: "GoVPS Panel",
  base: '/',

  markdown: {
      externalLinks: { target: '_self', rel: false }
  },

  plugins: [
      ['sitemap', {
          hostname: 'https://govps.org',
      }]
  ],

  head: [
      ['link', {
          rel: 'home',
          href: 'https://govps.org',
      }],
      ['link', {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: 'https://govps.org/assets/image/seo/apple-touch-icon.png',
      }],
      ['link', {
          rel: 'icon',
          sizes: '16x16',
          type: 'image/png',
          href: 'https://govps.org/assets/image/seo/favicon-16x16.png',
      }],
      ['link', {
          rel: 'icon',
          sizes: '32x32',
          type: 'image/png',
          href: 'https://govps.org/assets/image/seo/favicon-32x32.png',
      }],
      ['link', {
          rel: 'manifest',
          href: 'https://govps.org/assets/image/seo/site.webmanifest',
      }],
      ['link', {
          rel: 'mask-icon',
          href: 'https://govps.org/assets/image/seo/safari-pinned-tab.svg',
      }],
      ['meta', {
          name: 'msapplication-TileColor',
          content: '#18b69b',
      }],
      ['meta', {
          name: 'msapplication-TileImage',
          content: 'https://govps.org/mstile-144x144.png',
      }],
      ['meta', {
          name: 'theme-color',
          content: '#18b69b',
      }],
      ['link', {
          rel: 'preconnect',
          crossorigin: true,
          href: 'https://fonts.gstatic.com',
      }],
      ['link', {
          href: 'https://fonts.bunny.net/css2?family=Nunito:wght@200;300;400;600;800;900&display=swap',
          rel: 'stylesheet',
      }],
      ['meta', {
          property: 'og:image',
          content: 'https://govps.org/social-share.png',
      }],
      ['meta', {
          property: 'twitter:card',
          content: 'summary_large_image',
      }],
      ['meta', {
          property: 'twitter:image',
          content: 'https://govps.org/social-share.png',
      }],
  ],

  themeConfig: {
      repo: 'govps-org/docs',
      editLinks: true,
      editLinkText: 'Edit this page on GitHub',

      logo: '/assets/img/logo.svg',
      displayAllHeaders: false,
      activeHeaderLinks: false,
      searchPlaceholder: 'Press / to search',
      lastUpdated: 'Last Updated', // string | boolean
      sidebarDepth: 0,

      nav: [
          { text: 'Home', link: 'https://govps.org', target: '_self', rel: false }
      ],

      sidebar: {
          '/1.0/': require('./1.0')
      },
  },
}