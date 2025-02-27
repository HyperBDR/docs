import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  {
    text: "文档中心",
    icon: "book",
    prefix: "/",
    children: [
      {
        text: "用户指南",
        icon: "lightbulb",
        prefix: "zh/userguide/poc/",
        link: "/zh/userguide/poc/",
        // children: ["baz", { text: "...", icon: "ellipsis", link: "#" }],
        children: [],
      },
      {
        text: "产品概览",
        icon: "lightbulb",
        prefix: "zh/product-overview/",
        link: "/zh/product-overview/",
        children: [],
      },
      // {
      //   text: "Product Training",
      //   icon: "lightbulb",
      //   prefix: "zh/product-training/",
      //   link: "/zh/product-training/",
      //   children: [],
      // },
      {
        text: "售前",
        icon: "handshake",
        prefix: "zh/userguide/presales/",
        link: "/zh/userguide/presales/",
        children: [],
      },
      {
        text: "用户手册",
        icon: "book",
        prefix: "zh/userguide/dr-usage-guide/",
        link: "/zh/userguide/dr-usage-guide/",
        children: [],
      },
      {
        text: "云容灾检查清单",
        icon: "list",
        prefix: "zh/checklist/",
        link: "/zh/checklist/dr-checklist.md",
        children: [],
      },
      {
        text: "FAQ",
        icon: "person-circle-question",
        prefix: "zh/userguide/faq/",
        link: "/zh/userguide/faq/faq.md",
        children: [],
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
]);
