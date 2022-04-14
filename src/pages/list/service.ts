/* eslint-disable no-param-reassign */
/* eslint-disable no-continue */
/* eslint-disable no-empty */
import request, { requestBase } from '@/utils/request';
import { BaseModel, TableListData, TableListParams } from '@/common/model';

import {
  DataModel,
} from './data'

export async function fetchList(params: TableListParams) {
  type ResModel = TableListData<DataModel>;
  let res: ResModel | undefined;
  try {
    res = await request<ResModel>('/api/rule', {
      method: 'GET',
      params,
    });
  } catch (e) { }
  return res;
}


export async function fetchListDetail(params: { id: number }) {
  type ResModel = DataModel;
  let res: ResModel | undefined;
  try {
    res = await request<ResModel>('/api/rule/detail', {
      method: 'GET',
      params,
    });
  } catch (e) { }
  return res;
}
