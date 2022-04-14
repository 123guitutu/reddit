// eslint-disable-next-line import/no-extraneous-dependencies
import { Request, Response } from 'express';
import { parse } from 'url';
import { DataModel } from '@/pages/list/data';
import { TableListParams } from '@/common/model';

// mock tableListDataSource
const genList = (current: number, pageSize: number) => {
  const tableListDataSource: DataModel[] = [];

  for (let i = 0; i < pageSize; i += 1) {
    const index = (current - 1) * 10 + i;
    tableListDataSource.push({
      key: index,
      created: index,
      numComments: pageSize - index,
      title: `TradeCode ${index}`,
      authorFullname: `guitutu${index}`,
      numRecommend: index,
      num: Math.random(),
    });
  }
  // tableListDataSource.reverse();
  return tableListDataSource;
};

let tableListDataSource = genList(1, 100);

function getRule(req: Request, res: Response, u: string) {
  let realUrl = u;
  if (!realUrl || Object.prototype.toString.call(realUrl) !== '[object String]') {
    realUrl = req.url;
  }
  const { current = 1, pageSize = 10 } = req.query;
  const params = (parse(realUrl, true).query as unknown) as TableListParams;


  let dataSource = [...tableListDataSource].slice((current - 1) * pageSize, current * pageSize);
  if (params.sorter) {
    dataSource.reverse();
  }
  // console.log(dataSource)
  if (params.sorter === 'Hot') {
    dataSource = dataSource.sort((prev, next) => {
      let sortNumber = 0;
      // if (prev['created'] - next['created'] > 0) {
      //   sortNumber += -1;
      // } else {
      //   sortNumber += 1;
      // }
      if (prev.numComments - next.numComments > 0) {
        sortNumber += 1;
      } else {
        sortNumber += -1;
      }
      return sortNumber;
    });
  } else if (params.sorter === 'New') {
    dataSource = dataSource.sort((prev, next) => {
      let sortNumber = 0;
      if (prev.created - next.created > 0) {
        sortNumber += 1;
      } else {
        sortNumber += -1;
      }
      return sortNumber;
    });
  } else {
    dataSource = dataSource.sort((prev, next) => {
      let sortNumber = 0;
      if (prev.num - next.num > 0) {
        sortNumber += 1;
      } else {
        sortNumber += -1;
      }
      return sortNumber;
    });
  }

  if (params.status) {
    const status = params.status.split(',');
    let filterDataSource: DataModel[] = [];
    status.forEach((s: string) => {
      filterDataSource = filterDataSource.concat(
        dataSource.filter((item) => {
          if (parseInt(`${item.status}`, 10) === parseInt(s.split('')[0], 10)) {
            return true;
          }
          return false;
        }),
      );
    });
    dataSource = filterDataSource;
  }

  if (params.name) {
    dataSource = dataSource.filter((data) => data.name.includes(params.name || ''));
  }
  const result = {
    data: dataSource,
    total: tableListDataSource.length,
    success: true,
    pageSize,
    current: parseInt(`${params.currentPage}`, 10) || 1,
  };

  return res.json(result);
}

function postRule(req: Request, res: Response, u: string, b: Request) {
  let realUrl = u;
  if (!realUrl || Object.prototype.toString.call(realUrl) !== '[object String]') {
    realUrl = req.url;
  }

  const body = (b && b.body) || req.body;
  const { method, name, desc, key } = body;

  switch (method) {
    /* eslint no-case-declarations:0 */
    case 'delete':
      tableListDataSource = tableListDataSource.filter((item) => key.indexOf(item.key) === -1);
      break;
    case 'post':
      (() => {
        const i = Math.ceil(Math.random() * 10000);
        const newRule = {
          key: tableListDataSource.length,
          href: 'https://ant.design',
          avatar: [
            'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
            'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
          ][i % 2],
          name,
          owner: '曲丽丽',
          desc,
          callNo: Math.floor(Math.random() * 1000),
          status: Math.floor(Math.random() * 10) % 2,
          updatedAt: new Date(),
          createdAt: new Date(),
          progress: Math.ceil(Math.random() * 100),
        };
        tableListDataSource.unshift(newRule);
        return res.json(newRule);
      })();
      return;

    case 'update':
      (() => {
        let newRule = {};
        tableListDataSource = tableListDataSource.map((item) => {
          if (item.key === key) {
            newRule = { ...item, desc, name };
            return { ...item, desc, name };
          }
          return item;
        });
        return res.json(newRule);
      })();
      return;
    default:
      break;
  }

  const result = {
    list: tableListDataSource,
    pagination: {
      total: tableListDataSource.length,
    },
  };

  res.json(result);
}

function getRuleDetail(req: Request, res: Response, u: string) {
  let realUrl = u;
  if (!realUrl || Object.prototype.toString.call(realUrl) !== '[object String]') {
    realUrl = req.url;
  }
  const { id = 0 } = req.query;
  const findItem = tableListDataSource.find(item => item.key === Number(id))

  res.json(findItem);
}

export default {
  'GET /api/rule': getRule,
  'GET /api/rule/detail': getRuleDetail,
  'POST /api/rule': postRule,
};
