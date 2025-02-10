// 对外暴露配置路由(常量路由)
export const constantRoute = [
  {
    // 登录界面
    path: '/login',
    component: () => import('../views/login/index.vue'),
    name: 'login', //命名路由
    meta: {
      title: '登录',
      hidden: true, //代表路由标题在菜单中是否隐藏 true:隐藏 false:不隐藏
      icon: 'Promotion',
    },
  },
  {
    // 登录成功展示数据的路由
    path: '/',
    component: () => import('@/layout/index.vue'),
    name: 'layout', //命名路由
    meta: {
      title: 'layout',
      hidden: false,
      icon: 'Discount',
    },
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
          hidden: false,
          icon: 'House',
        },
      },
    ],
  },
  {
    // 404
    path: '/404',
    component: () => import('../views/404/index.vue'),
    name: '404', //命名路由
    meta: {
      title: '404',
      hidden: true,
      icon: 'CloseBold',
    },
  },
  {
    path: '/:pathMarch(.*)*',
    redirect: '/404',
    name: 'Any', //命名路由
    meta: {
      title: '任意路由',
      hidden: true,
      icon: 'More',
    },
  },
]
