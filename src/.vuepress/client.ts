import { defineClientConfig } from 'vuepress/client'
import { createApp } from 'vue'
import HomePage from './client/components/HomePage.vue'
import TranslateWidget from './client/components/TranslateWidget.vue'

declare global {
  interface Window {
    google?: any
    googleTranslateElementInit?: () => void
    __gtReady?: Promise<void>
    difyChatbotConfig?: any
    difySearchConfig?: any
  }
}

export default defineClientConfig({
  enhance({ app }) {
    app.component('HomePage', HomePage)
    app.component('TranslateWidget', TranslateWidget)
  },
  setup() {
    if (typeof window !== 'undefined') {
      let widgetMounted = false

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
        .google-translate-container {
          visibility: hidden !important; position: fixed !important;
          top: -9999px !important; left: -9999px !important;
          width: 1px !important; height: 1px !important;
          overflow: hidden !important; pointer-events: none !important;
        }
        .VIpgJd-ZVi9od-ORHb-OEVmcd { display: none !important; height: 0 !important; }
        .goog-te-banner-frame { display: none !important; height: 0 !important; }
        body { top: 0 !important; }
        .vp-navbar-end .vp-nav-item:has(.vp-dropdown-title):has(.route-link) { display: none !important; }
      `
      document.head.appendChild(style)

      // GT 容器 —— 只创建一次，永远不清空
      const translateContainer = document.createElement('div')
      translateContainer.id = 'google_translate_element'
      translateContainer.className = 'google-translate-container'
      document.body.appendChild(translateContainer)

      // GT 只初始化一次，返回 Promise<void>，只标志脚本就绪
      window.__gtReady = new Promise<void>((resolve) => {
        window.googleTranslateElementInit = function () {
          const isZh = window.location.pathname.startsWith('/zh/')
          new window.google.translate.TranslateElement({
            pageLanguage: isZh ? 'zh-CN' : 'en',
            includedLanguages: 'en,zh-CN,ja,es',
            layout: window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
            autoDisplay: false,
          }, 'google_translate_element')

          // 等 select 渲染出来
          const wait = (retries = 40) => {
            const sel = document.querySelector('select.goog-te-combo')
            if (sel) {
              // 恢复上次翻译
              const m = document.cookie.match(/googtrans=\/(?:zh-CN|en)\/(ja|es)/)
              if (m) {
                sel.value = m[1]
                sel.dispatchEvent(new Event('change'))
              }
              resolve()  // 只标志脚本就绪，不传 select
            } else if (retries > 0) {
              setTimeout(() => wait(retries - 1), 200)
            }
          }
          wait()
        }

        const s = document.createElement('script')
        s.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
        s.onerror = () => { console.warn('Google Translate failed to load'); resolve() }
        document.head.appendChild(s)
      })

      // banner 清理
      setInterval(() => {
        ;['.VIpgJd-ZVi9od-ORHb-OEVmcd', '.goog-te-banner-frame'].forEach(sel => {
          const el = document.querySelector(sel) as HTMLElement
          if (el) { el.style.setProperty('display', 'none', 'important'); el.style.setProperty('height', '0', 'important') }
        })
        document.body.style.setProperty('top', '0px', 'important')
        document.body.style.setProperty('margin-top', '0px', 'important')
        document.body.style.removeProperty('position')
      }, 500)

      // 挂载 TranslateWidget
      const mountTranslateWidget = () => {
        if (widgetMounted) return
        const navbarEnd = document.querySelector('.vp-navbar-end')
        if (navbarEnd) {
          if (navbarEnd.querySelector('.translate-widget')) { widgetMounted = true; return }
          const container = document.createElement('div')
          navbarEnd.insertBefore(container, navbarEnd.firstChild)
          createApp(TranslateWidget).mount(container)
          widgetMounted = true
        } else {
          setTimeout(mountTranslateWidget, 200)
        }
      }
      mountTranslateWidget()

      // 路由切换只通知组件更新语言显示，不动 GT
      const onRouteChange = () => window.dispatchEvent(new Event('langchange'))
      window.addEventListener('popstate', onRouteChange)
      const origPush = history.pushState
      history.pushState = function(...args) { origPush.apply(history, args); onRouteChange() }
      const origReplace = history.replaceState
      history.replaceState = function(...args) { origReplace.apply(history, args); onRouteChange() }
    }
  }
})