module.exports = {
  // 前端，静态系统配置：

  // 后台连接前缀
  prefixURL: '/hy',
  // 后台地址
  baseURL: 'http://192.168.3.41:8088/hy/',
  // baseURL: 'http://biadmin.cqhyrc.com.cn/bi/',
  //通用图片上传
  commUploadUrl: '/hy/admin/projectImage/uploadOne',
  //海报图图片上传
  porterUploadUrl: '/hy/admin/projectPoster/upload',
  //项目头像上传
  projectUploadUrl: '/hy/admin/projectImage/upload',

  backdrop:'rgba(255,255,255,0.6)',
  // 分页属性--编辑页面用
  pagination: {
    current: 1,
    pageSize: 5,
    showTotal: (total, range) => `显示第 ${range[0]} 到第 ${range[1]} 条记录，总共 ${total} 条记录`,
    pageSizeOptions: ['5', '10', '20', '50'],
    showSizeChanger: true,
    showQuickJumper: true,
    size: 'default',
  },
  paginationList: {
      current: 1,
      pageSize: 10,
      showTotal: (total, range) => `显示第 ${range[0]} 到第 ${range[1]} 条记录，总共 ${total} 条记录`,
      pageSizeOptions: ['10', '20', '25', '50'],
      showSizeChanger: true,
      showQuickJumper: true,
      size: 'default',
      total: 0,
  },

};
