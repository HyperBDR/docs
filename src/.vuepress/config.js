const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'HyperBDR Documentation',
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
    lastUpdated: false,
    nav: [
      {
        text: 'User Guide',
        link: '/userguide/'
      },
      {
        text: 'OneProCloud',
        link: 'https://oneprocloud.com'
      }
    ],
    sidebar: {
      '/userguide/': [
        {
          title: 'Pre-Sales Guideline',
          collapsable: false,
          children: [
            'presales/hyperbdr-vmware-investigation',
          ]
        },
        {
          title: 'POC Guideline',
          collapsable: false,
          children: [
            'poc/vmware-permission-configuration',
          ]
        }
      ],
    }
  },

  /*locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
      title: 'HyperBDR Documentation',
      description: 'Cloud Native DR Product - HyperBDR'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'HyperBDR文档中心',
      description: 'HyperBDR云原生容灾产品'
    }
  },*/

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ],
}
