/**
 * Homepage sections configuration (Chinese)
 * This file defines the sections and items displayed on the Chinese homepage.
 * You can easily add, remove, or modify sections and items here without editing the Vue component.
 * 
 * Icon usage:
 * - Use FontAwesome icon class names directly (e.g., "fa-solid fa-cube", "fa-solid fa-download")
 * - Available icons: https://fontawesome.com/icons
 */

import type { HomepageSection, CoreAction } from './homepage.config.js'

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
        desc: "产品支持概览。",
        link: "/zh/product-overview/limitations/product-support-overview",
        icon: "fa-solid fa-check-square"
      },
      { 
        title: "Linux Agent", 
        desc: "Linux Agent 支持与限制条件", 
        link: "/zh/product-overview/limitations/linux-agent", 
        icon: "fa-solid fa-computer" 
      },
      { 
        title: "Windows Agent", 
        desc: "Windows Agent 支持与限制条件", 
        link: "/zh/product-overview/limitations/windows-agent", 
        icon: "fa-solid fa-server" 
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

