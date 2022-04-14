export const modelNamespace = {
  // dva namespace
  AppointmentList: 'appointmentList', // 预约签约列表
  AppointmentTimeSheet: 'appointmentTimeSheet', // 预约签约时间段列表
  AppointmentAggree: 'appointmentAggree',
  Doc: 'doc', // 百科资料管理
  Questionair: 'questionair', // 调查问卷
  ReportBroker: "ReportBroker", // 经纪人注册统计
  ReportBrokerVisit: 'ReportBrokerVisit', // 经纪人来访统计

  couponList: 'couponList', // 优惠券列表
  couponDetail: 'couponDetail', // 优惠券信息

  inboundRegister: 'inboundRegister', // 入库登记
  inboundDetail: 'inboundDetail', // 入库明细
  outboundRegister: 'outboundRegister', // 库存详情
  outboundDetail: 'outboundDetail', // 出库详情
  outboundRecord: 'outboundRecord', // 出库记录
  claimInfo: 'claimInfo', // 申领资料设置
  batchDelivery: 'batchDelivery', // 批量出库设置
  inventoryDetail: 'inventoryDetail', // 库存详情
  inventoryRegister: 'inventoryRegister', // 库存盘点
  collectionCode: 'collectionCode'

};

export enum ApproveStatus {
  Success = "audit_pass", // 审核通过
  Reject = "audit_not_pass", // 审核退回
  Approving = "auditing", // 审核中
  UnSubmit = "not_submit", // 未提交
}

export const approveStatusList = [
  {name: "审核通过", value: ApproveStatus.Success},
  {name: "审核退回", value: ApproveStatus.Reject},
  {name: "审核中", value: ApproveStatus.Approving},
  {name: "未提交", value: ApproveStatus.UnSubmit},
]

export enum InboundType {
  CaiGou = "purchase", // 采购入库
  AnChang = "returnBack", // 案场返还
}

export enum AccountType {
  StockIn = 'stock_in', // 入库
  StockOut = 'stock_out', // 出库
}

export const accountTypeList = [
  { name: '入库', value: AccountType.StockIn },
  { name: '出库', value: AccountType.StockOut },
]

export const inboundTypeList = [
  {name: "采购入库", value: InboundType.CaiGou},
  {name: "案场返还", value: InboundType.AnChang},
]

export enum OutboundType {  // 出库类型
  ZhuanXiang = "special",// 专项出库
  PiLiang = "batch",// 批量出库
  BaoFei = "scrap",// 报废出库
  YingXiao = "marketing",// 营销出库
}

export const outboundTypeList = [
  {name: "专项出库", value: OutboundType.ZhuanXiang},
  {name: "批量出库", value: OutboundType.PiLiang},
  {name: "报废出库", value: OutboundType.BaoFei},
  {name: "营销出库", value: OutboundType.YingXiao},
]

export enum QrCodeType {
  ZhuanXiang = 'special', // 专项码
  PiLiang = 'batch', // 批量码
  DingZhi = 'custom' // 定制码
}

export const qrCodeTypeList = [
  {name: "专项码", value: QrCodeType.ZhuanXiang},
  {name: "批量码", value: QrCodeType.PiLiang},
  {name: "定制码", value: QrCodeType.DingZhi},
];


export const qrCodeStatusList = [
  {name: "有效", value: true},
  {name: "失效", value: false},
];



export const meesageDuration = 3 // 弹出消息的时间
