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
    locales: {
      // 英文文档目录结构与配置
      '/': {
        selectText: 'Languages',
        label: 'English',
        ariaLabel: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        algolia: {},
        nav: [
          //  { text: 'Nested', link: '/nested/', ariaLabel: 'Nested' }
          {
            text: 'Docs',
            items: [
              {
                text: 'User Guide',
                link: '/userguide/'
              },
              {
                text: 'Product Overview',
                link: '/product-overview/'
              },
              {
                text: 'Product Training',
                link: '/product-training/'
              },
            ]
          },
          {
            text: 'OneProCloud',
            link: 'https://oneprocloud.com'
          }
        ],
        sidebar: {
          '/userguide/': [
            {
              title: 'Checklist',
              collapsable: false,
              children: [
                'checklist/dr-checklist',
              ]
            },
            {
              title: 'Pre Sales',
              collapsable: false,
              children: [
                'presales/hyperbdr-vmware-investigation',
                'presales/hyperbdr-agent-investigation',
                'presales/dr-network-planning-recommendations',
                'presales/hyperbdr-rpo-rto-planning-best-practices',
                'presales/cloud-platform-support-matrix',
                'presales/poc',
              ]
            },
            {
              title: 'DR Prerequisites',
              collapsable: false,
              children: [
                {
                  title: 'Production Site',
                  collapsable: false,
                  children: [
                    'poc/agent-pre-settings',
                    'poc/vmware-pre-settings',
                    'poc/aws-pre-settings',
                  ]
                },
                {
                  title: 'DR Site',
                  collapsable: false,
                  children: [
                    'poc/huaweicloud-pre-settings',
                    'poc/tmcae-pre-settings'
                  ]
                },
                {
                  title: 'HyperBDR',
                  collapsable: false,
                  children: [
                    'poc/hyperbdr-vmware-pre-settings',
                    'poc/hyperbdr-proxy-pre-settings',
                  ]
                }
              ]
            },
            {
              title: 'Failback Prerequisites',
              collapsable: false,
              children: [
                {
                  title: 'Failback Network Requirement',
                  collapsable: false,
                  children: [
                    'poc/failback-network-requirement-huaweicloud',
                    'poc/failback-network-requirement-tmcae',
                  ]
                },
                {
                  title: 'Failback Source',
                  collapsable: false,
                  children: [
                    'poc/failback-agent-pre-settings',

                  ]
                },
                {
                  title: 'Failback Target',
                  collapsable: false,
                  children: [
                    'poc/failback-vmware-pre-settings',
                    'poc/failback-agent-source-pre-settings',
                  ]
                },
                {
                  title: 'HyperBDR',
                  collapsable: false,
                  children: [
                    'poc/failback-hyperbdr-pre-settings',
                  ]
                }
              ]
            },
            {
              title: 'HyperBDR User Manual',
              collapsable: false,
              children: [
                {
                  title: 'Huawei Cloud',
                  collapsable: false,
                  children: [
                    'dr-usage-guide/dr-operations-manual-huaweicloud-object',
                    'dr-usage-guide/dr-operations-manual-huaweicloud-block',
                  ]
                },
                                {
                  title: 'Huawei Cloud Stack 8.2.x/8.3.x',
                  collapsable: false,
                  children: [
                    'dr-usage-guide/dr-operations-manual-hcs8-block',
                  ]
                },
                {
                  title: 'TM CAE',
                  collapsable: false,
                  children: [
                    'dr-usage-guide/dr-operations-manual-tmcae-object',
                  ]
                },
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
          '/product-overview/': [
            {
              title: 'Product Overview',
              collapsable: false,
              children: [
                {
                  title: 'HyperBDR Features Matrix',
                  collapsable: false,
                  children: [
                    'features/features-matrix.md',
                  ]
                },
                {
                  title: 'Compatibility & Limitations',
                  collapsable: false,
                  children: [
                    'limitations/linux-agent.md',
                    'limitations/windows-agent.md',
                    'limitations/vmware-agentless.md',
                    'limitations/openstack-ceph-agentless.md',
                  ]
                },
                {
                  title: 'HyperBDR Operation',
                  collapsable: false,
                  children: [
                    'operation/upgrade-manual',
                  ]
                }
              ],
            }
          ], // end of /product-overview/
          '/product-training/': [
            {
              title: 'Product Training',
              collapsable: false,
              children: [
                {
                  title: 'Training',
                  collapsable: false,
                  children: [
                    'product-overview.md',
                    'scenarios.md',
                    'technical-highlights.md',
                    'project-delivery.md',
                  ]
                }
              ],
            }
          ] // end of /training/
        }
      },
      // 中文文档目录结构与配置
      '/zh/': {
        // 多语言下拉菜单的标题
        selectText: '选择语言',
        // 该语言在下拉菜单中的标签
        label: '简体中文',
        // 编辑链接文字
        editLinkText: '在 GitHub 上编辑此页',
        // Service Worker 的配置
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
          }
        },
        // 当前 locale 的 algolia docsearch 选项
        algolia: {},
        nav: [
          //  { text: '嵌套', link: '/zh/nested/' }
          {
            text: '文档',
            items: [
              {
                text: '用户指南',
                link: '/zh/userguide/'
              },
              //{
              //  text: 'Product Overview',
              //  link: '/product-overview/'
              //},
            ]
          },
          {
            text: 'OneProCloud',
            link: 'https://oneprocloud.com'
          }
        ],
        sidebar: {
          '/zh/userguide/': [
            {
              title: '检查清单',
              collapsable: false,
              children: [
                'checklist/dr-checklist',
              ]
            },
            {
              title: '售前',
              collapsable: false,
              children: [
                'presales/hyperbdr-vmware-investigation',
                'presales/hyperbdr-agent-investigation',
                'presales/dr-network-planning-recommendations',
                'presales/hyperbdr-rpo-rto-planning-best-practices',
                'presales/cloud-platform-support-matrix',
              ]
            },
            {
              title: '云容灾前置条件',
              collapsable: false,
              children: [
                {
                  title: '生产站点',
                  collapsable: false,
                  children: [
                    'poc/agent-pre-settings',
                    'poc/vmware-pre-settings',
                  ]
                },
                {
                  title: '容灾站点',
                  collapsable: false,
                  children: [
                    'poc/huaweicloud-pre-settings',
                  ]
                },
                {
                  title: 'HyperBDR容灾平台',
                  collapsable: false,
                  children: [
                    'poc/hyperbdr-vmware-pre-settings',
                    'poc/hyperbdr-proxy-pre-settings',
                  ]
                }
              ]
            },
            {
              title: '回切前置条件',
              collapsable: false,
              children: [
                {
                  title: '回切网络需求',
                  collapsable: false,
                  children: [
                    'poc/failback-network-requirement-huaweicloud',
                  ]
                },
                {
                  title: '回切源端',
                  collapsable: false,
                  children: [
                    'poc/failback-agent-pre-settings',

                  ]
                },
                {
                  title: '回切目标端',
                  collapsable: false,
                  children: [
                    'poc/failback-vmware-pre-settings',
                    'poc/failback-agent-source-pre-settings',
                  ]
                },
                {
                  title: 'HyperBDR容灾平台',
                  collapsable: false,
                  children: [
                    'poc/failback-hyperbdr-pre-settings',
                  ]
                }
              ]
            },
            {
              title: 'HyperBDR 用户手册',
              collapsable: false,
              children: [
                'dr-usage-guide/dr-operations-manual-huaweicloud',
              ]
            },
            {
              title: 'FAQ常见问题解答',
              collapsable: false,
              children: [
                'faq.md',
              ]
            }
          ],
        }
      }
    },

  },
  locales: {
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
          clickModeDefaultOpen: false,
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
