<template>
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
      <div class="translate-item" :class="{ active: currentLang === 'English' }"     @click.stop="goTo('/')">{{ labels[0] }}</div>
      <div class="translate-item" :class="{ active: currentLang === '简体中文' }"   @click.stop="goTo('/zh/')">{{ labels[1] }}</div>
      <div class="translate-item" :class="{ active: currentLang === '日本語' }"     @click.stop="translateTo('ja')">{{ labels[2] }}</div>
      <div class="translate-item" :class="{ active: currentLang === 'Español' }"    @click.stop="translateTo('es')">{{ labels[3] }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const menuOpen = ref(false)
const isTranslating = ref(false)
let currentLangTarget = null

const getLangFromPath = () => {
  if (typeof window === 'undefined') return 'English'
  if (window.location.pathname.startsWith('/zh/')) return '简体中文'
  const m = document.cookie.match(/googtrans=\/(?:zh-CN|en)\/(ja|es|zh-CN|en)/)
  if (m) return { ja: '日本語', es: 'Español', 'zh-CN': '简体中文', en: 'English' }[m[1]] || 'English'
  return 'English'
}

const currentLang = ref(getLangFromPath())
const menuLabels = {
  'English':  ['English', 'Chinese', 'Japanese', 'Spanish'],
  '简体中文': ['英语', '简体中文', '日语', '西班牙语'],
  '日本語':   ['英語', '中国語（簡体字）', '日本語', 'スペイン語'],
  'Español':  ['Inglés', 'Chino simplificado', 'Japonés', 'Español'],
}
const labels = computed(() => menuLabels[currentLang.value] || menuLabels['English'])

function toggleMenu() { menuOpen.value = !menuOpen.value }

function goTo(path) {
  menuOpen.value = false
  const cur = window.location.pathname
  const target = path === '/' ? cur.replace(/^\/zh\//, '/') : (cur.startsWith('/zh/') ? cur : '/zh' + cur)
  document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
  document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${location.hostname}`
  window.location.href = window.location.origin + target
}

function watchTranslationDone(resolve) {
  const html = document.documentElement
  if (html.classList.contains('translated-ltr') || html.classList.contains('translated-rtl')) {
    resolve(); return
  }
  const obs = new MutationObserver(() => {
    if (html.classList.contains('translated-ltr') || html.classList.contains('translated-rtl')) {
      obs.disconnect(); resolve()
    }
  })
  obs.observe(html, { attributes: true, attributeFilter: ['class'] })
  setTimeout(() => { obs.disconnect(); resolve() }, 8000)
}

async function translateTo(lang) {
  menuOpen.value = false
  currentLangTarget = lang
  isTranslating.value = true
  currentLang.value = lang === 'ja' ? '日本語' : 'Español'

  try {
    // 等 GT 脚本就绪（Promise 只等一次加载，之后立即返回）
    await window.__gtReady

    if (currentLangTarget !== lang) { isTranslating.value = false; return }

    // 每次都重新从 DOM 查，不用缓存的引用
    const select = document.querySelector('select.goog-te-combo')
    if (!select) throw new Error('select not found in DOM')

    select.value = lang
    select.dispatchEvent(new Event('change'))

    await new Promise(resolve => watchTranslationDone(resolve))
  } catch (e) {
    console.warn('translateTo failed:', e)
  } finally {
    isTranslating.value = false
  }
}

if (typeof window !== 'undefined') {
  document.addEventListener('click', () => { menuOpen.value = false })
  window.addEventListener('popstate', () => { currentLang.value = getLangFromPath() })
  window.addEventListener('langchange', () => { currentLang.value = getLangFromPath() })
}
</script>

<style scoped>
.translate-widget {
  position: relative; display: inline-flex; align-items: center; margin-right: 8px;
}
.translate-btn {
  display: flex; align-items: center; gap: 4px; padding: 4px 10px;
  border: none; background: transparent; color: var(--vp-c-text, #374151);
  font-size: 14px; cursor: pointer;
}
.translate-btn:hover { color: var(--vp-c-brand, #1C64F2); }
.translate-dropdown {
  position: absolute; top: calc(100% + 6px); right: 0; min-width: 130px;
  background: var(--vp-c-bg, white); border: 1px solid var(--vp-c-border, #e5e7eb);
  border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); z-index: 9999; overflow: hidden;
}
.translate-item {
  padding: 8px 16px; font-size: 14px; cursor: pointer; color: var(--vp-c-text, #374151);
}
.translate-item:hover { background: var(--vp-c-bg-soft, #f3f4f6); color: var(--vp-c-brand, #1C64F2); }
.translate-item.active { color: var(--vp-c-brand, #1C64F2); font-weight: 500; }
.translate-loading {
  position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(255,255,255,0.6); display: flex; flex-direction: column;
  align-items: center; justify-content: center; z-index: 99999; gap: 12px;
  font-size: 14px; color: #374151;
}
.translate-spinner {
  width: 32px; height: 32px; border: 3px solid #e5e7eb;
  border-top-color: #1C64F2; border-radius: 50%;
  animation: spin 0.8s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }
</style>