const path = require('path');

module.exports = {
    // 选项...
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src')
            },
            extensions: ['.js', '.json', '.vue']
        }
    },
    publicPath: process.env.NODE_ENV === 'production'
    ? '/1903B/chenmanjie/wipi/'
    : '/'
  }