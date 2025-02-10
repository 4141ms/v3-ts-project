<template>
  <div class="layout_container">
    <!-- left menu -->
    <div class="layout_slider">
      <Logo />
      <!-- 展示菜单 -->
      <!-- 滚动组件 -->
      <el-scrollbar class="scrollbar">
        <!-- 菜单组件 -->
        <el-menu>
          <!-- 根据路由动态生成菜单菜单组件 -->
          <Menu :menuList="userStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- top gav -->
    <div class="layout_tabbar">456</div>
    <!-- content show -->
    <div class="layout_main">
      789
      <!-- <p style="height: 10000px; background-color: white"></p> -->
    </div>
  </div>
</template>

<script setup name="" lang="ts">
import Logo from './logo/index'
import Menu from './menu/index'

// 获取用户相关的小仓库
import useUserStore from '@/store/modules/user.ts'
let userStore = useUserStore()
</script>

<style scope>
.layout_container {
  width: 100%;
  height: 100vh;
  background: rgb(183, 249, 238);

  .layout_slider {
    width: 260px;
    height: 100vh;
    background-color: #f56c6c;

    .scrollbar {
      width: 100%;
      /* 100vh - logo的高度 */
      height: calc(100vh - 50px);
      --el-menu-bg-color: #f56c6c;
      --el-menu-text-color: white;

      .el-menu {
        border-right: none;
      }
    }
  }
  .layout_tabbar {
    position: fixed;
    width: calc(100% - 260px);
    height: 50px;
    background-color: #ffffff;
    top: 0px;
    left: 260px;
  }
  .layout_main {
    position: absolute;
    width: calc(100% - 260px);
    height: calc(100vh - 50px);
    background-color: rgb(248, 221, 221);
    left: 260px;
    top: 50px;
    overflow: auto;
    padding: 20px;
  }
}
</style>
