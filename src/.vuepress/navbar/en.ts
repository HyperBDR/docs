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
        text: "Operations",
        icon: "",
        children: [
          {
            text: "Administration Guide",
            icon: "book",
            link: "/userguide/operations/"
          },
          {
            text: "Admin Portal Manual",
            icon: "book",
            link: "/userguide/admin-portal/"
          },
          {
            text: "O&M Guide",
            icon: "book",
            link: "/userguide/om-guide/"
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
