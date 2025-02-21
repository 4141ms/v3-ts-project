// 登录接口需要携带参数ts类型
export interface loginFormData {
  username: string
  password: string
}

interface dataType {
  token?: string
  message?: string
}

// 定义全部接口返回数据时都有的ts类型
export interface ResponseData {
  status: number
  message: string
}

// 定义登录接口返回数据类型
export interface loginResponseData extends ResponseData {
  data: string
}

// 定义获取用户信息返回数据类型
export interface userInfoRespData extends ResponseData {
  avatar: string
  username: string
  id: number
  roles?: string[]
  buttons?: string[]
  routes?: string[]
}

// interface user {
//   checkUser: userInfo
// }

// 定义服务器返回用户信息相关的数据类型
// export interface userResponseData {
//   code: number
//   data: user
// }
