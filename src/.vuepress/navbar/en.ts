import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  {
    text: "Docs",
    icon: "book",
    prefix: "/",
    children: [
      {
        text: "User Guide",
        icon: "lightbulb",
        prefix: "userguide/poc/",
        link: "/userguide/poc/",
        // children: ["baz", { text: "...", icon: "ellipsis", link: "#" }],
        children: [],
      },
      {
        text: "Product Overview",
        icon: "lightbulb",
        prefix: "product-overview/",
        link: "/product-overview/",
        children: [],
      },
      {
        text: "Product Training",
        icon: "lightbulb",
        prefix: "product-training/",
        link: "/product-training/",
        children: [],
      },
    ],
  },
  {
    text: "OneProCloud",
    icon: "link",
    link: "https://oneprocloud.com/",
  },
]);
