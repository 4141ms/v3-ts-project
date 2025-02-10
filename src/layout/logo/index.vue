<template>
  <div class="logo" v-if="setting.logoHidden">
    <img :src="setting.logo" alt="" />
    <p>{{ setting.title }}</p>
  </div>
</template>

<script setup name="logo" lang="ts">
// 引入项目logo | 标题配置
import setting from '@/setting'
</script>

<style scope>
.logo {
  width: 100%;
  height: 50px;
  color: white;
  display: flex;
  align-items: center;
  padding: 20px;
  justify-content: center;
  img {
    width: 40px;
    height: 40px;
    border-radius: 10px;
  }
  p {
    font-size: 20px;
    margin-left: 10px;
  }
}
</style>
