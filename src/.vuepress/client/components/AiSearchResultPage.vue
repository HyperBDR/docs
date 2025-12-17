<template>
  <Teleport to="body">
    <Transition name="ai-search-fade">
      <div v-if="visible" class="ai-search-result-page">
        <div class="ai-search-result-container" @click.stop>
          <!-- 头部 -->
          <div class="ai-search-header">
            <div class="ai-search-header-left">
              <div class="ai-badge-large">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
                <span>{{ isZh ? 'AI 智能搜索' : 'AI Search' }}</span>
              </div>
              <div class="ai-search-query">
                <span class="query-label">{{ isZh ? '搜索内容：' : 'Query: ' }}</span>
                <span class="query-text">{{ query }}</span>
              </div>
            </div>
            <div class="ai-search-header-right">
              <!-- 下载按钮 -->
              <div v-if="result && !loading" class="download-dropdown">
                <button class="download-button" @click.stop="showDownloadMenu = !showDownloadMenu" :title="isZh ? '下载' : 'Download'">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                </button>
                <Transition name="dropdown-fade">
                  <div v-if="showDownloadMenu" class="download-menu" @click.stop>
                    <button class="download-menu-item" @click="exportToMarkdown">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                      </svg>
                      <span>{{ isZh ? '导出为 Markdown' : 'Export as Markdown' }}</span>
                    </button>
                    <button class="download-menu-item" @click="exportToPDF">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                      </svg>
                      <span>{{ isZh ? '导出为 PDF' : 'Export as PDF' }}</span>
                    </button>
                  </div>
                </Transition>
              </div>
              <button class="close-button" @click="handleClose" :title="isZh ? '关闭' : 'Close'">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>

          <!-- 内容区域 -->
          <div class="ai-search-content">
            <!-- 加载状态 -->
            <div v-if="loading" class="ai-loading-state">
              <div class="loading-spinner-large"></div>
              <div class="loading-text">{{ isZh ? 'AI 正在思考中...' : 'AI is thinking...' }}</div>
            </div>

            <!-- 错误状态 -->
            <div v-else-if="error" class="ai-error-state">
              <div class="error-icon">⚠️</div>
              <div class="error-title">{{ isZh ? '搜索失败' : 'Search Failed' }}</div>
              <div class="error-message">{{ error }}</div>
              <button class="retry-button" @click="handleRetry">
                {{ isZh ? '重试' : 'Retry' }}
              </button>
            </div>

            <!-- 搜索结果 -->
            <div v-else-if="result" class="ai-result-content">
              <!-- AI 回答 -->
              <div v-if="result.answer" class="ai-answer-section">
                <div class="section-header">
                  <h2 class="section-title">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                    {{ isZh ? 'AI 回答' : 'AI Answer' }}
                  </h2>
                </div>
                <div 
                  class="ai-answer-body markdown-body" 
                  v-html="formatMarkdown(result.answer)"
                ></div>
              </div>

              <!-- 参考文档 -->
              <div v-if="result.references && result.references.length > 0" class="ai-references-section">
                <div class="section-header">
                  <h2 class="section-title">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                    </svg>
                    {{ isZh ? '参考文档' : 'References' }}
                    <span class="reference-count">({{ result.references.length }})</span>
                  </h2>
                </div>
                <div class="references-list">
                  <div
                    v-for="(ref, index) in result.references"
                    :key="index"
                    class="reference-item"
                  >
                    <div class="reference-number">{{ index + 1 }}</div>
                    <div class="reference-content">
                      <div class="reference-title">{{ ref.title }}</div>
                      <div 
                        v-if="ref.content" 
                        class="reference-text markdown-body" 
                        v-html="formatMarkdown(ref.content, true)"
                      ></div>
                      <div v-if="ref.dataset" class="reference-source">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                        </svg>
                        {{ ref.dataset }}
                      </div>
                      <div v-if="ref.score" class="reference-score">
                        {{ isZh ? '相关度：' : 'Relevance: ' }}{{ (ref.score * 100).toFixed(0) }}%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { marked } from 'marked'
import { useRouteLocale } from '@vuepress/client'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

interface Reference {
  title: string
  content: string
  dataset?: string
  score?: number
}

interface AiSearchResult {
  answer: string
  references: Reference[]
}

const props = defineProps<{
  visible: boolean
  query: string
  loading: boolean
  error: string | null
  result: AiSearchResult | null
}>()

