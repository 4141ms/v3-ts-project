// 通过vue-router插件实现模板路由配置
import { createRouter, createWebHashHistory } from 'vue-router'
import { constantRoute } from './routers'

// 创建路由器
let router = createRouter({
  // 路由模式
  history: createWebHashHistory(),
  routes: constantRoute,
  //   滚动行为
  scrollBehavior() {
    return {
      left: 0,
      right: 0,
    }
  },
})

export default router
