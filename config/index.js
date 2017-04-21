// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')
var port = 8088;
var backPort = 8080;
//url子路径
var subpath = 'zggf_hz'
//后端api代理配置
var proxyTable = {
  ['/' + subpath + '/api']: { target: `http://localhost:${backPort}/` },
  ['/' + subpath + '/manage']: { target: `http://localhost:${backPort}/` },
  ['/' + subpath + '/business']: { target: `http://localhost:${backPort}/` },
  ['/' + subpath + '/common']: { target: `http://localhost:${backPort}/` },
  ['/' + subpath + '/lover']: {
    target: `http://localhost:${backPort}/`,
    ws: true
  }
}

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '..'),
    assetsSubDirectory: 'dist/',
    assetsPublicPath: '/',
    productionSourceMap: false,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css']
  },
  dev: {
    env: require('./dev.env'),
    port: port,
    assetsSubDirectory: 'dist/',
    assetsPublicPath: '/',
    proxyTable: proxyTable,
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false,
    subpath: subpath
  }
}
