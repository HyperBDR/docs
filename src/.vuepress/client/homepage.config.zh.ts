/**
 * Homepage sections configuration (Chinese)
 * This file defines the sections and items displayed on the Chinese homepage.
 * You can easily add, remove, or modify sections and items here without editing the Vue component.
 * 
 * Icon usage:
 * - Use FontAwesome icon class names directly (e.g., "fa-solid fa-cube", "fa-solid fa-download")
 * - Available icons: https://fontawesome.com/icons
 */

import type { HomepageSection, CoreAction, SaasQuickExperience } from './homepage.config.js'

export const homepageSectionsZh: HomepageSection[] = [
  {
    title: "产品概览",
    items: [
      {
        title: "场景",
        desc: "HyperMotion & HyperBDR 支持的场景。",
        link: "/zh/product-overview/product-training/scenarios.md",
        icon: "fa-solid fa-cube"
      },
      {
        title: "网络规划",
        desc: "HyperMotion & HyperBDR 的网络规划最佳实践。",
        link: "/zh/product-overview/presales/dr-network-planning-recommendations",
        icon: "fa-solid fa-network-wired"
      },
      {
        title: "技术亮点",
        desc: "HyperMotion & HyperBDR 的技术亮点。",
        link: "/zh/product-overview/product-training/technical-highlights.md",
        icon: "fa-solid fa-lightbulb"
      },
    ],
  },
  {
    title: "主机调研",
    items: [
      {
        title: "主机调研",
        desc: "Linux & Windows 主机快速调研",
        link: "/zh/product-overview/presales/hyperbdr-agent-investigation.md",
        icon: "fa-solid fa-computer"
      },
      {
        title: "VMware 主机调研",
        desc: "VMware 主机快速调研",
        link: "/zh/product-overview/presales/hyperbdr-vmware-investigation.md",
        icon: "fa-solid fa-server"
      },
      {
        title: "自动主机信息收集",
        desc: "自动化主机收集工具，支持 Linux & Windows & VMware 主机信息收集",
        link: "/zh/product-overview/presales/auto-host-info-collector.md",
        icon: "fa-solid fa-robot"
      },
    ],
  },
  {
    title: "兼容性 & 限制",
    items: [
      {
        title: "产品支持概览",
        desc: "HyperMotion & HyperBDR 产品支持概览。",
        link: "/product-overview/limitations/product-support-overview.md",
        icon: "fa-solid fa-check-square"
      },
      {
        title: "Linux Agent",
        desc: "Linux 代理支持 for Linux 主机。",
        link: "/product-overview/limitations/linux-agent.md",
        icon: "fa-solid fa-computer"
      },
      {
        title: "Windows Agent",
        desc: "Windows 代理支持 for Windows 主机。",
        link: "/product-overview/limitations/windows-agent.md",
        icon: "fa-solid fa-server"
      },
      {
        title: "VMware Agentless",
        desc: "VMware 无代理支持 for VMware 主机。",
        link: "/product-overview/limitations/vmware-agentless.md",
        icon: "fa-solid fa-server"
      },
      {
        title: "FusionCompute Agentless",
        desc: "FusionCompute 无代理支持 for FusionCompute 8.6.0 主机。",
        link: "/product-overview/limitations/huawei-fusioncompute-agentless.md",
        icon: "fa-solid fa-server"
      },
      {
        title: "OpenStack Ceph Agentless",
        desc: "OpenStack & Ceph 无代理支持 for OpenStack & Ceph 平台。",
        link: "/product-overview/limitations/openstack-ceph-agentless.md",
        icon: "fa-solid fa-cloud"
      },
      {
        title: "Huawei Cloud Stack Agentless",
        desc: "Huawei Cloud Stack 无代理支持 for Huawei Cloud Stack 8.0.2 主机。",
        link: "/product-overview/limitations/huawei-hcs-agentless.md",
        icon: "fa-solid fa-cloud"
      },
      {
        title: "Huawei Cloud Agentless",
        desc: "Huawei Cloud 无代理支持 for Huawei Cloud API 主机。",
        link: "/product-overview/limitations/huawei-cloud-agentless.md",
        icon: "fa-solid fa-cloud"
      },
      {
        title: "Oracle Cloud Agentless",
        desc: "Oracle Cloud 无代理支持 for Oracle Cloud 主机。",
        link: "/product-overview/limitations/oracle-cloud-agentless.md",
        icon: "fa-solid fa-cloud"
      },
    ],
  },
  {
    title: "用户手册",
    items: [
      {
        title: "HyperMotion 用户手册",
        desc: "HyperMotion 产品迁移用户手册。",
        link: "/zh/userguide/migration/",
        icon: "fa-solid fa-arrow-right"
      },
      {
        title: "HyperBDR 用户手册",
        desc: "HyperBDR 容灾用户手册。",
        link: "/zh/userguide/dr/",
        icon: "fa-solid fa-shield"
      },
    ],
  },
  {
    title: "购买与激活",
    items: [
      {
        title: "SaaS 授权购买激活",
        desc: "SaaS 授权购买激活。",
        link: "/zh/userguide/saas-license/",
        icon: "fa-solid fa-shopping-cart"
      },
      {
        title: "单机授权购买激活",
        desc: "单机授权购买激活。",
        link: "/zh/userguide/standalone-license/",
        icon: "fa-solid fa-key"
      },
      {
        title: "POC 授权购买激活",
        desc: "POC 授权购买激活。",
        link: "/zh/userguide/poc-license/",
        icon: "fa-solid fa-flask"
      },
    ],
  },
  {
    title: "运维指南",
    items: [
      {
        title: "管理指南",
        desc: "HyperMotion & HyperBDR 管理指南。",
        link: "/zh/userguide/operations/",
        icon: "fa-solid fa-user-gear"
      },
      {
        title: "管理门户手册",
        desc: "HyperMotion & HyperBDR 管理门户手册。",
        link: "/zh/userguide/admin-portal/",
        icon: "fa-solid fa-window-maximize"
      },
      {
        title: "运维指南",
        desc: "HyperMotion & HyperBDR 运维指南。",
        link: "/zh/userguide/om-guide/",
        icon: "fa-solid fa-tools"
      },
    ],
  },
  {
    title: "最佳实践",
    items: [
      {
        title: "技术实践",
        desc: "HyperMotion & HyperBDR 技术实践。",
        link: "/zh/userguide/technical-practices/policy-best-practices",
        icon: "fa-solid fa-check-square"
      },
      {
        title: "Pre & Post 脚本管理",
        desc: "HyperMotion & HyperBDR Pre & Post 脚本管理。",
        link: "/zh/userguide/technical-practices/script-best-practices",
        icon: "fa-solid fa-file-code"
      },
      {
        title: "网络规划",
        desc: "HyperMotion & HyperBDR 网络规划。",
        link: "/zh/userguide/technical-practices/network-planning",
        icon: "fa-solid fa-network-wired"
      },
      {
        title: "故障排除",
        desc: "HyperMotion & HyperBDR 故障排除。",
        link: "/zh/userguide/technical-practices/troubleshooting-best-practices",
        icon: "fa-solid fa-bug",
      },
    ],
  },
  {
    title: "工具指南",
    items: [
      {
        title: "容灾计算器",
        desc: "HyperMotion & HyperBDR 容灾计算器。",
        link: "/zh/userguide/calculator/",
        icon: "fa-solid fa-calculator"
      },
      {
        title: "授权管理平台",
        desc: "HyperMotion & HyperBDR 授权管理平台。",
        link: "/zh/userguide/license-management/",
        icon: "fa-solid fa-key"
      },
    ],
  },
  {
    title: "获取支持",
    items: [
      {
        title: "获取支持",
        desc: "获取支持 from OneProCloud.",
        link: "https://support.oneprocloud.com/",
        icon: "fa-solid fa-handshake-angle"
      },
      {
        title: "AI 智能搜索",
        desc: "AI 智能搜索 from OneProCloud.",
        link: "https://ai.oneprocloud.com/chat/qWGp3yX8ain2550b",
        icon: "fa-solid fa-robot"
      },
      {
        title: "常见问题",
        desc: "HyperMotion & HyperBDR 常见问题。",
        link: "/zh/userguide/faq/faq",
        icon: "fa-solid fa-circle-question"
      },
    ],
  },
]

