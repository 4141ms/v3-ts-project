// 路由鉴权：鉴权：项目中路由能不能被访问的权限的设置
import router from './router'
import setting from './setting'
import nprogress from 'nprogress'
// 引入进度条样式
import 'nprogress/nprogress.css'
nprogress.configure({ showSpinner: false })
// 获取用户相关的小仓库内部token数据，去判断用户是否登录成功
import useUserStore from './store/modules/user'
import pinia from './store'
// 这里在系统在建设中，需要先引入大仓库才能获取到数据
let userStore = useUserStore(pinia)

// 全局守卫：项目当中任意路由切换都会触发的钩子
// 全局前置守卫
router.beforeEach(async (to: any, from: any, next: any) => {
  document.title = `${setting.title} - ${to.meta.title}`
  // next: 路由放行函数
  nprogress.start()
  //   获取token，去判断用户登录、还是未登录
  let token = userStore.token
  //   获取用户名字
  let username = userStore.username
  if (token) {
    // 登录成功，不能访问login，指向首页
    if (to.path == '/login') {
      next({ path: '/' })
    } else {
      // 登录成功访问其他路由（登录排除）
      // 有用户信息
      if (username) {
        next()
      } else {
        // 如果没有用户信息，在守卫这里发请求获取到了用户信息再放行
        try {
          await userStore.userInfo()
        } catch (error) {
          // token过期；用户手动修改本地存储的token
          // 退出登录
          userStore.userLogout()
          next({ path: '/login', query: { redirect: to.path } })
        }
      }
      next()
    }
  } else {
    // 用户未登录判断
    if (to.path == '/login') {
      next()
    } else {
      next({ path: 'login', query: { redirect: to.path } })
    }
  }
  next()
})

// 全局后置守卫
router.afterEach((to: any, from: any) => {
  nprogress.done()
})

// 用户未登录，只能访问login
// 用户登录，仅login不能访问
