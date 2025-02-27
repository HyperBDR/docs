import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  {
    text: "Product Overview",
    icon: "eye",
    prefix: "/product-overview/",
    link: "/product-overview/",
  },
  {
    text: "Docs",
    icon: "book",
    prefix: "/",
    children: [
      {
        text: "User Guide",
        icon: "thumbs-up",
        prefix: "userguide/poc/",
        link: "/userguide/poc/",
        // children: ["baz", { text: "...", icon: "ellipsis", link: "#" }],
        children: [],
      },

      // NOTE(Ray): Move Product Overview to the top level menu
      //{
      //  text: "Product Overview",
      //  icon: "eye",
      //  prefix: "product-overview/",
      //  link: "/product-overview/",
      //  children: [],
      //},

      // NOTE(Ray): Merge Product Training with Product Overview
      // Comment this top level menu item
      //{
      //  text: "Product Training",
      //  icon: "dumbbell",
      //  prefix: "product-training/",
      //  link: "/product-training/",
      //  children: [],
      //},

      // NOTE(Ray): Merge Pre Sales with Product Overview
      //{
      //  text: "Pre Sales",
      //  icon: "handshake",
      //  prefix: "userguide/presales/",
      //  link: "/userguide/presales/",
      //  children: [],
      //},
      {
        text: "Manual",
        icon: "book",
        prefix: "userguide/dr-usage-guide/",
        link: "/userguide/dr-usage-guide/",
        children: [],
      },
      {
        text: "Checklist",
        icon: "list",
        prefix: "checklist/",
        link: "/checklist/dr-checklist.md",
        children: [],
      },
      {
        text: "FAQ",
        icon: "person-circle-question",
        prefix: "userguide/faq/",
        link: "/userguide/faq/faq.md",
        children: [],
      },
    ],
  },
  {
    text: "Get Support",
    icon: "link",
    link: "https://support.oneprocloud.com/",
  },
  {
    text: "OneProCloud",
    icon: "link",
    link: "https://oneprocloud.com/",
  },
]);
