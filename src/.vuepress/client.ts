import { defineClientConfig } from 'vuepress/client'
import { h } from 'vue'
import HomePage from './client/components/HomePage.vue'
import TranslateWidget from './client/components/TranslateWidget.vue'

declare global {
  interface Window {
    google?: any
    googleTranslateElementInit?: () => void
    difyChatbotConfig?: any
    difySearchConfig?: any
  }
}

export default defineClientConfig({
  enhance({ app }) {
    app.component('HomePage', HomePage)
    app.component('TranslateWidget', TranslateWidget)
  },

  rootComponents: [() => h(TranslateWidget)],

  setup() {
    if (typeof window !== 'undefined') {

      // Dify
      const script = document.createElement('script')
      script.src = 'https://ai.oneprocloud.com/embed.min.js'
      script.defer = true
      script.id = 'qWGp3yX8ain2550b'
      document.body.appendChild(script)
      window.difyChatbotConfig = { token: 'qWGp3yX8ain2550b', baseUrl: 'https://ai.oneprocloud.com', systemVariables: {} }
      window.difySearchConfig = { baseUrl: 'https://ai.oneprocloud.com', apiKey: 'app-*****************', enabled: true, timeout: 60000, maxResults: 5 }

      // 样式
      const style = document.createElement('style')
      style.textContent = `
        #dify-chatbot-bubble-button { background-color: #1C64F2 !important; }
        #dify-chatbot-bubble-window { width: 35rem !important; height: 80rem !important; position: fixed !important; }
        .VIpgJd-ZVi9od-ORHb-OEVmcd { display: none !important; height: 0 !important; }
        .goog-te-banner-frame { display: none !important; height: 0 !important; }
        body { top: 0 !important; }
        .vp-navbar-end { display: flex; align-items: center; }
        .vp-navbar-end .vp-nav-item:has(.vp-dropdown-title):has(.route-link) { display: none !important; }
      `
      document.head.appendChild(style)

      // GT 容器
      const gtContainer = document.createElement('div')
      gtContainer.id = 'google_translate_element'
      gtContainer.style.cssText = 'position:absolute;top:-9999px;left:-9999px;width:1px;height:1px;overflow:hidden;'
      document.body.appendChild(gtContainer)

      // GT 初始化回调
      window.googleTranslateElementInit = function () {
        if (!window.google?.translate) return
        new window.google.translate.TranslateElement({
          pageLanguage: 'en',
          includedLanguages: 'en,zh-CN,ja,es',
          autoDisplay: false,
        }, 'google_translate_element')
      }

      // GT 脚本，只加载一次
      if (!document.querySelector('script[src*="translate.google.com"]')) {
        const gtScript = document.createElement('script')
        gtScript.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
        document.head.appendChild(gtScript)
      }

      // banner 清理
      setInterval(() => {
        const banner = document.querySelector('.VIpgJd-ZVi9od-ORHb-OEVmcd') as HTMLElement
        if (banner) { banner.style.setProperty('display', 'none', 'important') }
        const bannerOld = document.querySelector('.goog-te-banner-frame') as HTMLElement
        if (bannerOld) { bannerOld.style.setProperty('display', 'none', 'important') }
        document.body.style.setProperty('top', '0px', 'important')
        document.body.style.removeProperty('position')
      }, 500)

      // 路由变化通知，防止 GT 内部调用触发递归
      const onRouteChange = () => window.dispatchEvent(new Event('langchange'))
      window.addEventListener('popstate', onRouteChange)

      let isPushingState = false
      const origPush = history.pushState
      history.pushState = function(...args) {
        origPush.apply(history, args)
        if (!isPushingState) {
          isPushingState = true
          onRouteChange()
          isPushingState = false
        }
      }

      let isReplacingState = false
      const origReplace = history.replaceState
      history.replaceState = function(...args) {
        origReplace.apply(history, args)
        if (!isReplacingState) {
          isReplacingState = true
          onRouteChange()
          isReplacingState = false
        }
      }
    }
  }
})