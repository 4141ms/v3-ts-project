export interface ResponseData {
  status: number
  message: string
}

// 已有品牌的ts类型数据
export interface TradeMark {
  ID?: number
  CreatedAt?: string | null
  UpdateAt?: string | null
  DeletedAt?: string | null
  name: string
  logoUrl: string
}

// 获取的已有全部品牌的数据ts类型
export interface TradeMarkResponseData extends ResponseData {
  data: Array<TradeMark>
  total: number
}
