/**
 * Homepage sections configuration (Chinese)
 * This file defines the sections and items displayed on the Chinese homepage.
 * You can easily add, remove, or modify sections and items here without editing the Vue component.
 * 
 * Icon usage:
 * - Use FontAwesome icon class names directly (e.g., "fa-solid fa-cube", "fa-solid fa-download")
 * - Available icons: https://fontawesome.com/icons
 */

import type { HomepageSection } from './homepage.config.js'

export const homepageSectionsZh: HomepageSection[] = [
  {
    title: "核心平台",
    items: [
      { 
        title: "产品概览", 
        desc: "HyperMotion & HyperBDR 的核心概念。", 
        link: "/zh/product-overview/", 
        icon: "fa-solid fa-cube" 
      },
      { 
        title: "快速开始指南", 
        desc: "HyperMotion & HyperBDR 的逐步指南。", 
        link: "/zh/userguide/checklist/dr-checklist", 
        icon: "fa-solid fa-signs-post" 
      },
      { 
        title: "安装指南", 
        desc: "快速开始指南和部署要求。", 
        link: "/zh/userguide/installation/quick-installation", 
        icon: "fa-solid fa-download"
      },
      { 
        title: "迁移指南", 
        desc: "无缝云迁移的最佳实践。", 
        link: "/zh/userguide/migration/",
        icon: "fa-solid fa-arrow-right"
      },
      { 
        title: "容灾指南", 
        desc: "灾难恢复的最佳实践。", 
        link: "/zh/userguide/dr/", 
        icon: "fa-solid fa-shield" 
      },
    ],
  },
  {
    title: "最佳实践",
    items: [
      { 
        title: "策略管理", 
        desc: "策略管理的最佳实践", 
        link: "/zh/userguide/technical-practices/policy-best-practices", 
        icon: "fa-solid fa-check-square" 
      },
      { 
        title: "脚本管理", 
        desc: "脚本管理的最佳实践", 
        link: "/zh/userguide/technical-practices/script-best-practices", 
        icon: "fa-solid fa-file-code" 
      },
      { 
        title: "网络规划", 
        desc: "网络规划的最佳实践", 
        link: "/zh/userguide/technical-practices/network-planning", 
        icon: "fa-solid fa-network-wired" 
      },
      { 
        title: "故障排除", 
        desc: "故障排除的最佳实践", 
        link: "/zh/userguide/technical-practices/troubleshooting-best-practices", 
        icon: "fa-solid fa-bug",
      },
    ],
  },
  {
    title: "支持",
    items: [
      {
        title: "获取支持",
        desc: "从OneProCloud获取支持。",
        link: "https://support.oneprocloud.com/",
        icon: "fa-solid fa-handshake-angle"
      },
      { 
        title: "故障排除", 
        desc: "解决常见错误和问题。", 
        link: "/zh/userguide/technical-practices/troubleshooting-best-practices", 
        icon: "fa-solid fa-circle-info" 
      },
      { 
        title: "常见问题", 
        desc: "常见问题解答。", 
        link: "/zh/userguide/faq/faq", 
        icon: "fa-solid fa-circle-question" 
      },
    ],
  },
]

