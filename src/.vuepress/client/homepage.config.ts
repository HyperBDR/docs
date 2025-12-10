/**
 * Homepage sections configuration
 * This file defines the sections and items displayed on the homepage.
 * You can easily add, remove, or modify sections and items here without editing the Vue component.
 * 
 * Icon usage:
 * - Use FontAwesome icon class names directly (e.g., "fa-solid fa-cube", "fa-solid fa-download")
 * - Available icons: https://fontawesome.com/icons
 * - Examples: 
 *   - "fa-solid fa-cube"
 *   - "fa-solid fa-download"
 *   - "fa-solid fa-shield"
 *   - "fa-solid fa-signs-post"
 *   - "fa-solid fa-circle-info"
 *   - "fa-solid fa-circle-question"
 */

export interface HomepageItem {
  title: string
  desc: string
  link: string
  icon: string // FontAwesome icon class name (e.g., "fa-solid fa-cube")
}

export interface HomepageSection {
  title: string
  items: HomepageItem[]
}

export interface CoreAction {
  title: string
  desc: string
  link: string
  icon: string // FontAwesome icon class name (e.g., "fa-solid fa-list-check")
}

export interface SaasProduct {
  name: string
  description: string
  link: string
  icon: string
  color?: string
}

export interface SaasQuickExperience {
  enabled: boolean
  title: string
  subtitle?: string
  products: SaasProduct[]
}

export const homepageSections: HomepageSection[] = [
  {
    title: "Product Overview",
    items: [
      {
        title: "Scenarios",
        desc: "Scenarios for HyperMotion & HyperBDR.",
        link: "/product-overview/product-training/scenarios.md",
        icon: "fa-solid fa-cube"
      },
      {
        title: "Network Planning",
        desc: "Network planning for HyperMotion & HyperBDR.",
        link: "/product-overview/presales/dr-network-planning-recommendations",
        icon: "fa-solid fa-network-wired"
      },
      {
        title: "Technical Highlights",
        desc: "Technical highlights for HyperMotion & HyperBDR.",
        link: "/product-overview/product-training/technical-highlights.md",
        icon: "fa-solid fa-lightbulb"
      },
    ],
  },
  {
    title: "Hosts Investigation",
    items: [
      {
        title: "Host Quick Investigation",
        desc: "Host quick investigation for Linux & Windows hosts.",
        link: "/product-overview/presales/hyperbdr-agent-investigation.md",
        icon: "fa-solid fa-computer"
      },
      {
        title: "VMware Host Quick Investigation",
        desc: "VMware host quick investigation for VMware hosts.",
        link: "/product-overview/presales/hyperbdr-vmware-investigation.md",
        icon: "fa-solid fa-server"
      },
      {
        title: "Auto Host Info Collector",
        desc: "Auto host info collector for Linux & Windows hosts.",
        link: "/product-overview/presales/auto-host-info-collector.md",
        icon: "fa-solid fa-robot"
      },
    ],
  },
  {
    title: "Compatibility & Limitations",
    items: [
      {
        title: "Product Support Overview",
        desc: "Product support overview for HyperMotion & HyperBDR.",
        link: "/product-overview/limitations/product-support-overview.md",
        icon: "fa-solid fa-check-square"
      },
      {
        title: "Linux Agent",
        desc: "Linux agent support for Linux hosts.",
        link: "/product-overview/limitations/linux-agent.md",
        icon: "fa-solid fa-computer"
      },
      {
        title: "Windows Agent",
        desc: "Windows agent support for Windows hosts.",
        link: "/product-overview/limitations/windows-agent.md",
        icon: "fa-solid fa-server"
      },
      {
        title: "VMware Agentless",
        desc: "VMware Agentless support for VMware Agentless hosts.",
        link: "/product-overview/limitations/vmware-agentless.md",
        icon: "fa-solid fa-server"
      },
      {
        title: "FusionCompute Agentless",
        desc: "FusionCompute Agentless support for FusionCompute 8.6.0 hosts.",
        link: "/product-overview/limitations/huawei-fusioncompute-agentless.md",
        icon: "fa-solid fa-server"
      },
      {
        title: "OpenStack Ceph Agentless",
        desc: "OpenStack Ceph Agentless support for OpenStack & Ceph platforms.",
        link: "/product-overview/limitations/openstack-ceph-agentless.md",
        icon: "fa-solid fa-cloud"
      },
      {
        title: "Huawei Cloud Stack Agentless",
        desc: "Huawei Cloud Stack Agentless support for Huawei Cloud Stack 8.0.2 hosts.",
        link: "/product-overview/limitations/huawei-hcs-agentless.md",
        icon: "fa-solid fa-cloud"
      },
      {
        title: "Huawei Cloud Agentless",
        desc: "Huawei Cloud Agentless support for Huawei Cloud API hosts.",
        link: "/product-overview/limitations/huawei-cloud-agentless.md",
        icon: "fa-solid fa-cloud"
      },
      {
        title: "Oracle Cloud Agentless",
        desc: "Oracle Cloud Agentless support for Oracle Cloud Agentless hosts.",
        link: "/product-overview/limitations/oracle-cloud-agentless.md",
        icon: "fa-solid fa-cloud"
      },
    ],
  },
  {
    title: "User Manual",
    items: [
      {
        title: "HyperMotion User Manual",
        desc: "User manual for HyperMotion.",
        link: "/userguide/migration/",
        icon: "fa-solid fa-arrow-right"
      },
      {
        title: "HyperBDR User Manual",
        desc: "User manual for HyperBDR.",
        link: "/userguide/dr/",
        icon: "fa-solid fa-shield"
      },
    ],
  },
  {
    title: "Purchase & Activation",
    items: [
      {
        title: "SaaS License & Activation",
        desc: "Purchase & activation for SaaS license.",
        link: "/userguide/saas-license/",
        icon: "fa-solid fa-shopping-cart"
      },
      {
        title: "Standalone License & Activation",
        desc: "Purchase & activation for standalone license.",
        link: "/userguide/standalone-license/",
        icon: "fa-solid fa-key"
      },
      {
        title: "POC License & Activation",
        desc: "Purchase & activation for POC license.",
        link: "/userguide/poc-license/",
        icon: "fa-solid fa-flask"
      },
    ],
  },
  {
    title: "Operations",
    items: [
      {
        title: "Administration Guide",
        desc: "Administration guide for HyperMotion & HyperBDR.",
        link: "/userguide/operations/",
        icon: "fa-solid fa-user-gear"
      },
      {
        title: "Admin Portal Manual",
        desc: "Admin portal manual for HyperMotion & HyperBDR.",
        link: "/userguide/admin-portal/",
        icon: "fa-solid fa-window-maximize"
      },
      {
        title: "O&M Guide",
        desc: "O&M guide for HyperMotion & HyperBDR.",
        link: "/userguide/om-guide/",
        icon: "fa-solid fa-tools"
      },
    ],
  },
  {
    title: "Best Practices",
    items: [
      {
        title: "Technical Practices",
        desc: "Best practices for Policy Management",
        link: "/userguide/technical-practices/policy-best-practices",
        icon: "fa-solid fa-check-square"
      },
      {
        title: "Script Management",
        desc: "Best practices for Script Management",
        link: "/userguide/technical-practices/script-best-practices",
        icon: "fa-solid fa-file-code"
      },
      {
        title: "Network Planning",
        desc: "Best practices for Network Planning",
        link: "/userguide/technical-practices/network-planning",
        icon: "fa-solid fa-network-wired"
      },
      {
        title: "Troubleshooting",
        desc: "Best practices for Troubleshooting",
        link: "/userguide/technical-practices/troubleshooting-best-practices",
        icon: "fa-solid fa-bug",
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        title: "Calculator",
        desc: "Calculator for HyperMotion & HyperBDR.",
        link: "/userguide/calculator/",
        icon: "fa-solid fa-calculator"
      },
      {
        title: "License Management",
        desc: "License management for HyperMotion & HyperBDR.",
        link: "/userguide/license-management/",
        icon: "fa-solid fa-key"
      },
    ],
  },
  {
    title: "Support",
    items: [
      {
        title: "Get Support",
        desc: "Get support from OneProCloud.",
        link: "https://support.oneprocloud.com/",
        icon: "fa-solid fa-handshake-angle"
      },
      {
        title: "AI Support",
        desc: "AI Support from OneProCloud.",
        link: "https://ai.oneprocloud.com/chat/qWGp3yX8ain2550b",
        icon: "fa-solid fa-robot"
      },
      {
        title: "FAQ",
        desc: "Frequently asked questions.",
        link: "/userguide/faq/faq",
        icon: "fa-solid fa-circle-question"
      },
    ],
  },
]

