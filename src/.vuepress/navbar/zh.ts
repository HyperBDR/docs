import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  {
    text: "产品概览",
    icon: "eye",
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
        icon: "lightbulb",
        children: [
          {
            text: "产品安装",
            icon: "book",
            link: "/zh/userguide/installation/",
          }
        ],
      },
      {
        text: "迁移指南",
        icon: "thumbs-up",
        children: [
          {
            text: "HyperMotion 使用手册",
            icon: "book",
            link: "/zh/userguide/migration/",
          },
        ],
      },
      {
        text: "容灾指南",
        icon: "thumbs-up",
        children: [
          {
            text: "用户指南",
            icon: "book",
            link: "/zh/userguide/poc/",
          },
          {
            text: "HyperBDR 使用手册(即将废弃)",
            icon: "book",
            link: "/zh/userguide/dr-usage-guide/",
          },
          {
            text: "HyperBDR 使用手册",
            icon: "book",
            link: "/zh/userguide/dr/",
          },
        ],
      },
      {
        text: "运维指南",
        icon: "",
        children: [
          {
            text: "管理指南",
            icon: "book",
            link: "/zh/userguide/operations/"
          },
          {
            text: "运维指南",
            icon: "book",
            link: "/zh/userguide/om-guide/"
          },
          {
            text: "管理门户手册",
            icon: "book",
            link: "/zh/userguide/admin-portal/"
          },
        ],
      },
      {
        text: "工具指南",
        icon: "thumbs-up",
        children: [
          {
            text: "容灾计算器",
            link: "/zh/userguide/tools/",
          }
        ],
      },
      {
        text: "其他文档",
        icon: "list",
        children: [
          {
            text: "云容灾检查清单",
            icon: "list",
            link: "/zh/userguide/checklist/"
          },
          {
            text: "FAQ",
            icon: "person-circle-question",
            link: "/zh/userguide/faq/faq.md"
          }
        ],
      },
    ],
  },
  {
    text: "获取支持",
    icon: "link",
    link: "https://support.oneprocloud.com/",
  },
  {
    text: "OneProCloud官网",
    icon: "link",
    link: "https://oneprocloud.com/",
  },
  {
    text: "容灾计算器",
    icon: "link",
    link: "https://calculator.oneprocloud.com/",
  },
]);
