import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  {
    text: "Docs",
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
      // {
      //   text: "Product Overview",
      //   icon: "lightbulb",
      //   prefix: "zh/product-overview/",
      //   link: "/zh/product-overview/",
      //   children: [],
      // },
      // {
      //   text: "Product Training",
      //   icon: "lightbulb",
      //   prefix: "zh/product-training/",
      //   link: "/zh/product-training/",
      //   children: [],
      // },
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
