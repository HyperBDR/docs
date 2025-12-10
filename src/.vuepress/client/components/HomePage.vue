<template>
  <div class="search-home-wrapper">
    <div class="bg-decoration"></div>

    <div class="hero">
      <h1 class="hero-title">
        <div class="hero-title-line">
          <span class="brand">HyperMotion & HyperBDR</span>
          <span class="docs">{{ isZh ? ' 文档' : ' Documentation' }}</span>
        </div>
      </h1>
      <p class="hero-subtitle">{{ isZh ? '全球领先的云原生迁移与灾备解决方案，让您的云主机在多云环境间自由迁移与无忧备份。' : 'The world\'s leading cloud-native migration and disaster recovery solution, empowering seamless migration and reliable backup across multi-cloud environments' }}</p>

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
            @keydown.esc="clearSearch"
          />
          <div class="search-actions">
          <div class="shortcut-hint" v-if="searchQuery.length === 0">
            <span class="key">Ctrl</span>
            <span class="key">K</span>
          </div>
          <div class="esc-hint" v-if="isFocused && searchQuery.length > 0">
              <span class="key">{{ isZh ? 'ESC 关闭' : 'ESC to close' }}</span>
            </div>
          </div>
        </div>
        <div 
          class="search-results" 
          ref="searchResultsRef" 
          v-show="isFocused && searchQuery.length > 0"
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
                <div class="result-title">
                  <span v-if="item.header" class="result-page-title">{{ item.pageTitle }}</span>
                  <span v-if="item.header" class="result-separator"> > </span>
                  <span :class="item.header ? 'result-header-title' : 'result-page-title'">
                    {{ item.header || item.pageTitle }}
                  </span>
                </div>
                <span class="result-path">{{ item.category || (isZh ? '文档' : 'Documentation') }} • {{ item.path }}</span>
              </div>
              <div class="enter-icon">↵</div>
            </a>
          </div>

          <!-- 无结果 -->
          <div v-if="filteredResults.length === 0 && searchQuery.length > 0" class="no-results">
            <div class="no-results-content">
              <div class="no-results-icon">
                <i class="fa-solid fa-circle-question"></i>
              </div>
              <div class="no-results-title">{{ isZh ? '未找到相关结果' : 'No results found' }}</div>
              <div class="no-results-description">
                {{ isZh ? '没有找到与 "' + searchQuery + '" 相关的文档。' : 'No documents found matching "' + searchQuery + '".' }}
              </div>
              <div class="no-results-ai-suggestion">
                <div class="ai-suggestion-label">{{ isZh ? '💡 试试 AI 智能搜索' : '💡 Try AI Search' }}</div>
                <div class="ai-suggestion-text">{{ isZh ? 'AI 可以理解您的意图，帮您找到更准确的结果' : 'AI understands your intent and finds more accurate results' }}</div>
                <button 
                  class="ai-search-button-no-results" 
                  @click.stop="openAiSearch"
                  :title="isZh ? 'AI 智能搜索' : 'AI Search'"
                >
                  <i class="fa-solid fa-robot"></i>
                  <span class="ai-search-label">{{ isZh ? '使用 AI 搜索' : 'Use AI Search' }}</span>
                  <i class="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 核心功能按钮 -->
    <div class="core-actions">
      <a 
        v-for="(action, index) in coreActionsList"
        :key="index"
        :href="action.link"
        class="core-action-button"
        @click.prevent="navigate(action.link)"
      >
        <div class="core-action-icon">
          <i :class="action.icon"></i>
        </div>
        <div class="core-action-content">
          <div class="core-action-title">{{ action.title }}</div>
          <div class="core-action-desc">{{ action.desc }}</div>
        </div>
        <div class="core-action-arrow">
          <i class="fa-solid fa-arrow-right"></i>
        </div>
      </a>
    </div>

    <!-- SaaS 快速体验展示区域 -->
    <div v-if="saasQuickExperienceConfig.enabled" class="saas-wrapper">
      <section class="saas-section">
        <div class="saas-section-title">{{ saasQuickExperienceConfig.title }}</div>
        <p v-if="saasQuickExperienceConfig.subtitle" class="saas-description">{{ saasQuickExperienceConfig.subtitle }}</p>
        <div class="saas-actions">
          <a
            v-for="(product, index) in saasQuickExperienceConfig.products"
            :key="index"
            :href="product.link"
            class="saas-action-button"
            :style="{ '--product-color': product.color || '#667eea' }"
            @click.prevent="navigate(product.link)"
          >
            <div class="saas-action-icon">
              <img v-if="product.icon && product.icon.endsWith('.png')" :src="product.icon" :alt="product.name" />
              <i v-else :class="product.icon"></i>
            </div>
            <div class="saas-action-content">
              <div class="saas-action-title">{{ product.name }}</div>
              <div class="saas-action-desc">{{ product.description }}</div>
            </div>
            <div class="saas-action-try">
              <span>{{ isZh ? '体验' : 'Try' }}</span>
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </a>
        </div>
      </section>
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
import { homepageSections, coreActions, saasQuickExperience } from '../homepage.config.js'
import { homepageSectionsZh, coreActionsZh, saasQuickExperienceZh } from '../homepage.config.zh.js'

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

