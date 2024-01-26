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

  markdown: {
    lineNumbers: true
  },

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'HyperBDR/docs',
    editLinks: true,
    docsDir: 'src',
    editLinkText: '',
    docsBranch: 'main',
    lastUpdated: true,
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
            'presales/hyperbdr-agent-investigation',
            'presales/dr-network-planning-recommendations',
            'presales/hyperbdr-rpo-rto-planning-best-practices',
          ]
        },
        {
          title: 'POC Checklist',
          collapsable: false,
          children: [
            'checklist/dr-checklist'
          ]
        },
        {
          title: 'POC Guideline',
          collapsable: false,
          children: [
            'poc/agent-pre-settings',
            'poc/vmware-pre-settings',
            'poc/huaweicloud-pre-settings',
            'poc/hyperbdr-proxy-pre-settings',
            'poc/hyperbdr-agent-pre-settings',
            'poc/hyperbdr-vmware-pre-settings',
            'poc/failback-agent-pre-settings',
            'poc/failback-hyperbdr-pre-settings',
            'poc/failback-vmware-pre-settings',
            'poc/failback-agent-source-pre-settings'
          ]
        },
        {
          title: 'HyperBDR Usage Guide',
          collapsable: false,
          children: [
            'dr-usage-guide/dr-operations-manual-huaweicloud'
          ]
        },
        {
          title: 'FAQ',
          collapsable: false,
          children: [
            'faq.md',
          ]
        }
      ],
    }
  },

  /*locales: {
    // 键名是该语言所属的子路径
            'poc/huaweicloud-pre-settings',
            'poc/hyperbdr-pre-settings'
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
    [
      'vuepress-plugin-right-anchor',
      {
        showDepth: 6,
        ignore: [
        ],
        expand: {
          trigger: 'click',
          clickModeDefaultOpen: true,
        },
        customClass: 'vuepress-plugin-right-anchor-custom-class',
        disableGlobalUI: false,
      },
    ],
    [
        'vuepress-plugin-baidu-tongji-analytics',
        {
            key: '7ad07e0051d3efdabaf046d43f3bed8d'
        }
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'right',
        defaultTitle: '',
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'theorem',
        before: info => `<div class="theorem"><p class="title">${info}</p>`,
        after: '</div>',
      },
    ],

    // this is how VuePress Default Theme use this plugin
    [
      'vuepress-plugin-container',
      {
        type: 'tip',
        defaultTitle: {
          '/': 'TIP',
          '/zh/': '提示',
        },
      },
    ],
  ],
}