/**
 * Core Actions configuration
 * These are the prominent action buttons displayed prominently on the homepage.
 */
export const coreActions: CoreAction[] = [
  {
    title: "Step By Step Guide",
    desc: "Follow the checklist to complete setup and deployment step by step",
    link: "/userguide/checklist/dr-checklist.md",
    icon: "fa-solid fa-list-check"
  },
  {
    title: "Quick Installation",
    desc: "Get started quickly with streamlined installation and configuration",
    link: "/userguide/installation/quick-installation.md",
    icon: "fa-solid fa-bolt"
  },
]

/**
 * SaaS Quick Experience configuration
 * This is a prominent call-to-action section for SaaS registration and trial
 */
export const saasQuickExperience: SaasQuickExperience = {
  enabled: true,
  title: "Try Our SaaS Platform",
  subtitle: "Zero installation, zero maintenance - Experience cloud-native migration and disaster recovery instantly",
  products: [
    {
      name: "HyperMotion",
      description: "Cloud-native migration solution for seamless workload transfer across multi-cloud environments",
      link: "https://motion.hyperbdr.com",
      icon: "/assets/icon/hypermotion.png",
      color: "var(--vp-c-accent-bg)"
    },
    {
      name: "HyperBDR",
      description: "Enterprise-grade disaster recovery solution with instant failover and continuous data protection",
      link: "https://hyperbdr.com",
      icon: "/assets/icon/hyperbdr.png",
      color: "var(--vp-c-accent-bg)"
    }
  ]
}

