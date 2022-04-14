import moment from 'moment';
import numeral from 'numeral';

/**
 * 判断是否为空
 */
export function isEmpty(str) {
  let flag = false;
  if (!str || str && isNull(str) || !removeAllSpaces(str)) {
    flag = true;
  }
  return flag;
}

//判断是否有空
export function isNull(str) {
  if (str === "") return true;
  let regu = "^[ ]+$";
  let re = new RegExp(regu);
  return re.test(str);
}


export function CheckVal(a) {
  if (a == null || Number(a) == 0 || a == 'NaN') {
    return "";
  }
  return numeral(a).format('0,0.00');
}

export function CheckValue(a) {
  return numeral(a).format('0.00');
};

export function CheckParse(a) {
  return numeral(numeral(a).format('0.00')).value();
};

export  function CheckABdiv(a, b){
  if (b != null && b != 0 && a != null && a != 0) {
    return numeral(Number(a) / Number(b) * 100).format('0.00');
  }
  return 0

};


////获取中文状态下获取后两位否则前两位
export function getNameSubstr(str) {
  if (str) {
    if (!this.isChinese(str)) {
      if (str.length >= 2) {
        return str.substr(str.length - 2, 2)
      } else {
        return str.substr(str.length - 1, 1)
      }
    } else {
      if (str.length >= 2) {
        return str.substr(0, 2)
      } else {
        return str.substr(0, 1)
      }
    }
  } else {
    return '';
  }
}


//判断是否中文和英文
export function isChinese(str) {
  if (/.*[\u4e00-\u9fa5]+.*$/.test(str)) {
    return false;
  }
  return true;
}

/***
 * 去除所有空格
 * @param str
 * @returns {string}
 */
export function removeAllSpaces(str) {
  try {
    return str.replace(/\s+/g, "")
  } catch (e) {
    return ''
  }
}

/***
 * 去除两头空格
 * @param str
 * @returns {string}
 */
export function removeBothSpaces(str) {
  try {
    return str.replace(/^\s+|\s+$/g, "")
  } catch (e) {
    return ''
  }
}

//返回  formData传参数到后台
export function formatFormData(values) {
  let data = new FormData();
  Object.keys(values).map(key =>
    data.append(key, values[key])
  );
  // console.log('data',data);
  return data;
}

//返回日期对象
export function buildDateFormat(a) {
  if (a) {
    const dateFormat = 'YYYY-MM-DD';
    a = moment(a).format(dateFormat);
    if (a != 'Invalid date') {
      return moment(a, dateFormat);
    }
  }
}

//返回 日期对象
export function buildMoment(a) {
  if (a) {
    const dateFormat = 'YYYY-MM-DD';
    a = moment(a).format(dateFormat);
    if (a != 'Invalid date') {
      return moment(a, dateFormat);
    } else {
      return a;
    }
  }
}


//返回 当日
export function buildDateNow() {
  const dateFormat = 'YYYY-MM-DD';
  return moment().format(dateFormat);
}
//返回前面某一天
export function buildDateSub(a) {
  const dateFormat = 'YYYY-MM-DD';
  return moment().subtract(a, "days").format(dateFormat);//subtract当天减去a天
}
//返回每月1号
export function buildDateSubOne() {
  const dateFormat = 'YYYY-MM-01';
  return moment().format(dateFormat);
}




//解析日期格式
export function buildYYYYMMDD(a) {
  if (a) {
    a = moment(a).format('YYYY-MM-DD');
    if (a != 'Invalid date') {
      return a;
    }
  } else {
    return '';
  }
}

export function buildYYYYMMDDHHSS(a) {
  if (a) {
    a = moment(a).format('YYYY-MM-DD HH:mm:ss');
    if (a != 'Invalid date') {
      return a;
    }
  } else {
    return '';
  }
}


//解析 已经上传了的图片
export function buildUpload(a) {
  let fileList = [];
  if (a) {
    fileList = a.map((item, i) => {
      return {
        uid: i,
        name: 'xxx.png',
        status: 'done',
        response: {rdata: 1}, // custom error message to show
        url: 'http://www.baidu.com/xxx.png',
      };
    });
  }
  return fileList;
}

export function buildCover(a) {
  if (a) {
    return a.substr(0, 1) + '***';
  } else {
    return '****';
  }
}


//返回一个字符串
export function buildString(a) {
  if (a) {
    return a + '';
  } else {
    if (a == 0) {
      return a + '';
    } else {
      return;
    }
  }
}

//根据字符串返回一个list
export function buildList(a) {
  if (a) {
    a = a + '';
    const arr = a.split(',');
    if (arr) {
      return arr;
    }
  }
  return [];
}


//下载文件
export function downFile(blob, fileName) {
  // if (window.navigator.msSaveOrOpenBlob) {
  //   navigator.msSaveBlob(blob, fileName);
  // } else {
  //   var link = document.createElement('a');
  //   link.href = window.URL.createObjectURL(blob);
  //   link.download = fileName;
  //   link.click();
  //   window.URL.revokeObjectURL(link.href);
  // }
  if (window.navigator.msSaveOrOpenBlob) {
    navigator.msSaveBlob(blob, fileName);
  } else {
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = fileName;
    //此写法兼容可火狐浏览器
    document.body.appendChild(link);
    var evt = document.createEvent("MouseEvents");
    evt.initEvent("click", false, false);
    link.dispatchEvent(evt);
    document.body.removeChild(link);
  }
}

//下载文件
export function downLinkFile(url, fileName) {
    var link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    //此写法兼容可火狐浏览器
    document.body.appendChild(link);
    var evt = document.createEvent("MouseEvents");
    evt.initEvent("click", false, false);
    link.dispatchEvent(evt);
    document.body.removeChild(link);
}



//头部token
export function tokenHeader() {
  const hears = {
    Authorization: localStorage.getItem("user_token") || '',
  };
  return hears;
}

//返回 文件 的名称
export function checkFileName(a) {
  if (a) {
    if (a.lastIndexOf('.')) {
      return a.substr(0, a.lastIndexOf('.'));
    }
  }
  return '';
}

//解析 区域项目 搜索
export function buildProjectList(e) {
  e.map(item => {
    item.children = item.list || '';
    if (item.projectId) {
      item.value = item.projectId;
      item.label = item.projectName;
    } else {
      item.value = item.code;
      item.label = item.name;
    }
    if (item.children) {
      buildProjectList(item.children)
    }
  });
  return e;
}

export function formatNumber(oldNum) {
  const num = parseFloat(oldNum).toFixed(2);
  return (`${num}`).replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, '$1,');
}
