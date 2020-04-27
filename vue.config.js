const path = require('path')
const defaultSettings = require('./src/settings.js')

function resolve(dir) {
    return path.join(__dirname, dir)
}

const name = defaultSettings.title || 'vue Element Admin' // page title

const port = process.env.port || process.env.npm_config_port || 9527 // dev port
module.exports = {
    // 基本路径
    // baseUrl: '/',
    // 放置静态资源的地方 (js/css/img/font/...)
    // assetsDir: '',
    //mode: 'development',//开发模式 默认两种 production 生成环境  development 开发环境

    outputDir: 'dist', // 输出文件   默认dist
    // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径
    indexPath: 'index.html', // Default: 'index.html'
    // eslint-loader是否在保存的时候检查
    lintOnSave: true,
    // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
    productionSourceMap: false,
    filenameHashing: false,//文件名是否使用哈希模式
    devServer: {//开发服务器配置
        host: '0.0.0.0',
        port: port,//端口号
        https: false,
        open: false,
        hotOnly: false,
        proxy: null, // 设置代理
        before: require('./mock/mock-server.js')
    },
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.js$/, // 处理以.js结尾的文件
                    exclude: /node_modules/, // 处理除了nodde_modules里的js文件
                    loader: 'babel-loader' // 用babel-loader处理
                }
            ]
        },

    },
    // webpack配置
    chainWebpack: (config) => {
        config.module
            .rule('svg')
            .exclude.add(resolve('src/icons'))
            .end()
        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
            .end()
    },
};
