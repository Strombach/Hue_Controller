const path = require( 'path' )

module.exports = {
  outputDir: path.resolve( __dirname, '../api/public' ),
  devServer: {
    proxy: {
      '^/state': {
        target: 'http://localhost:4000',
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: { '^/state': '/state' }
      }
    }
  }
}
