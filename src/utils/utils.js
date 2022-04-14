import { parse } from 'querystring';
import pathRegexp from 'path-to-regexp';
import router from 'umi/router';

/* eslint no-useless-escape:0 import/prefer-default-export:0 */

const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;
export const isUrl = path => reg.test(path);
export const isAntDesignPro = () => {
  if (ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION === 'site') {
    return true;
  }

  return window.location.hostname === 'preview.pro.ant.design';
}; // 给官方演示站点用，用于关闭真实开发环境不需要使用的特性

export const isAntDesignProOrDev = () => {
  const { NODE_ENV } = process.env;

  if (NODE_ENV === 'development') {
    return true;
  }

  return isAntDesignPro();
};
export const getPageQuery = () => parse(window.location.href.split('?')[1]);
/**
 * props.route.routes
 * @param router [{}]
 * @param pathname string
 */

export const getAuthorityFromRouter = (router = [], pathname) => {
  const authority = router.find(({ path }) => path && pathRegexp(path).exec(pathname));
  if (authority) return authority;
  return undefined;
};


export function goBack() {
  router.goBack();
}


// 毫秒数转换成天时分秒
export const millisecondToDHMS = (m, isShowSeconds = true) => {
  const days = Math.floor(m / (24 * 3600 * 1000));

  const leave1 = m % (24 * 3600 * 1000); // 计算天数后剩余的毫秒数
  const hours = Math.floor(leave1 / (3600 * 1000));

  const leave2 = leave1 % (3600 * 1000); // 计算小时数后剩余的毫秒数
  const minutes = Math.floor(leave2 / (60 * 1000));
  let seconds;
  if (isShowSeconds) {
    const leave3 = leave2 % (60 * 1000); // 计算分钟数后剩余的毫秒数
    seconds = Math.round(leave3 / 1000);
  } else {
    seconds = 0;
  }


  // let timeStr = '';
  // if (days > 0) {
  //   timeStr +=  days + "天" + hours + "小时" + minutes + "分钟" + (seconds ? (seconds + '秒') : '');
  // }

  // if (days === 0 && hours > 0) {
  //   timeStr +=  hours + "小时" + minutes + "分钟" + (seconds ? (seconds + "秒") : '');
  // }

  // if (days === 0 && hours === 0 && minutes > 0) {
  //   timeStr +=  minutes + "分钟" + (seconds ? (seconds + "秒") : '');
  // }

  // if (days === 0 && hours === 0 && minutes === 0 && seconds > 0) {
  //   timeStr +=  seconds ? (seconds + '秒') : '';
  // }

  return hours
}
