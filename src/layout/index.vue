<template>
  <div class="layout_container">
    <!-- left menu -->
    <div class="layout_slider" :class="{ fold: layoutSetting.fold }">
      <Logo />
      <!-- 展示菜单 -->
      <!-- 滚动组件 -->
      <el-scrollbar class="scrollbar">
        <!-- 菜单组件 -->
        <el-menu :collapse="layoutSetting.fold" :default-active="$router.path">
          <!-- 根据路由动态生成菜单菜单组件 -->
          <Menu :menuList="userStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- top gav -->
    <div class="layout_tabbar" :class="{ fold: layoutSetting.fold }">
      <Tabber />
    </div>
    <!-- content show -->
    <div class="layout_main" :class="{ fold: layoutSetting.fold }">
      <Main />
    </div>
  </div>
</template>

<script setup name="Tabber" lang="ts">
// 获取路由对象
import { useRoute } from 'vue-router'
import Logo from './logo/index.vue'
import Menu from './menu/index.vue'
import Main from './main/index.vue'
import Tabber from './tabber/index.vue'

// 获取用户相关的小仓库
import useUserStore from '@/store/modules/user.ts'
// 获取layout配置相关仓库
import useLayoutSettingStore from '@/store/modules/setting'

let userStore = useUserStore()
let layoutSetting = useLayoutSettingStore()

// 获取路由对象
let $router = useRoute()
console.log($router.fullPath)
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
    transition: all 0.5s;

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

    &.fold {
      width: 50px;
    }
  }
  .layout_tabbar {
    position: fixed;
    width: calc(100% - 260px);
    height: 50px;
    background-color: #ffffff;
    top: 0px;
    left: 260px;
    transition: all 0.5s;

    &.fold {
      width: calc(100vw - 50px);
      left: 50px;
    }
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
    transition: all 0.5s;

    &.fold {
      width: calc(100vw - 50px);
      left: 50px;
    }
  }
}
</style>
