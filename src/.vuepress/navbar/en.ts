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
    text: "Documentation",
    icon: "book",
    prefix: "/",
    children: [
      {
        text: "Installation",
        icon: "thumbs-up",
        // children: ["baz", { text: "...", icon: "ellipsis", link: "#" }],
        children: [
          {
            text: "Installation",
            icon: "book",
            link: "/userguide/installation/",
          }
        ],
      },
      {
        text: "Migration",
        icon: "thumbs-up",
        children: [
          {
            text: "HyperMotion Mannual",
            icon: "book",
            link: "/userguide/migration/",
          },
        ], 
      },
      {
        text: "Disaster Recovery",
        icon: "thumbs-up",
        children: [
          { 
            text: "User Guide",
            icon: "book",
            link: "/userguide/poc/",
          },
          { 
            text: "HyperBDR Manual(About to be abandoned)",
            icon: "book",
            link: "/userguide/dr-usage-guide/",
          },
          { 
            text: "HyperBDR Manual",
            icon: "book",
            link: "/userguide/dr/",
          },
        ], 
      },
      {
        text: "Tools",
        icon: "thumbs-up",
        children: [
          {
            text: "Calculator",
            link: "/userguide/tools/",
          }
        ], 
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
        text: "Operations",
        icon: "",
        children: [
          {
            text: "Operation Platform Mannual",
            icon: "book",
            link: "/userguide/operations/"
          }
        ],
      },
      {
        text: "Others",
        icon: "list",
        children: [
          {
            text: "Checklist",
            icon: "list",
            link: "/userguide/checklist/"
          },
          {
            text: "FAQ",
            icon: "person-circle-question",
            link: "/userguide/faq/faq.md"
          }
        ],
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
  {
    text: "Calculator",
    icon: "link",
    link: "https://calculator.oneprocloud.com/",
  },
]);
