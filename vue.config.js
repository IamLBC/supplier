const path = require('path')
const debug = process.env.NODE_ENV !== 'production'
//const VueConf = require('./src/assets/js/libs/vue_config_class')
//const vueConf = new VueConf(process.argv)

module.exports = {
  baseUrl: '',
  outputDir: 'dist',
  assetsDir: 'assets',
  lintOnSave: debug,
  runtimeCompiler: true,
  transpileDependencies: [],
  productionSourceMap: true,
  configureWebpack: config => {
    if (debug) {
      config.devtool = 'cheap-module-eval-source-map'
    } else {
    }
    Object.assign(config, {
      resolve: {
        alias: {
          '@': path.resolve(__dirname, './src'),
          '@cmps': path.resolve(__dirname, './src/components'),
          'vue$': 'vue/dist/vue.esm.js'
        }
      }
    })
  },
  chainWebpack: config => {
    if (debug) {
    } else {
    }
  },
  css: {
    modules: false, // 是否开启支持‘foo.module.css’样式   日了狗。。。日
    extract: true, // css分离 <style>不内联到 html
    sourceMap: false,
    loaderOptions: { // css预设器配置项
      css: {
        localIdentName: '[name]-[hash]',
        camelCase: 'only'
      },
      stylus: {}
    },
  },
  parallel: require('os').cpus().length > 1, // 构建时开启多进程处理babel编译
  pluginOptions: {
  },
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    },
    open: true,
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: {
      '/api': {
        target: '<url>',
        ws: true,
        changOrigin: true
      }
    },
    before: app => {}
  }
}