const emit = defineEmits<{
  close: []
  retry: []
}>()

const routeLocale = useRouteLocale()
const isZh = computed(() => {
  const locale = routeLocale.value
  return locale === '/zh/' || locale.startsWith('/zh')
})

const showDownloadMenu = ref(false)

// 配置 marked
marked.setOptions({
  breaks: true, // 支持换行
  gfm: true, // GitHub Flavored Markdown
  headerIds: false,
  mangle: false
})

// 格式化 Markdown
const formatMarkdown = (text: string, isPreview: boolean = false): string => {
  if (!text) return ''
  
  try {
    let html = marked.parse(text) as string
    
    // 如果是预览模式，限制内容长度
    if (isPreview && html.length > 500) {
      // 简单截断，保留 HTML 标签完整性
      const tempDiv = document.createElement('div')
      tempDiv.innerHTML = html
      const textContent = tempDiv.textContent || ''
      if (textContent.length > 300) {
        html = textContent.substring(0, 300) + '...'
      }
    }
    
    return html
  } catch (error) {
    console.error('Markdown parsing error:', error)
    return text.replace(/\n/g, '<br>')
  }
}

const handleClose = () => {
  emit('close')
}

const handleRetry = () => {
  emit('retry')
}

// 导出为 Markdown
const exportToMarkdown = () => {
  if (!props.result) return
  
  showDownloadMenu.value = false
  
  let markdown = `# ${isZh.value ? 'AI 搜索结果' : 'AI Search Results'}\n\n`
  markdown += `**${isZh.value ? '搜索内容' : 'Query'}：** ${props.query}\n\n`
  markdown += `**${isZh.value ? '生成时间' : 'Generated'}：** ${new Date().toLocaleString(isZh.value ? 'zh-CN' : 'en-US')}\n\n`
  markdown += `---\n\n`
  
  // AI 回答
  if (props.result.answer) {
    markdown += `## ${isZh.value ? 'AI 回答' : 'AI Answer'}\n\n`
    markdown += `${props.result.answer}\n\n`
  }
  
  // 参考文档
  if (props.result.references && props.result.references.length > 0) {
    markdown += `## ${isZh.value ? '参考文档' : 'References'}\n\n`
    props.result.references.forEach((ref, index) => {
      markdown += `### ${index + 1}. ${ref.title}\n\n`
      if (ref.content) {
        markdown += `${ref.content}\n\n`
      }
      if (ref.dataset) {
        markdown += `**${isZh.value ? '来源' : 'Source'}：** ${ref.dataset}\n\n`
      }
      if (ref.score) {
        markdown += `**${isZh.value ? '相关度' : 'Relevance'}：** ${(ref.score * 100).toFixed(0)}%\n\n`
      }
      markdown += `---\n\n`
    })
  }
  
  // 创建下载链接
  const blob = new Blob([markdown], { type: 'text/markdown;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  const fileName = `AI-Search-${props.query.replace(/[^a-z0-9]/gi, '-').toLowerCase()}-${Date.now()}.md`
  link.href = url
  link.download = fileName
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

// 导出为 PDF
const exportToPDF = async () => {
  if (!props.result) return
  
  showDownloadMenu.value = false
  
  try {
    // 获取内容容器
    const contentElement = document.querySelector('.ai-result-content') as HTMLElement
    if (!contentElement) {
      alert(isZh.value ? '无法找到内容区域' : 'Content area not found')
      return
    }
    
    // 创建临时容器用于PDF生成
    const tempContainer = document.createElement('div')
    tempContainer.style.position = 'absolute'
    tempContainer.style.left = '-9999px'
    tempContainer.style.width = '800px'
    tempContainer.style.padding = '40px'
    tempContainer.style.backgroundColor = '#ffffff'
    tempContainer.style.color = '#000000'
    tempContainer.style.fontFamily = 'Arial, sans-serif'
    
    // 复制内容
    const clonedContent = contentElement.cloneNode(true) as HTMLElement
    
    // 处理样式，确保PDF可读
    const style = document.createElement('style')
    style.textContent = `
      .markdown-body {
        color: #000 !important;
        font-size: 14px !important;
        line-height: 1.6 !important;
      }
      .markdown-body h1, .markdown-body h2, .markdown-body h3 {
        color: #000 !important;
        margin-top: 20px !important;
        margin-bottom: 10px !important;
      }
      .markdown-body code {
        background: #f5f5f5 !important;
        color: #000 !important;
        padding: 2px 4px !important;
      }
      .markdown-body pre {
        background: #f5f5f5 !important;
        padding: 10px !important;
        border-radius: 4px !important;
      }
      .reference-item {
        border: 1px solid #ddd !important;
        margin-bottom: 10px !important;
        padding: 10px !important;
      }
    `
    tempContainer.appendChild(style)
    tempContainer.appendChild(clonedContent)
    document.body.appendChild(tempContainer)
    
    // 添加标题
    const title = document.createElement('div')
    title.style.marginBottom = '30px'
    title.style.paddingBottom = '20px'
    title.style.borderBottom = '2px solid #000'
    title.innerHTML = `
      <h1 style="margin: 0 0 10px 0; font-size: 24px;">${isZh.value ? 'AI 搜索结果' : 'AI Search Results'}</h1>
      <p style="margin: 5px 0; font-size: 14px;"><strong>${isZh.value ? '搜索内容：' : 'Query: '}</strong>${props.query}</p>
      <p style="margin: 5px 0; font-size: 12px; color: #666;">${isZh.value ? '生成时间：' : 'Generated: '}${new Date().toLocaleString(isZh.value ? 'zh-CN' : 'en-US')}</p>
    `
    tempContainer.insertBefore(title, clonedContent)
    
    // 使用 html2canvas 转换为图片
    const canvas = await html2canvas(tempContainer, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff'
    })
    
    // 清理临时容器
    document.body.removeChild(tempContainer)
    
    // 创建 PDF
    const imgData = canvas.toDataURL('image/png')
    const pdf = new jsPDF('p', 'mm', 'a4')
    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = pdf.internal.pageSize.getHeight()
    const imgWidth = canvas.width
    const imgHeight = canvas.height
    const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight)
    const imgScaledWidth = imgWidth * ratio
    const imgScaledHeight = imgHeight * ratio
    
    // 如果内容超过一页，需要分页
    const pageHeight = imgScaledHeight
    let heightLeft = imgScaledHeight
    let position = 0
    
    pdf.addImage(imgData, 'PNG', 0, position, imgScaledWidth, imgScaledHeight)
    heightLeft -= pdfHeight
    
    while (heightLeft > 0) {
      position = heightLeft - imgScaledHeight
      pdf.addPage()
      pdf.addImage(imgData, 'PNG', 0, position, imgScaledWidth, imgScaledHeight)
      heightLeft -= pdfHeight
    }
    
    // 下载 PDF
    const fileName = `AI-Search-${props.query.replace(/[^a-z0-9]/gi, '-').toLowerCase()}-${Date.now()}.pdf`
    pdf.save(fileName)
  } catch (error) {
    console.error('PDF export error:', error)
    alert(isZh.value ? 'PDF 导出失败，请重试' : 'PDF export failed, please try again')
  }
}

// 点击外部关闭下载菜单
const handleClickOutside = (e: MouseEvent) => {
  const target = e.target as HTMLElement
  if (!target.closest('.download-dropdown')) {
    showDownloadMenu.value = false
  }
}

// 监听可见性变化，处理下载菜单的点击外部关闭
watch(() => props.visible, (visible) => {
  if (visible) {
    // 只处理下载菜单的点击外部关闭，不处理页面关闭
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }
})
</script>

<style scoped lang="scss">
.ai-search-result-page {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
  overflow-y: auto;
}

.ai-search-result-container {
  width: 100%;
  max-width: 900px;
  max-height: 90vh;
  background: var(--vp-c-bg);
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid var(--vp-c-border);
}

// 头部
.ai-search-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid var(--vp-c-border);
  background: var(--vp-c-bg-soft);
  flex-shrink: 0;
}

