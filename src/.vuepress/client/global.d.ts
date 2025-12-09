/**
 * 全局类型声明
 * 扩展 Window 接口以支持 Dify 相关配置
 */

import type { DifySearchConfig } from './dify-search.config.js'

declare global {
  interface Window {
    // Dify 聊天机器人配置
    difyChatbotConfig?: {
      token: string
      baseUrl: string
      systemVariables?: Record<string, any>
      apiKey?: string
      appId?: string
    }
    
    // Dify 搜索配置
    difySearchConfig?: DifySearchConfig
  }
}

export {}