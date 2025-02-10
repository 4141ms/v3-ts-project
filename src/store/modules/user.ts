// 创建用户相关的小仓库
import { defineStore } from 'pinia'
// 引入数据类型
import type { loginForm, loginResponseData } from '../../api/user/type'
import type { UserState } from './types/type'
// 引入操纵本地存储的工具方法
import { SET_TOKEN, GET_TOKEN } from '@/utils/token'
// 引入接口
import { reqLogin } from '@/api/user'
// 引入路由（常量路由）
import { constantRoute } from '../../router/routers'

let useUserStore = defineStore('User', {
  // 小仓库存储数据的地方
  state: (): UserState => {
    return {
      token: GET_TOKEN(),
      menuRoutes: constantRoute, //仓库存储生成菜单需要数组（路由）
    }
  },
  // 异步 | 逻辑的地方
  actions: {
    // 用户登录的方法
    async userLogin(data: loginForm) {
      // 登录请求
      let result: loginResponseData = await reqLogin(data)
      // 登录请求：成功200->token
      // 登录请求：失败201->登录错误的信息
      if (result.code == 200) {
        // pinia仓库存储一下token
        // 由于pinia | vuex 存储数据其实是利用js对象
        this.token = result.data.token as string
        // 本地持久化存储一份数据
        SET_TOKEN(result.data.token as string)
        // 返回成功的对象
        return 'ok'
      } else {
        // 返回失败的
        return Promise.reject(new Error(result.data.message))
      }
    },
  },
  getters: {},
})

// 对外暴露获取小仓库的方法
export default useUserStore
