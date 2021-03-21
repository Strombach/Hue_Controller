module.exports = {
  devServer: {
    proxy: {
      '^/state': {
        target: 'http://localhost:4000/state',
        changeOrigin: true,
        logLevel: 'debug',
        ws: true,
        pathRewrite: { '^/state': '/' }
      }
    }
  }
}
