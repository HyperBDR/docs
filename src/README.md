---
home: true
icon: home
# title: HyperBDR Docs
title: "Home"
heroText: HyperBDR Docs
# heroImage: /logo@1x.png
tagline: Useful Disaster Recovery Tools —— HyperBDR
# bgImage: /bg@1x.png
# bgImageDark: /bg@1x.png
actions:
  - text: Quick Start
    icon: arrow-right
    link: ./checklist/dr-checklist.md
    type: primary

  # - text: Docs
  #   link: ./userguide/poc/

# highlights:
#   - header:
#       # 如果 header 部分有配置，请在这里添加
#       # 例如: text: "Some header text"
#     details: |
#       # 如果有 details 部分，请在这里添加
#       # 例如: "Some details text"
#     features:
#       - title: Solutions
#         icon: thumbs-up
#         details: |
#           <ul>
#             <li><a href="/userguide/poc/" target="_blank" rel="noopener" style="color: #8cccd5;">Huawei Cloud</a></li>
            
#           </ul>

#       - title: Pre Sales
#         icon: handshake
#         details: |
#           <ul>
#             <li><a href="/userguide/presales/" target="_blank" rel="noopener" style="color: #8cccd5;">HyperBDR Pre Sales</a></li>
#           </ul>   

#       - title: Manual
#         icon: book
#         details: |
#           <ul>
#             <li><a href="/userguide/dr-usage-guide/" target="_blank" rel="noopener" style="color: #8cccd5;">HyperBDR User Manual</a></li>
#           </ul>

#       - title: FAQ
#         icon: person-circle-question
#         details: |
#           <ul>
#             <li><a href="/userguide/faq/faq.md" target="_blank" rel="noopener" style="color: #8cccd5;">Frequently Asked Questions</a></li>
#           </ul>



copyright: false
# footer: Theme by <a href="https://theme-hope.vuejs.press/" target="_blank">VuePress Theme Hope</a> | MIT Licensed, Copyright © 2019-present Mr.Hope
---

<!-- This is an example of a project homepage. You can place your main content here.

To use this layout, you need to set `home: true` in the page front matter.

For related descriptions of configuration items, please see [Project HomePage Layout Config](https://theme-hope.vuejs.press/guide/layout/home/). -->

<!-- 在首页或其他Markdown文件中直接插入HTML -->
<div class="features-container">
  <div class="feature">
    <h2><i class="fas fa-thumbs-up feature-icon"></i> Solutions</h2>
    <ul>
      <li><a href="/userguide/">Huawei Cloud</a></li>
      <!-- <li><a href="/aws-userguide/">AWS</a></li> -->
    </ul>
  </div>
  <div class="feature">
    <h2><i class="fas fa-handshake feature-icon"></i> Pre Sales</h2>
    <ul>
      <li><a href="/userguide/presales/">HyperBDR Pre Sales</a></li>
    </ul>
  </div>
  <div class="feature">
    <h2><i class="fas fa-book feature-icon"></i> Manual</h2>
    <ul>
      <li><a href="/userguide/dr-usage-guide/">HyperBDR User Manual</a></li>
    </ul>
  </div>
  <div class="feature">
    <h2><i class="fas fa-person-circle-question feature-icon"></i> FAQ</h2>
    <ul>
      <li><a href="/userguide/faq/faq">Frequently Asked Questions</a></li>
    </ul>
  </div>
</div>

<style>
/* 确保样式表文件被正确加载，并在 <head> 中优先引入 */

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
  padding: 1rem;
  border-radius: 4px;
  background-color: transparent; /* 设置背景颜色为完全透明 */
  border: none; /* 去掉边框 */
  box-shadow: none; /* 去掉阴影 */
}

.feature h2 {
  margin-top: 0;
}

.feature ul {
  padding-left: 1rem;
  list-style: none; /* 去掉默认的列表样式 */
}

.feature a {
  color: #007bff;
  text-decoration: none;
}

.feature a:hover {
  text-decoration: underline;
}

</style>
