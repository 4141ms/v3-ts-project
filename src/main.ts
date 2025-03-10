// main.ts
import { createApp } from 'vue'
// 引入element-plus插件与样式
import ElementPlus from 'element-plus'
// 引入模板的全局的样式
import './styles/index.scss'
//@ts-ignore
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
import App from './App.vue'

// 在入口文件引入svg插件
import('virtual:svg-icons-register' as any)
// 在入口文件引入src/index.ts文件,通过app.use方法安装自定义插件
import gloablComponent from './components/index'
// 引入路由
import router from './router'
// 引入仓库
import pinia from './store'
import './permission.ts'

// 获取应用实例对象
const app = createApp(App)
// 安装 element-plus 插件,并进行国际化配置
app.use(ElementPlus, {
  locale: zhCn,
})

console.log('查看运行环境配置', import.meta.env)

// 安装仓库
app.use(pinia)

// 安装插件对象
app.use(gloablComponent)

// 注册模板路由
app.use(router)

// 将应用挂载到挂载点上
app.mount('#app')
