// 自定义插件来管理全局组件

// 引入项目中的全部全局组件
import SvgIcon from './SvgIcon/index.vue'
import Pagination from './Pagination/index.vue'

// 全局对象
import type { App, Component } from 'vue'
const components: { [name: string]: Component } = { SvgIcon, Pagination }

export default {
  // 务必叫做install方法
  install(app: App) {
    // 注册项目全部的全局组件
    Object.keys(components).forEach((key: string) => {
      // 注册为全局组件
      app.component(key, components[key])
    })
  },
}
