<template>
  <div class="search-home-wrapper">
    <div class="bg-decoration"></div>

    <div class="hero">
      <h1 class="hero-title">
        <span class="brand">OnePro</span> <span class="docs">{{ isZh ? '文档' : 'Docs' }}</span>
      </h1>
      <p class="hero-subtitle">{{ isZh ? '搜索、探索和使用。' : 'Search, explore, and use.' }}</p>

      <div class="search-shell" ref="searchShellRef">
        <div :class="['search-bar', { focused: isFocused, hasInput: searchQuery.length > 0 }]" ref="searchBarRef" @click="focusInput">
          <div class="search-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </div>
          <input
            ref="searchInput"
            v-model="searchQuery"
            class="search-input"
            type="text"
            :placeholder="isZh ? '搜索指南、文档或故障排除...' : 'Search guides, documents, or troubleshooting...'"
            @focus="isFocused = true"
            @blur="handleBlur"
            @keydown.enter="handleSearch"
            @keydown.esc="clearSearch"
          />
          <div class="search-actions">
            <button 
              v-if="searchQuery.length > 0 && !isDifySearching"
              class="search-button"
              @click.stop="handleSearch"
              :title="isZh ? '搜索' : 'Search'"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </button>
            <div v-if="isDifySearching" class="search-loading">
              <div class="loading-spinner"></div>
            </div>
            <div class="shortcut-hint" v-if="searchQuery.length === 0 && !isDifySearching">
            <span class="key">Ctrl</span>
            <span class="key">K</span>
          </div>
            <div class="esc-hint" v-if="isFocused && searchQuery.length > 0 && !isDifySearching">
              <span class="key">{{ isZh ? 'ESC 关闭' : 'ESC to close' }}</span>
            </div>
          </div>
        </div>
        <div 
          class="search-results" 
          ref="searchResultsRef" 
          v-show="isFocused && searchQuery.length > 0 && !showAiSearchPage"
          @mousedown.prevent="handleSearchResultsMouseDown"
          @contextmenu="handleSearchResultsContextMenu"
        >
          <div class="result-divider"></div>
          
          <!-- 本地搜索结果 -->
          <div v-if="filteredResults.length > 0">
            <div class="result-group-title">{{ isZh ? '文档搜索' : 'Documentation' }}</div>
            <a
              v-for="item in filteredResults"
              :key="item.path"
              :href="item.path"
              class="result-item"
              @click.prevent="navigate(item.path)"
              @mousedown.prevent="handleResultItemMouseDown"
              @contextmenu="handleResultItemContextMenu"
            >
              <div>
                <span class="result-title">{{ item.title }}</span>
                <span class="result-path">{{ item.category || (isZh ? '文档' : 'Documentation') }} • {{ item.path }}</span>
              </div>
              <div class="enter-icon">↵</div>
            </a>
          </div>

          <!-- AI 搜索提示（点击后打开独立页面） -->
          <div v-if="hasSearched && !isDifySearching && !difySearchResult && !difySearchError" class="ai-search-hint">
            <div class="hint-text">{{ isZh ? '正在准备 AI 搜索结果...' : 'Preparing AI search results...' }}</div>
            </div>

          <!-- 输入提示（未搜索时） -->
          <div v-if="!hasSearched && searchQuery.length > 0 && !isDifySearching" class="search-hint">
            <div class="hint-text">{{ isZh ? '按 Enter 或点击搜索按钮进行 AI 智能搜索' : 'Press Enter or click search button for AI search' }}</div>
          </div>

          <!-- 无结果 -->
          <div v-if="hasSearched && !isDifySearching && filteredResults.length === 0 && !difySearchResult && !difySearchError" class="no-results">
            <div class="no-results-text">{{ isZh ? '未找到结果。' : 'No results found.' }}</div>
          </div>
        </div>
      </div>

      <!-- AI 搜索结果独立页面 -->
      <AiSearchResultPage
        :visible="showAiSearchPage"
        :query="searchQuery"
        :loading="isDifySearching"
        :error="difySearchError"
        :result="difySearchResult"
        @close="handleCloseAiSearchPage"
        @retry="handleRetryAiSearch"
      />
    </div>

    <div class="sections">
      <section v-for="(section, idx) in sections" :key="idx" class="section">
        <div class="section-title">{{ section.title }}</div>
        <div class="cards">
          <div v-for="(item, i) in section.items" :key="i" class="card" @click="navigate(item.link)">
            <div class="card-icon">
              <i :class="item.icon"></i>
            </div>
            <div class="card-text">
              <div class="card-title">{{ item.title }}</div>
              <div class="card-desc">{{ item.desc }}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { useSearchIndex, useSearchSuggestions } from '@vuepress/plugin-search/client'
