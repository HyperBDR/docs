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
        icon: "thumbs-up",
        prefix: "userguide/poc/",
        link: "/userguide/poc/",
        // children: ["baz", { text: "...", icon: "ellipsis", link: "#" }],
        children: [],
      },
      {
        text: "Product Overview",
        icon: "eye",
        prefix: "product-overview/",
        link: "/product-overview/",
        children: [],
      },
      {
        text: "Product Training",
        icon: "dumbbell",
        prefix: "product-training/",
        link: "/product-training/",
        children: [],
      },
      {
        text: "Pre Sales",
        icon: "handshake",
        prefix: "userguide/presales/",
        link: "/userguide/presales/",
        children: [],
      },
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
        prefix: "userguide/checklist/",
        link: "/userguide/checklist/",
        children: [],
      },
      {
        text: "FAQ",
        icon: "person-circle-question",
        prefix: "userguide/faq/",
        link: "/userguide/faq/",
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
