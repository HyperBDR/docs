import { defineClientConfig } from "vuepress/client";
import { HopeIcon, Layout, NotFound, injectDarkmode, setupDarkmode, setupSidebarItems, scrollPromise } from "/root/workspace/new/docs/node_modules/vuepress-theme-hope/lib/bundle/export.js";

import { GlobalEncrypt, LocalEncrypt } from "/root/workspace/new/docs/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/export.js";
import "/root/workspace/new/docs/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/styles/all.scss"

import "/root/workspace/new/docs/node_modules/@vuepress/helper/lib/client/styles/normalize.css";
import "/root/workspace/new/docs/node_modules/vuepress-theme-hope/lib/bundle/styles/all.scss";



export default defineClientConfig({
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await scrollPromise.wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkmode(app);

    // provide HopeIcon as global component
    app.component("HopeIcon", HopeIcon);

    app.component("GlobalEncrypt", GlobalEncrypt);
    app.component("LocalEncrypt", LocalEncrypt);
  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();

  },
  layouts: {
    Layout,
    NotFound,

  }
});