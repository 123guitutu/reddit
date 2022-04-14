
export interface ListData {
  data: ListDataDetail;
}

export interface ListDataDetail {
  after: string;
  before: string;
  dist: number;
  children: DataModelWrap[]
}

export interface DataModelWrap {
  data: DataModel;
}
export interface DataModel {
  title: string;
  author_fullname: string;
  created: number;
  num_comments: number;
  key: number;
  num_crossposts : number;
  num: number;
  id: string;
}
