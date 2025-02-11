<template>
  <div class="tabber">
    <!-- 顶部左侧 -->
    <div class="tabber_left">
      <Breadcrumb></Breadcrumb>
    </div>
    <!-- 顶部右侧 -->
    <div class="tabber_right">
      <Setting></Setting>
    </div>
  </div>
</template>

<script setup name="" lang="ts">
import Breadcrumb from './breadcrumb/index.vue'
import Setting from './setting/index.vue'
</script>

<style scope>
.tabber {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  background-image: linear-gradient(
    to right,
    white,
    rgb(250 182 182 / 15%),
    white
  );
  .tabber_left {
    display: flex;
    align-items: center;
    margin-left: 20px;
  }

  .tabber_right {
    display: flex;
    align-items: center;
  }
}
</style>
