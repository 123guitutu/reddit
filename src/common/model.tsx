import { ValidationRule } from "antd/lib/form";

// export interface BaseModel<T> {
//   // 接口相应基本模型
//   data: T;
//   kind: string
// }

export interface BaseModel<T> {
  // 接口相应基本模型
  success: ResponsCode;
  data: T;
  message: string;
  status: string;
}

// export interface TableListParams {
//   q?: string;
//   limit: number;
//   after: string;
// }

export type TableListParams = {
  status?: string;
  name?: string;
  desc?: string;
  key?: number;
  pageSize?: number;
  current?: number;
  filter?: Record<string, any[]>;
  sorter?: string;
};

// export interface BaseResponse<T> {
//   success: boolean;
//   message: string;
//   code: number;
//   result?: T;
//   timestamp: string;
// }

export interface TableListData<T> {
  data?: T[];
  current?: number;
  pageSize?: number;
  total?: number;
}


// export interface DictionaryInfo {
//   dicId: number;
//   dicName: string;
//   code: string;
//   value: string;
// }

// export interface AreaProjects {
//   areaId: string; // 区域ID
//   areaName: string; // 区域名字
//   projects: Array<{ // 区域项目
//     projectId: number;
//     projectName: string;
//   }>
// }

// interface FieldInfo<K> {
//   name: K;
//   label: string;
//   rules?: ValidationRule[];
// }

// export type FieldsType<T> = {
//   // 表单字段定义
//   [key in keyof T]: FieldInfo<key>;
// };

// export interface AttachmentInfo {
//   ssoId: string; // 阿里云存储文件唯一标识
//   fileName: string; // 文件名
//   url?: string; // 文件地址
//   id: number; // 文件id
// }

// export interface AttachmentProps {
//   fileListOrg?: AttachmentInfo[]; // 初始文件列表
//   onFileListChange: (files: Array<{fileName: string, uid: string}>) => void; // 文件修改成功触发事件
//   disableEdit: boolean; // 是否允许编辑
//   multiple?: boolean; // 是否上传多个
//   title?: string; // 附件标题
//   accept?: string; // 附件类型
//   size?: number; // 附件大小
//   tip?: string // 上传附件的说明
// }

// // 阿里云上传文件需要的信息
// export interface OssInfo {
//   accessKeyId: string; //	上传文件所使用的AccessKeyId	string
//   policy: string; //	上传文件所使用的策略信息	string
//   signature: string; //	上传文件时的签名信息	string
//   url: string; //	上传文件所使用的url(将向此url提交文件信息)
// }
