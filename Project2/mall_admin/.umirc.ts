export default {
  // 引入antd
  antd: {
    dark: false,
    compact: true,
  },
  // 配置代理
  proxy: {
    '/api': {
      'target': 'http://82.156.36.178:8085',
      'changeOrigin': true,
      'pathRewrite': { '^/api': '' },
    },
  },
  // 引入dva
  dva: {
    immer: true,
    hmr: true,
  },
}