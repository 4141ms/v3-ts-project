// 书写品牌管理模块接口
import request from '../../../utils/request'
import type { TradeMarkResponseData } from './type'
// 品牌管理模块接口
enum API {
  // 获取已有品牌接口
  TRADEMARK_URL = '/product',
}

// 获取已有品牌的接口方法
// page : 获取第几页 -- 默认第一页
// limit：获取几个已有的品牌
export const reqHasTrademark = (page: number, limit: number) =>
  request.get<any, TradeMarkResponseData>(API.TRADEMARK_URL, {
    params: {
      pagenum: page,
      pagesize: limit,
    },
  })
