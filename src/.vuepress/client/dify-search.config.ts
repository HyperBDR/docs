/**
 * Dify 搜索配置
 * 用于配置 Dify API 的搜索功能
 */
export interface DifySearchConfig {
  // Dify API 基础 URL
  baseUrl: string
  // API Key
  // 从 Dify 应用开发页面获取，格式通常为 app-xxx
  // 获取方式：访问应用开发页面 -> API 访问 -> 创建 API Key
  apiKey: string
  // 是否启用 Dify 搜索
  enabled: boolean
  // 搜索超时时间（毫秒）
  // 注意：blocking 模式在 Cloudflare 环境下最多 100 秒
  timeout?: number
  // 最大返回结果数
  maxResults?: number
}

// 从全局配置中获取配置
// 配置应该在 client.ts 中通过 window.difySearchConfig 设置
// 这是唯一的配置入口，不需要在其他地方重复配置
export function getDifySearchConfig(): DifySearchConfig {
  // 从 window.difySearchConfig 获取配置（在 client.ts 中设置）
  if (typeof window !== 'undefined' && window.difySearchConfig) {
    const config = window.difySearchConfig
    return {
      baseUrl: config.baseUrl,
      apiKey: config.apiKey,
      enabled: config.enabled !== false,
      timeout: config.timeout || 10000,
      maxResults: config.maxResults || 5
    }
  }
  
  // 如果没有配置，返回禁用状态并提示
  console.warn('⚠️ Dify 搜索未配置。请在 client.ts 中设置 window.difySearchConfig')
  return {
    baseUrl: 'https://ai.oneprocloud.com',
    apiKey: '',
    enabled: false, // 未配置时禁用
    timeout: 10000,
    maxResults: 5
  }
}

