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

  theme: hopeTheme({
    plugins: {
      mdEnhance: {
        mermaid: true,
      },
    },
  }),

  // Enable it with pwa
  // shouldPrefetch: false,
});
