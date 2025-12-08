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

export const homepageSections: HomepageSection[] = [
  {
    title: "Core Platform",
    items: [
      { 
        title: "Product Overview", 
        desc: "Core concepts of HyperMotion & HyperBDR.", 
        link: "/product-overview/", 
        icon: "fa-solid fa-cube" 
      },
      { 
        title: "Step by Step Guide", 
        desc: "Step by step guide for HyperMotion & HyperBDR.", 
        link: "/userguide/checklist/dr-checklist", 
        icon: "fa-solid fa-signs-post" 
      },
      { 
        title: "Installation", 
        desc: "Quick start guide and deployment requirements.", 
        link: "/userguide/installation/quick-installation", 
        icon: "fa-solid fa-download"
      },
      { 
        title: "Migration Guide", 
        desc: "Best practices for seamless cloud migration.", 
        link: "/userguide/migration/",
        icon: "fa-solid fa-arrow-right"
      },
      { 
        title: "DR Guide", 
        desc: "Best practices for disaster recovery.", 
        link: "/userguide/dr/", 
        icon: "fa-solid fa-shield" 
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

