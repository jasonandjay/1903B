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
    }
  }