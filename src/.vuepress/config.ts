import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

import theme from "./theme.js";

export default defineUserConfig({

  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      // title: "HyperBDR Docs",
      // description: "A docs demo for vuepress-theme-hope",
    },
    "/zh/": {
      lang: "zh-CN",
      // title: "HyperBDR文档",
      // description: "vuepress-theme-hope 的文档演示",
    },
  },

  theme,

  markdown: {
    toc: {
      level: [2, 3, 4 ],
    },
  },

  // Enable it with pwa
  shouldPrefetch: false,
});
