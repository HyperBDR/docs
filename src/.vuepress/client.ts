import { defineClientConfig } from 'vuepress/client'

export default defineClientConfig({
  enhance() {},
  setup() {
    if (typeof window !== 'undefined') {
      // 插入 Dify 脚本
      const script = document.createElement('script')
      script.src = 'https://ai.oneprocloud.com/embed.min.js'
      script.defer = true
      script.id = 'qWGp3yX8ain2550b'
      document.body.appendChild(script)

      // 设置全局配置变量
      window.difyChatbotConfig = {
        token: 'qWGp3yX8ain2550b',
        baseUrl: 'https://ai.oneprocloud.com',
        systemVariables: {
          // user_id: 'YOUR_USER_ID',
          // conversation_id: 'YOUR_CONVERSATION_ID',
        },
      }

      // 插入样式
      const style = document.createElement('style')
      style.textContent = `
        #dify-chatbot-bubble-button {
          background-color: #1C64F2 !important;
        }
        #dify-chatbot-bubble-window {
          width: 35rem !important;
          height: 80rem !important;
        }
      `
      document.head.appendChild(style)
    }
  }
})