import { useRouteLocale } from 'vuepress/client'
import { homepageSections } from '../homepage.config.js'
import { homepageSectionsZh } from '../homepage.config.zh.js'
import { searchDify, type DifySearchResult } from '../utils/dify-search.js'
import AiSearchResultPage from './AiSearchResultPage.vue'

const router = useRouter()
const searchInput = ref<HTMLInputElement | null>(null)
const searchBarRef = ref<HTMLElement | null>(null)
const searchResultsRef = ref<HTMLElement | null>(null)
const searchShellRef = ref<HTMLElement | null>(null)
const searchQuery = ref('')
const isFocused = ref(false)
const isRightClicking = ref(false)

const routeLocale = useRouteLocale()
const searchIndex = useSearchIndex()
const maxSuggestions = ref(5)
const searchSuggestions = useSearchSuggestions({
  searchIndex,
  routeLocale,
  query: searchQuery,
  maxSuggestions
})

// Dify 搜索相关状态
const difySearchResults = ref<DifySearchResult[]>([])
const isDifySearching = ref(false)
const hasSearched = ref(false) // 是否已执行过搜索
const difySearchResult = ref<{
  answer: string
  references: Array<{
    title: string
    content: string
    dataset?: string
    score?: number
  }>
} | null>(null)
const difySearchError = ref<string | null>(null)
const showAiSearchPage = ref(false) // 控制 AI 搜索结果页面显示

// 判断是否为中文环境
const isZh = computed(() => {
  const locale = routeLocale.value
  return locale === '/zh/' || locale.startsWith('/zh')
})

// 根据语言选择配置
const sections = computed(() => {
  return isZh.value ? homepageSectionsZh : homepageSections
})

const filteredResults = computed(() => {
  const query = searchQuery.value.trim()
  if (!query) {
    return []
  }
  
  const results = searchSuggestions.value || []
  
  return results.map((item: any) => ({
    title: item.title || 'Untitled',
    path: item.link || '#',
    category: item.header ? 'Section' : 'Page'
  }))
})

const focusInput = () => {
  searchInput.value?.focus();
};

const handleBlur = () => {
  if (isRightClicking.value) {
    return;
  }
  // 如果已经搜索过，保持结果框显示；否则延迟关闭
  setTimeout(() => {
    if (!isRightClicking.value && !hasSearched.value) {
    isFocused.value = false;
    }
  }, 150); 
};

// 执行搜索（手动触发）
const handleSearch = () => {
  const query = searchQuery.value.trim()
  if (!query) {
    return
  }

  hasSearched.value = true
  difySearchError.value = null
  
  // 关闭搜索框下面的结果展示框，只显示AI搜索结果弹框
  isFocused.value = false
  
  // 执行本地搜索（实时）
  // 本地搜索已经在 watch 中自动触发，这里不需要额外处理
  
  // 执行 AI 搜索（手动触发）
  performDifySearch(query)
  
  // 移除焦点，让搜索框收起
  searchInput.value?.blur()
}

const triggerSearch = () => {
  const value = searchQuery.value.trim()

  const event = new KeyboardEvent('keydown', {
    key: 'k',
    code: 'KeyK',
    ctrlKey: true,
    metaKey: true,
    bubbles: true,
  })
  window.dispatchEvent(event)

  setTimeout(() => {
    const searchInputs = document.querySelectorAll('input[type="search"], input[placeholder*="Search"], .search-box input')
    if (searchInputs.length > 0) {
      const first = searchInputs[0] as HTMLInputElement
      first.value = value
      first.dispatchEvent(new Event('input', { bubbles: true }))
    }
  }, 80)

  searchInput.value?.blur()
}

const clearSearch = () => {
  searchQuery.value = ''
  isFocused.value = false
  hasSearched.value = false
  difySearchResult.value = null
  difySearchError.value = null
  difySearchResults.value = []
  showAiSearchPage.value = false
  if (searchInput.value) {
    searchInput.value.blur()
  }
}

const navigate = (path: string) => {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    window.open(path, '_blank');
  } else {
  router.push(path);
  }
  searchQuery.value = '';
  isFocused.value = false;
};