/**
 * Core Actions configuration (Chinese)
 * These are the prominent action buttons displayed prominently on the homepage.
 */
export const coreActionsZh: CoreAction[] = [
  {
    title: "分步指南",
    desc: "按照检查清单逐步完成配置和部署",
    link: "/zh/userguide/checklist/dr-checklist.md",
    icon: "fa-solid fa-list-check"
  },
  {
    title: "快速安装",
    desc: "快速上手，快速完成产品安装和配置",
    link: "/zh/userguide/installation/quick-installation.md",
    icon: "fa-solid fa-bolt"
  },
]

/**
 * SaaS 快速体验配置
 * 用于引流用户到 SaaS 注册使用的醒目展示区域
 */
export const saasQuickExperienceZh: SaasQuickExperience = {
  enabled: true,
  title: "体验我们的 SaaS 平台",
  subtitle: "零安装、零运维 - 即刻体验云原生迁移与灾备的强大能力",
  products: [
    {
      name: "HyperMotion",
      description: "云原生迁移解决方案，实现多云环境间工作负载的无缝迁移",
      link: "https://motion.hyperbdr.com",
      icon: "/assets/icon/hypermotion.png",
      color: "var(--vp-c-accent-bg)"
    },
    {
      name: "HyperBDR",
      description: "企业级灾备解决方案，提供即时故障转移和持续数据保护",
      link: "https://hyperbdr.com",
      icon: "/assets/icon/hyperbdr.png",
      color: "var(--vp-c-accent-bg)"
    }
  ]
}

