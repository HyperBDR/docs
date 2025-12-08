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
            @keydown.enter="triggerSearch"
            @keydown.esc="clearSearch"
          />
          <div class="shortcut-hint" v-if="searchQuery.length === 0">
            <span class="key">Ctrl</span>
            <span class="key">K</span>
          </div>
          <div class="esc-hint" v-if="isFocused && searchQuery.length > 0">
            <span class="key">{{ isZh ? 'ESC 关闭' : 'ESC to close' }}</span>
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
          <div v-if="filteredResults.length > 0">
            <div class="result-group-title">{{ isZh ? '建议' : 'Suggestions' }}</div>
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
          <div v-else class="no-results">
            <div class="no-results-text">{{ isZh ? '未找到结果。' : 'No results found.' }}</div>
          </div>
        </div>
      </div>
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
  setTimeout(() => {
    if (!isRightClicking.value) {
      isFocused.value = false;
    }
  }, 150); 
};

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
  searchInput.value?.blur()
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
    const searchBarRect = searchBarRef.value.getBoundingClientRect()
    searchResultsRef.value.style.width = `${searchBarRect.width}px`
    searchResultsRef.value.style.left = '0'
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
</script>