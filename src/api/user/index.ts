// 统一管理项目用户相关的接口
import request from '../../utils/request'
import type { loginFormData, loginResponseData, userInfoRespData } from './type'
// 统一管理接口
enum API {
  LOGIN_URL = '/login',
  USERINFO_URL = '/user/info',
  LOGOUT_URL = '/logout',
}

// 登录接口方法
export const reqLogin = (data: loginFormData) =>
  request.post<any, loginResponseData>(API.LOGIN_URL, data)
// 获取用户信息接口方法
export const reqUserInfo = () =>
  request.get<any, userInfoRespData>(API.USERINFO_URL)

// 退出登录
export const reqLogout = () => request.post<any, any>(API.LOGOUT_URL)
