<template>
  <div class="feature">
    <h3>{{ title }}</h3>
    <div class="details">
      <p v-for="(detail, index) in details" :key="index">
        <router-link :to="detail.link">{{ detail.text }}</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    details: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.feature {
  text-align: left; /* 将feature左对齐 */
  margin: 0 1rem;
}
.feature h3 {
  margin: 0;
}
.details {
  margin-top: 0.5rem;
  display: flex; /* 使用flex布局 */
  flex-wrap: wrap; /* 允许内容换行 */
}
.details p {
  margin: 0.5rem 1rem 0.5rem 0;
  display: inline-block; /* 使每个p标签内联显示 */
}
.details p:last-child {
  margin-right: 0; /* 移除最后一个p标签的右边距 */
}
.details p router-link {
  white-space: nowrap; /* 防止文本换行 */
}
</style>
