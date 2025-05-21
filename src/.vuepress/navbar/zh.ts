import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  {
    text: "产品概览",
    icon: "lightbulb",
    prefix: "zh/product-overview/",
    link: "zh/product-overview/",
  },
  {
    text: "文档中心",
    icon: "book",
    prefix: "/zh/",
    children: [
      {
        text: "安装指南",
        icon: "download",
        children: [
          {
            text: "产品安装",
            icon: "download",
            link: "/zh/userguide/installation/",
          }
        ],
      },
      {
        text: "迁移指南",
        icon: "exchange",
        children: [
          {
            text: "HyperMotion 使用手册",
            icon: "exchange",
            link: "/zh/userguide/migration/",
          },
        ],
      },
      {
        text: "容灾指南",
        icon: "shield",
        children: [
          {
            text: "用户指南",
            icon: "book",
            link: "/zh/userguide/poc/",
          },
          {
            text: "HyperBDR 使用手册(即将废弃)",
            icon: "warning",
            link: "/zh/userguide/dr-usage-guide/",
          },
          {
            text: "HyperBDR 使用手册",
            icon: "shield",
            link: "/zh/userguide/dr/",
          },
        ],
      },
      {
        text: "运维指南",
        icon: "gear",
        children: [
          {
            text: "管理指南",
            icon: "user-gear",
            link: "/zh/userguide/operations/"
          },
          {
            text: "管理门户手册",
            icon: "window-maximize",
            link: "/zh/userguide/admin-portal/"
          },
          {
            text: "运维指南",
            icon: "tools",
            link: "/zh/userguide/om-guide/"
          },
        ],
      },
      {
        text: "工具指南",
        icon: "wrench",
        children: [
          {
            text: "容灾计算器",
            icon: "calculator",
            link: "/zh/userguide/calculator/",
          },
          {
            text: "授权管理平台",
            icon: "key",
            link: "/zh/userguide/license-management/",
          }
        ],
      },
      {
        text: "其他文档",
        icon: "ellipsis",
        children: [
          {
            text: "云容灾检查清单",
            icon: "check-square",
            link: "/zh/userguide/checklist/"
          },
          {
            text: "FAQ",
            icon: "question-circle",
            link: "/zh/userguide/faq/faq.md"
          }
        ],
      },
    ],
  },
  {
    text: "获取支持",
    icon: "headset",
    link: "https://support.oneprocloud.com/",
  },
  {
    text: "OneProCloud官网",
    icon: "cloud",
    link: "https://oneprocloud.com/",
  },
  {
    text: "容灾计算器",
    icon: "calculator",
    link: "https://calculator.oneprocloud.com/",
  },
]);
