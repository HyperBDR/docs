import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  {
    text: "Product Overview",
    icon: "lightbulb",
    prefix: "/product-overview/",
    link: "/product-overview/",
  },
  {
    text: "Documentation",
    icon: "book",
    prefix: "/",
    children: [
      {
        text: "Installation",
        icon: "download",
        children: [
          {
            text: "Installation",
            icon: "download",
            link: "/userguide/installation/",
          }
        ],
      },
      {
        text: "Purchase & Activation",
        icon: "file-invoice",
        children: [
          {
            text: "SaaS License & Activation",
            icon: "shopping-cart",
            link: "/userguide/saas-license/",
          },
          {
            text: "Standalone License & Activation",
            icon: "key",
            link: "/userguide/standalone-license/",
          }
        ],
      },
      {
        text: "Migration",
        icon: "exchange",
        children: [
          {
            text: "HyperMotion Mannual",
            icon: "exchange",
            link: "/userguide/migration/",
          },
        ],
      },
      {
        text: "Disaster Recovery",
        icon: "shield",
        children: [
          {
            text: "User Guide",
            icon: "book",
            link: "/userguide/poc/",
          },
          {
            text: "HyperBDR Manual(About to be abandoned)",
            icon: "warning",
            link: "/userguide/dr-usage-guide/",
          },
          {
            text: "HyperBDR Manual",
            icon: "shield",
            link: "/userguide/dr/",
          },
        ],
      },
      {
        text: "Operations",
        icon: "gear",
        children: [
          {
            text: "Administration Guide",
            icon: "user-gear",
            link: "/userguide/operations/"
          },
          {
            text: "Admin Portal Manual",
            icon: "window-maximize",
            link: "/userguide/admin-portal/"
          },
          {
            text: "O&M Guide",
            icon: "tools",
            link: "/userguide/om-guide/"
          },
        ],
      },
      {
        text: "Tools",
        icon: "wrench",
        children: [
          {
            text: "Calculator",
            icon: "calculator",
            link: "/userguide/calculator/",
          },
          {
            text: "License Management",
            icon: "key",
            link: "/userguide/license-management/",
          }
        ],
      },
      {
        text: "Others",
        icon: "ellipsis",
        children: [
          {
            text: "Checklist",
            icon: "check-square",
            link: "/userguide/checklist/"
          },
          {
            text: "FAQ",
            icon: "question-circle",
            link: "/userguide/faq/faq.md"
          }
        ],
      },
    ],
  },
  {
    text: "AI Support",
    icon: "robot",
    link: "https://ai.oneprocloud.com/chat/qWGp3yX8ain2550b",
  },
  {
    text: "FAQ",
    icon: "headphones",
    link: "https://support.oneprocloud.com/",
  },
  {
    text: "OneProCloud",
    icon: "cloud",
    link: "https://oneprocloud.com/",
  },
  {
    text: "Calculator",
    icon: "calculator",
    link: "https://calculator.oneprocloud.com/",
  },
]);