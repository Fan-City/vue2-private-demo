const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    publicPath: './', //部署应用时的根路径(默认'/'),也可用相对路径(存在使用限制)
    outputDir: 'dist', //运行时生成的生产环境构建文件的目录(默认'dist'，构建之前会被清除)
    lintOnSave: false, //是否开启ESlint（保存时检查）
    devServer: { 
        host: 'localhost',
        port: 3030,
        https: false, //是否开启https
        hotOnly: false, //是否配置热更新
        open: true, //配置自动启动浏览器
    },

    chainWebpack(config) {
        // set svg-sprite-loader
        config.module
            .rule('svg')
            .exclude.add(resolve('src/assets/icons'))
            .end()
        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/assets/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
            symbolId: 'icon-[name]'
            })
            .end()
    },
};