.ai-search-header-right {
  display: flex;
  align-items: center;
  gap: 12px;
}

.ai-search-header-left {
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  min-width: 0;
}

.ai-badge-large {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: color-mix(in srgb, var(--vp-c-accent-hover, var(--vp-c-accent)) 10%, transparent);
  border: 1px solid var(--vp-c-accent-hover, var(--vp-c-accent));
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  color: var(--vp-c-accent-hover, var(--vp-c-accent));
  width: fit-content;
  
  svg {
    width: 18px;
    height: 18px;
  }
}

.ai-search-query {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: var(--vp-c-text);
  
  .query-label {
    color: var(--vp-c-text);
    opacity: 0.7;
  }
  
  .query-text {
    font-weight: 500;
    color: var(--vp-c-text);
  }
}

// 下载按钮
.download-dropdown {
  position: relative;
}

.download-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid var(--vp-c-border);
  background: var(--vp-c-bg);
  border-radius: 8px;
  cursor: pointer;
  color: var(--vp-c-text);
  transition: all 0.2s ease;
  
  &:hover {
    background: var(--vp-c-accent-hover, var(--vp-c-accent));
    border-color: var(--vp-c-accent-hover, var(--vp-c-accent));
    color: white;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px color-mix(in srgb, var(--vp-c-accent-hover, var(--vp-c-accent)) 30%, transparent);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  svg {
    width: 18px;
    height: 18px;
  }
}

