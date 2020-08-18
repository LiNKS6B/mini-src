const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/web/'),
        '@server': path.resolve(__dirname, 'src/test-server/'),
        '@js': path.resolve(__dirname, 'src/js/')
      }
    }
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "~@/assets/scss/variables.scss";@import "~@/assets/scss/mixins.scss";'
      }
    }
  }
}
