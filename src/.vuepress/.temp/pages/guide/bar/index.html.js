import comp from "/root/workspace/private/vuepress-theme-hope/src/.vuepress/.temp/pages/guide/bar/index.html.vue"
const data = JSON.parse("{\"path\":\"/guide/bar/\",\"title\":\"Bar feature\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Bar feature\",\"icon\":\"lightbulb\",\"description\":\"Introduction We support bar feature, ... Details ...\",\"gitInclude\":[],\"head\":[[\"link\",{\"rel\":\"alternate\",\"hreflang\":\"zh-cn\",\"href\":\"https://vuepress-theme-hope-docs-demo.netlify.app/zh/guide/bar/\"}],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/guide/bar/\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Bar feature\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Introduction We support bar feature, ... Details ...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"meta\",{\"property\":\"og:locale:alternate\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Mr.OneProCloud\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Bar feature\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Mr.OneProCloud\\\",\\\"url\\\":\\\"https://oneprocloud.com/\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"Introduction\",\"slug\":\"introduction\",\"link\":\"#introduction\",\"children\":[]},{\"level\":2,\"title\":\"Details\",\"slug\":\"details\",\"link\":\"#details\",\"children\":[]}],\"readingTime\":{\"minutes\":0.05,\"words\":15},\"filePathRelative\":\"guide/bar/README.md\",\"autoDesc\":true}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
