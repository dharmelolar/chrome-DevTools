const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'DevTools for Beginners',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    smoothScroll: true,
    lastUpdated: 'Last Updated',
    searchPlaceholder: 'Search...',
    backToTop: true,
    nav: [
      {
        text: 'Guide',
        link: '/guide/',

      },
      // {
      //   text: 'Config',
      //   link: '/config/'
      // },
      {
        text: 'Github',
        link: 'https://github.com/dharmelolar/chrome-DevTools.git'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Chrome Browser',
          collapsable: false,
          children: [
            '','device-mode','workspaces',
            'elements','console','command-palette','design-mode','debug-javascript',
          ]
        },
      ],
      
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
