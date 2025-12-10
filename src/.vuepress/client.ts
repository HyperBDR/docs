import { defineClientConfig } from 'vuepress/client'
import HomePage from './client/components/HomePage.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.component('HomePage', HomePage)
  },
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

      // 设置 Dify 搜索配置
      // 从 Dify 应用开发页面获取 API Key: https://ai.oneprocloud.com/app/6c524095-230d-4e71-b4bb-f15a1fad72be/develop
      // 步骤：访问上述链接 -> API 访问 -> 创建 API Key
      window.difySearchConfig = {
        baseUrl: 'https://ai.oneprocloud.com',
        apiKey: 'app-*****************', // 从 Dify 控制台获取 API Key（格式：app-xxx）
        enabled: true,
        timeout: 60000, // 60秒（blocking 模式在 Cloudflare 下最多 100 秒，建议设置 30-60 秒）
        maxResults: 5
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

