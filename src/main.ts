// main.ts
import { createApp } from 'vue'
// 引入element-plus插件与样式
import ElementPlus from 'element-plus'
//@ts-ignore
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
import App from './App.vue'

// 获取应用实例对象
const app = createApp(App)
// 安装 element-plus 插件,并进行国际化配置
app.use(ElementPlus, {
  locale: zhCn,
})
// 将应用挂载到挂载点上
app.mount('#app')