// Dify 搜索处理
const performDifySearch = async (query: string) => {
  if (!query.trim()) {
    difySearchResult.value = null
    difySearchError.value = null
    showAiSearchPage.value = false
    return
  }

  // 显示 AI 搜索结果页面
  showAiSearchPage.value = true
  isDifySearching.value = true
  difySearchError.value = null
  difySearchResult.value = null
  
  try {
    const response = await searchDify(query)
    
    // 解析 AI 回答和文档引用
    const answerResult = response.results.find(r => r.metadata?.type === 'answer')
    const referenceResults = response.results.filter(r => r.metadata?.type === 'reference')
    
    if (answerResult || referenceResults.length > 0) {
      difySearchResult.value = {
        answer: answerResult?.content || '',
        references: referenceResults.map(ref => ({
          title: ref.title,
          content: ref.content,
          dataset: ref.metadata?.dataset_name,
          score: ref.score
        }))
      }
    } else {
      difySearchError.value = isZh.value ? '未找到相关结果，请尝试其他关键词。' : 'No results found. Please try different keywords.'
    }
  } catch (error: any) {
    console.error('Dify search error:', error)
    difySearchError.value = error.message || (isZh.value ? '搜索失败，请稍后重试。' : 'Search failed. Please try again later.')
    difySearchResult.value = null
  } finally {
    isDifySearching.value = false
  }
}

// 关闭 AI 搜索结果页面
const handleCloseAiSearchPage = () => {
  showAiSearchPage.value = false
}

// 重试 AI 搜索
const handleRetryAiSearch = () => {
  if (searchQuery.value.trim()) {
    performDifySearch(searchQuery.value.trim())
  }
}

// 处理 Dify 结果点击（已废弃，现在使用独立页面）
const handleDifyResultClick = (item: DifySearchResult) => {
  if (item.url) {
    if (item.url.startsWith('http://') || item.url.startsWith('https://')) {
      window.open(item.url, '_blank')
    } else {
      router.push(item.url)
    }
  } else {
    // 如果没有 URL，可以显示详细内容或复制到剪贴板
    console.log('Dify result clicked:', item)
  }
  searchQuery.value = ''
  isFocused.value = false
}

const handleResultItemMouseDown = (event: MouseEvent) => {
  if (event.button === 2) {
    isRightClicking.value = true;
    event.preventDefault();
    isFocused.value = true;
    setTimeout(() => {
      isRightClicking.value = false;
    }, 300);
  }
};

const handleResultItemContextMenu = (event: MouseEvent) => {
  event.stopPropagation();
  isRightClicking.value = true;
  setTimeout(() => {
    isRightClicking.value = false;
  }, 300);
};

const handleSearchResultsMouseDown = (event: MouseEvent) => {
  if (event.button === 2) {
    isRightClicking.value = true;
    event.preventDefault();
    isFocused.value = true;
    setTimeout(() => {
      isRightClicking.value = false;
    }, 300);
  }
};

const handleSearchResultsContextMenu = (event: MouseEvent) => {
  event.stopPropagation();
  isRightClicking.value = true;
  setTimeout(() => {
    isRightClicking.value = false;
  }, 300);
};

const syncSearchResultsWidth = () => {
  if (searchBarRef.value && searchResultsRef.value) {
    const searchShell = searchShellRef.value
    if (searchShell) {
      const shellRect = searchShell.getBoundingClientRect()
      const shellPadding = window.getComputedStyle(searchShell).paddingLeft
    }
  }
}

onMounted(() => {
  syncSearchResultsWidth()
  
  const handleResize = () => {
    syncSearchResultsWidth()
  }
  window.addEventListener('resize', handleResize)
  
  const handleKeyDown = (e: KeyboardEvent) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      focusInput();
    }
    if (e.key === 'Escape' && isFocused.value) {
      clearSearch();
    }
  };
  window.addEventListener('keydown', handleKeyDown);

  const handleClickOutside = (e: MouseEvent) => {
    if (e.button === 2) {
      return;
    }
    const target = e.target as HTMLElement;
    if (!target.closest('.search-shell')) {
      // 如果已经搜索过，点击外部区域时不清除搜索状态，只关闭焦点
      // 如果未搜索且输入框为空，则关闭
      if (hasSearched.value) {
        isFocused.value = false;
      } else if (isFocused.value && searchQuery.value.length === 0) {
        isFocused.value = false;
      }
    }
  };
  document.addEventListener('click', handleClickOutside);
  document.addEventListener('mousedown', handleClickOutside);

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
    window.removeEventListener('keydown', handleKeyDown);
    document.removeEventListener('click', handleClickOutside);
    document.removeEventListener('mousedown', handleClickOutside);
  });
});

watch([isFocused, searchQuery], () => {
  if (isFocused.value && searchQuery.value.length > 0) {
    setTimeout(() => {
      syncSearchResultsWidth()
    }, 0)
    
    // 本地搜索仍然实时触发（用于显示文档搜索结果）
    // AI 搜索改为手动触发（在 handleSearch 中）
  } else if (!isFocused.value) {
    // 失去焦点时，如果没有搜索过，清空状态
    if (!hasSearched.value) {
      difySearchResult.value = null
      difySearchError.value = null
    }
  }
})

onUnmounted(() => {
  // 清理工作
})
</script>