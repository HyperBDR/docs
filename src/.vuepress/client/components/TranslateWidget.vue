<template>
  <Teleport v-if="mounted" to=".vp-navbar-end">
    <div class="translate-widget notranslate" translate="no">
      <div v-if="isTranslating" class="translate-loading">
        <div class="translate-spinner"></div>
        <span>翻译中...</span>
      </div>
      <button class="translate-btn notranslate" @click.stop="toggleMenu">
        <span>🌐</span>
        <span class="translate-label notranslate">{{ currentLang }}</span>
        <span class="translate-arrow notranslate">▾</span>
      </button>
      <div v-if="menuOpen" class="translate-dropdown notranslate" translate="no">
        <div class="translate-item" :class="{ active: currentLang === 'English' }"   @click.stop="switchLang('en')">{{ labels[0] }}</div>
        <div class="translate-item" :class="{ active: currentLang === '简体中文' }" @click.stop="switchLang('zh')">{{ labels[1] }}</div>
        <div class="translate-item" :class="{ active: currentLang === '日本語' }"   @click.stop="switchLang('ja')">{{ labels[2] }}</div>
        <div class="translate-item" :class="{ active: currentLang === 'Español' }"  @click.stop="switchLang('es')">{{ labels[3] }}</div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const mounted = ref(false)
const isTranslating = ref(false)

onMounted(() => {
  const wait = (retries = 20) => {
    if (document.querySelector('.vp-navbar-end')) {
      mounted.value = true
    } else if (retries > 0) {
      setTimeout(() => wait(retries - 1), 100)
    }
  }
  wait()

  // 新页面加载后，如果有翻译标志，显示 loading 直到翻译完成
  if (sessionStorage.getItem('gt_translating')) {
    sessionStorage.removeItem('gt_translating')
    const html = document.documentElement

    // 已经翻译完了
    if (html.classList.contains('translated-ltr')) {
      isTranslating.value = false
      return
    }

    // 还没翻译完，显示 loading 等待
    isTranslating.value = true
    const obs = new MutationObserver(() => {
      if (html.classList.contains('translated-ltr')) {
        obs.disconnect()
        isTranslating.value = false
      }
    })
    obs.observe(html, { attributes: true, attributeFilter: ['class'] })

    // 兜底 15 秒
    setTimeout(() => {
      obs.disconnect()
      isTranslating.value = false
    }, 15000)
  }
})

const menuOpen = ref(false)

const getLangFromCookieAndPath = () => {
  if (typeof window === 'undefined') return 'English'
  if (window.location.pathname.startsWith('/zh/')) return '简体中文'
  const m = document.cookie.match(/googtrans=\/en\/(ja|es)/)
  if (m) return m[1] === 'ja' ? '日本語' : 'Español'
  return 'English'
}

const currentLang = ref(getLangFromCookieAndPath())

const menuLabels = {
  'English':  ['English', 'Chinese', 'Japanese', 'Spanish'],
  '简体中文': ['英语', '简体中文', '日语', '西班牙语'],
  '日本語':   ['英語', '中国語（簡体字）', '日本語', 'スペイン語'],
  'Español':  ['Inglés', 'Chino simplificado', 'Japonés', 'Español'],
}
const labels = computed(() => menuLabels[currentLang.value] || menuLabels['English'])

function toggleMenu() { menuOpen.value = !menuOpen.value }

function setCookie(value) {
  const hostname = location.hostname
  const parts = hostname.split('.')
  const domains = ['', hostname]
  for (let i = 1; i < parts.length; i++) {
    domains.push('.' + parts.slice(i).join('.'))
  }
  domains.forEach(domain => {
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;${domain ? ' domain=' + domain + ';' : ''}`
  })
  if (value) {
    document.cookie = `googtrans=${value}; path=/`
  }
}

function switchLang(lang) {
  menuOpen.value = false
  const cur = window.location.pathname
  const isCurrentlyZh = cur.startsWith('/zh/')

  if (lang === 'zh') {
    setCookie(null)
    const target = isCurrentlyZh ? cur : '/zh' + cur
    window.location.href = window.location.origin + target

  } else if (lang === 'en') {
    setCookie(null)
    const target = isCurrentlyZh ? cur.replace(/^\/zh\//, '/') : cur
    window.location.href = window.location.origin + target

  } else {
    const basePath = isCurrentlyZh ? cur.replace(/^\/zh\//, '/') : cur
    setCookie(`/en/${lang}`)
    sessionStorage.setItem('gt_translating', '1')
    isTranslating.value = true
    setTimeout(() => {
      window.location.href = window.location.origin + basePath
    }, 100)
  }
}

if (typeof window !== 'undefined') {
  document.addEventListener('click', () => { menuOpen.value = false })
  window.addEventListener('langchange', () => { currentLang.value = getLangFromCookieAndPath() })
}
</script>

<style scoped>
.translate-widget {
  position: relative;
  display: inline-flex;
  align-items: center;
  margin-right: 8px;
  order: -1;
}
.translate-btn {
  display: flex; align-items: center; gap: 4px; padding: 4px 10px;
  border: none; background: transparent; color: var(--vp-c-text, #374151);
  font-size: 0.75rem; cursor: pointer;
}
.translate-btn:hover { color: var(--vp-c-brand, #902362); }
.translate-dropdown {
  position: absolute; top: calc(100% + 4px); right: 0; min-width: 80px;
  background: var(--vp-c-bg, white); border: 1px solid var(--vp-c-border, #e5e7eb);
  border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); z-index: 9999; overflow: hidden;
}
.translate-item {
  padding: 3px 8px !important; font-size: 0.75rem; line-height: 1.4 !important; cursor: pointer; color: var(--vp-c-text, #374151);
}
.translate-item:hover { background: var(--vp-c-bg-soft, #f3f4f6); color: var(--vp-c-brand, #902362); }
.translate-item.active { color: var(--vp-c-brand, #902362); font-weight: 500; }
.translate-loading {
  position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(255,255,255,0.6); display: flex; flex-direction: column;
  align-items: center; justify-content: center; z-index: 99999; gap: 12px;
  font-size: 14px; color: #374151;
}
.translate-spinner {
  width: 32px; height: 32px; border: 3px solid #e5e7eb;
  border-top-color: #902362; border-radius: 50%;
  animation: spin 0.8s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }
</style>