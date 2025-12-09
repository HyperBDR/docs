/**
 * Dify 搜索工具函数
 * 用于调用 Dify API 进行智能搜索
 */

import { getDifySearchConfig, type DifySearchConfig } from '../dify-search.config.js'

export interface DifySearchResult {
  id: string
  title: string
  content: string
  url?: string
  score?: number
  metadata?: Record<string, any>
}

export interface DifySearchResponse {
  results: DifySearchResult[]
  total: number
  query: string
}

/**
 * 调用 Dify API 进行搜索
 * @param query 搜索查询
 * @param config 可选的配置覆盖
 * @returns 搜索结果
 */
export async function searchDify(
  query: string,
  config?: Partial<DifySearchConfig>
): Promise<DifySearchResponse> {
  const searchConfig = { ...getDifySearchConfig(), ...config }

  if (!searchConfig.enabled || !query.trim()) {
    return {
      results: [],
      total: 0,
      query
    }
  }

  try {
    // Dify API 标准调用方式：
    // 1. 使用 API Key (app-xxx) 作为 Bearer token
    // 2. URL 格式：/v1/chat-messages
    // 3. 请求体包含：inputs, query, response_mode, user, conversation_id(可选)
    
    if (!searchConfig.apiKey) {
      throw new Error('Dify API Key 未配置')
    }
    
    // 构建 API URL
    // 根据 Dify API 文档：https://docs.dify.ai/guides/application-development/developing-with-apis
    const apiUrl = `${searchConfig.baseUrl}/v1/chat-messages`
    
    // 构建请求头
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${searchConfig.apiKey}`
    }
    
    // 构建请求体（根据 Dify API 文档）
    const requestBody: Record<string, any> = {
      inputs: {}, // 输入变量，根据应用配置可能需要设置
      query: query,
      response_mode: 'blocking', // 阻塞模式，等待完整响应
      user: 'docs-search-user', // 用户标识，用于检索和统计
      conversation_id: '' // 空字符串表示新会话
    }
    
    // 创建 AbortController 以便更好地处理超时
    const controller = new AbortController()
    const timeout = searchConfig.timeout || 30000
    const timeoutId = setTimeout(() => {
      controller.abort()
    }, timeout)
    
    let response: Response
    try {
      response = await fetch(apiUrl, {
        method: 'POST',
        headers,
        body: JSON.stringify(requestBody),
        signal: controller.signal
      })
      clearTimeout(timeoutId)
    } catch (error: any) {
      clearTimeout(timeoutId)
      if (error.name === 'AbortError' || error.name === 'TimeoutError') {
        throw new Error(`Dify API 请求超时（${timeout}ms）。AI 搜索可能需要更长时间，请稍后重试或增加超时时间。`)
      }
      throw error
    }

    if (!response.ok) {
      // 尝试解析错误响应
      let errorMessage = `${response.status} ${response.statusText}`
      let errorData: any = null
      
      try {
        errorData = await response.json()
        errorMessage = errorData.message || errorData.error?.message || errorData.error || errorMessage
        console.error('Dify API Error Details:', errorData)
      } catch (e) {
        // 如果无法解析错误响应，使用默认错误信息
        const text = await response.text().catch(() => '')
        console.error('Dify API Error Response:', text)
      }
      
      // 如果是 401 错误，提供更详细的提示
      if (response.status === 401) {
        throw new Error(`Dify API 认证失败 (401): ${errorMessage}。请检查 API Key 是否正确。`)
      }
      
      throw new Error(`Dify API error (${response.status}): ${errorMessage}`)
    }

    const data = await response.json()

    // 解析 Dify 响应并转换为搜索结果格式
    // 根据 Dify API 文档，blocking 模式响应格式为：
    // {
    //   "event": "message",
    //   "task_id": "...",
    //   "id": "...",
    //   "message_id": "...",
    //   "conversation_id": "...",
    //   "mode": "chat",
    //   "answer": "...",
    //   "metadata": {
    //     "usage": {...},
    //     "retriever_resources": [...]
    //   },
    //   "created_at": ...
    // }
    const results: DifySearchResult[] = []

    // 1. 添加 AI 回答作为主要结果
    if (data.answer) {
      results.push({
        id: `dify-answer-${data.message_id || data.id || Date.now()}`,
        title: '智能回答',
        content: data.answer,
        score: 1.0,
        metadata: {
          type: 'answer',
          conversation_id: data.conversation_id,
          message_id: data.message_id,
          task_id: data.task_id,
          mode: data.mode,
          usage: data.metadata?.usage
        }
      })
    }

    // 2. 添加检索到的文档引用
    // 根据 API 文档，retriever_resources 格式：
    // [
    //   {
    //     "position": 1,
    //     "dataset_id": "...",
    //     "dataset_name": "...",
    //     "document_id": "...",
    //     "document_name": "...",
    //     "segment_id": "...",
    //     "score": 0.98457545,
    //     "content": "..."
    //   }
    // ]
    const retrieverResources = data.metadata?.retriever_resources || []
    retrieverResources.forEach((resource: any, index: number) => {
      results.push({
        id: `dify-ref-${resource.segment_id || resource.document_id || index}`,
        title: resource.document_name || resource.dataset_name || '相关文档',
        content: resource.content || '',
        url: undefined,
        score: resource.score || 0.8,
        metadata: {
          type: 'reference',
          position: resource.position,
          dataset_id: resource.dataset_id,
          dataset_name: resource.dataset_name,
          document_id: resource.document_id,
          document_name: resource.document_name,
          segment_id: resource.segment_id,
          ...resource
        }
      })
    })

    return {
      results: results.slice(0, searchConfig.maxResults || 5),
      total: results.length,
      query
    }
  } catch (error) {
    console.warn('Dify search error:', error)
    return {
      results: [],
      total: 0,
      query
    }
  }
}

/**
 * 使用流式 API 进行搜索（可选，用于实时显示结果）
 * @param query 搜索查询
 * @param onChunk 接收数据块的回调
 * @param config 可选的配置覆盖
 */
export async function searchDifyStream(
  query: string,
  onChunk: (chunk: string) => void,
  config?: Partial<DifySearchConfig>
): Promise<void> {
  const searchConfig = { ...getDifySearchConfig(), ...config }

  if (!searchConfig.enabled || !query.trim()) {
    return
  }

  try {
    if (!searchConfig.apiKey) {
      throw new Error('Dify API Key 未配置')
    }
    
    // 构建 API URL（与阻塞模式相同）
    const apiUrl = `${searchConfig.baseUrl}/v1/chat-messages`
    
    // 构建请求头
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${searchConfig.apiKey}`
    }
    
    // 构建请求体（流式模式）
    const requestBody: Record<string, any> = {
      inputs: {},
      query: query,
      response_mode: 'streaming', // 使用流式模式
      user: 'docs-search-user',
      conversation_id: '' // 空字符串表示新会话
    }
    
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify(requestBody),
      signal: AbortSignal.timeout(searchConfig.timeout || 10000)
    })

    if (!response.ok) {
      let errorMessage = `${response.status} ${response.statusText}`
      try {
        const errorData = await response.json()
        errorMessage = errorData.message || errorData.error || errorMessage
      } catch (e) {
        // 忽略解析错误
      }
      
      if (response.status === 401) {
        throw new Error(`Dify API 认证失败 (401): ${errorMessage}`)
      }
      
      throw new Error(`Dify API error: ${errorMessage}`)
    }

    const reader = response.body?.getReader()
    const decoder = new TextDecoder()

    if (!reader) {
      throw new Error('No response body reader available')
    }

    while (true) {
      const { done, value } = await reader.read()
      if (done) break

      const chunk = decoder.decode(value, { stream: true })
      const lines = chunk.split('\n').filter(line => line.trim())

      let fullAnswer = '' // 累积完整答案
      
      for (const line of lines) {
        if (line.startsWith('data: ')) {
          try {
            const data = JSON.parse(line.slice(6))
            
            // 根据 Dify API 文档，流式响应支持多种事件类型：
            switch (data.event) {
              case 'message':
                // LLM 返回文本块事件，答案以分块方式输出
                if (data.answer) {
                  fullAnswer += data.answer
                  onChunk(data.answer) // 实时显示每个片段
                }
                break
                
              case 'message_end':
                // 消息结束事件，包含完整的元数据和引用资源
                // 此时可以处理 retriever_resources
                if (data.metadata?.retriever_resources) {
                  // 可以在这里处理检索到的资源
                  console.log('Retriever resources:', data.metadata.retriever_resources)
                }
                break
                
              case 'error':
                // 错误事件，流将结束
                throw new Error(data.message || `Dify API error: ${data.code || 'unknown'}`)
                
              case 'ping':
                // Ping 事件，每 10 秒一次保持连接
                // 不需要处理
                break
                
              case 'workflow_started':
              case 'node_started':
              case 'node_finished':
              case 'workflow_finished':
                // 工作流相关事件，可以记录但不影响搜索
                break
                
              case 'message_file':
              case 'tts_message':
              case 'tts_message_end':
              case 'message_replace':
                // 其他事件类型，暂时忽略
                break
                
              default:
                // 未知事件类型
                console.warn('Unknown event type:', data.event)
            }
          } catch (e) {
            // 忽略解析错误，继续处理下一行
            if (e instanceof Error && e.message.includes('Dify API error')) {
              throw e // 重新抛出 API 错误
            }
            console.warn('Failed to parse stream chunk:', e)
          }
        }
      }
    }
  } catch (error) {
    console.warn('Dify stream search error:', error)
  }
}