// AI 搜索 URL
const AI_SEARCH_URL = 'https://ai.oneprocloud.com/chat/qWGp3yX8ain2550b'

// 判断是否为中文环境
const isZh = computed(() => {
  const locale = routeLocale.value
  return locale === '/zh/' || locale.startsWith('/zh')
})

// 根据语言选择配置
const sections = computed(() => {
  return isZh.value ? homepageSectionsZh : homepageSections
})

const coreActionsList = computed(() => {
  return isZh.value ? coreActionsZh : coreActions
})

const saasQuickExperienceConfig = computed(() => {
  return isZh.value ? saasQuickExperienceZh : saasQuickExperience
})

const filteredResults = computed(() => {
  const query = searchQuery.value.trim()
  if (!query) {
    return []
  }
  
  const results = searchSuggestions.value || []
  
  return results.map((item: any) => {
    // 构建完整标题：如果有章节标题，显示为 "页面标题 > 章节标题"
    let fullTitle = item.title || 'Untitled'
    if (item.header) {
      fullTitle = `${item.title} > ${item.header}`
    }
    
    return {
      title: fullTitle,
      pageTitle: item.title || 'Untitled',
      header: item.header || null,
      path: item.link || '#',
      category: item.header ? 'Section' : 'Page'
    }
  })
})

const focusInput = () => {
  searchInput.value?.focus();
};

const handleBlur = () => {
  if (isRightClicking.value) {
    return;
  }
  setTimeout(() => {
    if (!isRightClicking.value) {
    isFocused.value = false;
    }
  }, 150); 
};

// 打开 AI 搜索页面
const openAiSearch = () => {
  if (typeof window === 'undefined') return
  window.open(AI_SEARCH_URL, '_blank')
}

const triggerSearch = () => {
  if (typeof window === 'undefined') return
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
    if (typeof document === 'undefined') return
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
  if (searchInput.value) {
    searchInput.value.blur()
  }
}

const navigate = (path: string) => {
  if (typeof window === 'undefined') return
  if (path.startsWith('http://') || path.startsWith('https://')) {
    window.open(path, '_blank');
  } else {
  router.push(path);
  }
  searchQuery.value = '';
  isFocused.value = false;
};


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
  if (typeof window === 'undefined') return
  if (searchBarRef.value && searchResultsRef.value) {
    const searchShell = searchShellRef.value
    if (searchShell) {
      const shellRect = searchShell.getBoundingClientRect()
      const shellPadding = window.getComputedStyle(searchShell).paddingLeft
    }
  }
}

onMounted(() => {
  if (typeof window === 'undefined') return
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
      if (isFocused.value && searchQuery.value.length === 0) {
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
  }
})

onUnmounted(() => {
  // 清理工作
})
</script>