.download-menu {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  min-width: 200px;
  z-index: 1000;
  overflow: hidden;
}

.download-menu-item {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 12px 16px;
  border: none;
  background: transparent;
  text-align: left;
  cursor: pointer;
  color: var(--vp-c-text);
  font-size: 14px;
  transition: all 0.2s ease;
  
  &:hover {
    background: var(--vp-c-bg-soft);
    color: var(--vp-c-accent-hover, var(--vp-c-accent));
  }
  
  svg {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }
  
  span {
    flex: 1;
  }
  
  &:not(:last-child) {
    border-bottom: 1px solid var(--vp-c-border);
  }
}

.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.dropdown-fade-enter-from,
.dropdown-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

.close-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: none;
  background: transparent;
  border-radius: 8px;
  cursor: pointer;
  color: var(--vp-c-text);
  transition: all 0.2s ease;
  flex-shrink: 0;
  
  &:hover {
    background: var(--vp-c-bg-soft);
    color: var(--vp-c-accent-hover, var(--vp-c-accent));
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
}

// 内容区域
.ai-search-content {
  flex: 1;
  overflow-y: auto;
  padding: 0;
}

// 加载状态
.ai-loading-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 24px;
  gap: 20px;
}

.loading-text {
  font-size: 16px;
  color: var(--vp-c-text);
  font-weight: 500;
}

// 错误状态
.ai-error-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 24px;
  gap: 16px;
  text-align: center;
}

.error-icon {
  font-size: 48px;
  margin-bottom: 8px;
}

.error-title {
  font-size: 20px;
  font-weight: 600;
  color: var(--vp-c-text);
}

.error-message {
  font-size: 14px;
  color: var(--vp-c-text);
  opacity: 0.8;
  max-width: 500px;
}

.retry-button {
  margin-top: 8px;
  padding: 10px 24px;
  background: var(--vp-c-accent-hover, var(--vp-c-accent));
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }
}

// 结果内容
.ai-result-content {
  padding: 24px;
}

// 章节
.ai-answer-section,
.ai-references-section {
  margin-bottom: 32px;
  
  &:last-child {
    margin-bottom: 0;
  }
}

.section-header {
  margin-bottom: 20px;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 20px;
  font-weight: 700;
  color: var(--vp-c-text);
  margin: 0;
  
  svg {
    width: 20px;
    height: 20px;
    color: var(--vp-c-accent-hover, var(--vp-c-accent));
  }
  
  .reference-count {
    font-size: 14px;
    font-weight: 400;
    color: var(--vp-c-text);
    opacity: 0.7;
  }
}

// AI 回答内容
.ai-answer-body {
  padding: 20px;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  border: 1px solid var(--vp-c-border);
  line-height: 1.8;
}

// 参考文档列表
.references-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.reference-item {
  display: flex;
  gap: 16px;
  padding: 16px;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  border: 1px solid var(--vp-c-border);
  transition: all 0.2s ease;
  
  &:hover {
    border-color: var(--vp-c-accent-hover, var(--vp-c-accent));
    box-shadow: 0 4px 12px color-mix(in srgb, var(--vp-c-accent-hover, var(--vp-c-accent)) 10%, transparent);
  }
}

.reference-number {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--vp-c-accent-hover, var(--vp-c-accent));
  color: white;
  border-radius: 50%;
  font-size: 14px;
  font-weight: 600;
}

.reference-content {
  flex: 1;
  min-width: 0;
}

.reference-title {
  font-size: 16px;
  font-weight: 600;
  color: var(--vp-c-text);
  margin-bottom: 8px;
}

.reference-text {
  font-size: 14px;
  color: var(--vp-c-text);
  line-height: 1.6;
  margin-bottom: 8px;
  opacity: 0.9;
}

