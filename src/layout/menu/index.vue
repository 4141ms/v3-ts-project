<template>
  <template v-for="(item, index) in list" :key="item.path">
    <!-- 没有子路由 -->
    <el-menu-item v-if="!item.children" :index="item.path">
      <template #title>
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <span>{{ item.meta.title }}</span>
      </template>
    </el-menu-item>
    <!-- 只有一个子路由, item.children不能为空 -->
    <el-menu-item
      v-if="item.children && item.children.length == 1"
      :index="item.children[0].path"
    >
      <template #title>
        <el-icon>
          <component :is="item.children[0].meta.icon"></component>
        </el-icon>
        <span>{{ item.children[0].meta.title }}</span>
      </template>
    </el-menu-item>
    <!-- 有子路由且个数大于一个 -->
    <el-sub-menu
      v-if="item.children && item.children.length > 1"
      :index="item.path"
    >
      <template #title>
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <span>{{ item.meta.title }}</span>
      </template>
      <Menu :menuList="item.children"></Menu>
    </el-sub-menu>
  </template>
</template>

<script setup lang="ts">
// 获取父组件传递过来的全部路由数组
let { menuList } = defineProps(['menuList'])
// 过滤掉隐藏组件
let list = menuList.filter((item: any) => {
  if (!item.meta.hidden) return item
})
</script>
<script lang="ts">
// 实现递归时，组件需要导出并命名
export default {
  name: 'Menu',
}
</script>
<style scope></style>
