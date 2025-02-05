<template>
  <!-- 测试SVG图标的使用 -->
  <!-- svg: 图标外部容器节点，内部需要与use标签结合使用 -->
  <svg :style="{ width, height }">
    <!-- xlink:herf 执行使用哪一个图标,属性值务必是#icon-图标名 -->
    <use :xlink:href="prefix + name" :fill="color"></use>
  </svg>
</template>

<script setup lang="ts">
defineProps({
  // xlink:herf 属性的前缀
  prefix: {
    type: String,
    default: '#icon-',
  },
  // 提供使用的名字
  name: String,
  // 接收父组件传递的颜色
  color: {
    type: String,
    default: '',
  },
  // 接收父组件传递过来的图标的宽度
  width: {
    type: String,
    default: '16px',
  },
  height: {
    type: String,
    default: '16px',
  },
})
</script>

<style scoped lang="scss"></style>