.reference-source {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: var(--vp-c-text);
  opacity: 0.7;
  margin-top: 8px;
  
  svg {
    width: 14px;
    height: 14px;
  }
}

.reference-score {
  display: inline-block;
  margin-top: 8px;
  padding: 4px 8px;
  background: color-mix(in srgb, var(--vp-c-accent-hover, var(--vp-c-accent)) 10%, transparent);
  border-radius: 4px;
  font-size: 12px;
  color: var(--vp-c-accent-hover, var(--vp-c-accent));
  font-weight: 500;
}

// Markdown 样式
:deep(.markdown-body) {
  color: var(--vp-c-text);
  font-size: 15px;
  line-height: 1.8;
  
  h1, h2, h3, h4, h5, h6 {
    margin: 24px 0 12px;
    font-weight: 600;
    color: var(--vp-c-text);
    line-height: 1.4;
  }
  
  h1 {
    font-size: 24px;
    border-bottom: 2px solid var(--vp-c-border);
    padding-bottom: 8px;
  }
  
  h2 {
    font-size: 20px;
    border-bottom: 1px solid var(--vp-c-border);
    padding-bottom: 6px;
  }
  
  h3 {
    font-size: 18px;
  }
  
  h4 {
    font-size: 16px;
  }
  
  p {
    margin: 12px 0;
  }
  
  ul, ol {
    margin: 12px 0;
    padding-left: 24px;
  }
  
  li {
    margin: 6px 0;
    
    p {
      margin: 0;
    }
  }
  
  code {
    background: var(--vp-c-bg);
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 0.9em;
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Courier New', monospace;
    color: var(--vp-c-accent-hover, var(--vp-c-accent));
    border: 1px solid var(--vp-c-border);
  }
  
  pre {
    background: var(--vp-c-bg);
    padding: 16px;
    border-radius: 8px;
    overflow-x: auto;
    margin: 16px 0;
    border: 1px solid var(--vp-c-border);
    
    code {
      background: transparent;
      padding: 0;
      border: none;
      color: var(--vp-c-text);
      font-size: 14px;
    }
  }
  
  blockquote {
    margin: 16px 0;
    padding: 12px 16px;
    border-left: 4px solid var(--vp-c-accent-hover, var(--vp-c-accent));
    background: var(--vp-c-bg-soft);
    border-radius: 4px;
    color: var(--vp-c-text);
    opacity: 0.9;
  }
  
  hr {
    margin: 24px 0;
    border: none;
    border-top: 1px solid var(--vp-c-border);
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 16px 0;
    
    th, td {
      padding: 8px 12px;
      border: 1px solid var(--vp-c-border);
      text-align: left;
    }
    
    th {
      background: var(--vp-c-bg-soft);
      font-weight: 600;
    }
  }
  
  a {
    color: var(--vp-c-accent-hover, var(--vp-c-accent));
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
  
  strong {
    font-weight: 600;
    color: var(--vp-c-text);
  }
  
  em {
    font-style: italic;
  }
  
  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin: 16px 0;
  }
}

// 过渡动画
.ai-search-fade-enter-active,
.ai-search-fade-leave-active {
  transition: opacity 0.3s ease;
}

.ai-search-fade-enter-from,
.ai-search-fade-leave-to {
  opacity: 0;
}

.ai-search-fade-enter-active .ai-search-result-container,
.ai-search-fade-leave-active .ai-search-result-container {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.ai-search-fade-enter-from .ai-search-result-container,
.ai-search-fade-leave-to .ai-search-result-container {
  transform: scale(0.95) translateY(-20px);
  opacity: 0;
}

// 移动端适配
@media (max-width: 768px) {
  .ai-search-result-page {
    padding: 0;
  }
  
  .ai-search-result-container {
    max-width: 100%;
    max-height: 100vh;
    border-radius: 0;
  }
  
  .ai-search-header {
    padding: 16px;
  }
  
  .ai-search-query {
    font-size: 13px;
    
    .query-label {
      display: none;
    }
  }
  
  .ai-result-content {
    padding: 16px;
  }
  
  .section-title {
    font-size: 18px;
  }
  
  .ai-answer-body {
    padding: 16px;
  }
  
  .reference-item {
    padding: 12px;
    gap: 12px;
  }
  
  .reference-number {
    width: 28px;
    height: 28px;
    font-size: 12px;
  }
}
</style>

