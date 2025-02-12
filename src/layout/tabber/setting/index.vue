<template>
  <el-button
    size="small"
    icon="Refresh"
    circle
    @click="updateRefsh"
  ></el-button>
  <el-button
    size="small"
    icon="FullScreen"
    circle
    @click="fullScreen"
  ></el-button>
  <el-button size="small" icon="Setting" circle></el-button>
  <img
    :src="userStore.avatar"
    style="width: 24px; height: 24px; margin: 0 10px; border-radius: 50%"
  />
  <el-dropdown>
    <span class="el-dropdown-link">
      {{ userStore.username }}
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup name="Setting" lang="ts">
// 获取骨架小仓库
import useLayoutSettingStore from '@/store/modules/setting'
import useUserStore from '../../../store/modules/user'
import { useRouter, useRoute } from 'vue-router'

let $router = useRouter()
let $route = useRoute()

let layoutSettingStore = useLayoutSettingStore()
let userStore = useUserStore()

// 刷新按钮点击回调
const updateRefsh = () => {
  layoutSettingStore.refsh = !layoutSettingStore.refsh
}
// 全屏按钮点击回调
const fullScreen = () => {
  // DOM对象的一个属性：可以用来判断是不是全屏模式
  let full = document.documentElement.requestFullscreen()
  if (!full) {
    // 文档根节点的方法requestFullscreen。实现全屏
    document.documentElement.requestFullscreen()
  } else {
    // 退出全屏
    document.exitFullscreen()
  }
}
// 退出登录
const logout = () => {
  // 1:向服务器发退出请求
  // 2.将仓库中相关数据清空
  // 3.跳转到登录界面
  userStore.userLogout()
  // query参数，将退出时的路由携带出去
  $router.push({ path: '/login', query: { redirect: $route.path } })
}
</script>

<style scope></style>
