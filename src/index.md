---
home: true
tagline: 
actionText: Quick Start →
actionLink: /userguide/checklist/dr-checklist
footer: OnePro Cloud HyperBDR Documentation
---

<div class="features-container">
  <FeatureLink 
    title="Solutions" 
    :details="[
      { text: 'Huawei Cloud', link: '/userguide/' },
    //  { text: 'AWS', link: '/aws-userguide/' }
    ]" 
  />
    <FeatureLink 
    title="Pre Sales" 
    :details="[
      { text: 'HyperBDR Pre Sales', link: '/userguide/presales/' }
    ]" 
  />
  <FeatureLink 
    title="Manual" 
    :details="[
      { text: 'HyperBDR User Manual', link: '/userguide/dr-usage-guide/' }
    ]" 
  />
  <FeatureLink 
    title="FAQ" 
    :details="[
      { text: 'Frequently Asked Questions', link: '/userguide/faq/faq' }
    ]" 
  />
</div>


<style>
.features-container {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: nowrap; /* 确保内容不会换行 */
  margin-top: 2rem;
  max-width: 100%; /* 容器宽度适应屏幕 */
  overflow-x: auto; /* 在屏幕较小时添加水平滚动条 */
}

.feature {
  flex: 0 1 300px; /* 确保每个组件有足够的宽度 */
}

.details {
  display: flex; /* 使用flex布局 */
  flex-wrap: nowrap; /* 确保内容不会换行 */
}

.details p {
  margin: 0 1rem 0 0;
  white-space: nowrap; /* 防止文本换行 */
}

.custom-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}

.action-button {
  display: inline-block;
  padding: 0.5rem 1rem;
  color: #fff;
  background-color: #3eaf7c;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.action-button:hover {
  background-color: #2c9c69;
}
</style>