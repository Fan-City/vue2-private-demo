const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

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

        const CompressionWebpackPlugin = require('compression-webpack-plugin')
        config.plugin('CompressionPlugin').use(
            new CompressionWebpackPlugin({
                filename: '[path][base].gz[query]', // 压缩后的文件名(保持原文件名，后缀加.gz)
                algorithm: 'gzip', // 使用gzip压缩
                test: /\.js$|\.css$|\.json$/, // 匹配文件名
                threshold: 10240, // 对超过10k的数据压缩
                minRatio: 1, // 压缩率小于1才会压缩
                deleteOriginalAssets: false // 是否删除未压缩的源文件，谨慎设置，如果希望提供非gzip的资源，可不设置或者设置为false（比如删除打包后的gz后还可以加载到原始资源文件）
            })
        )
    },
    configureWebpack: {
        plugins: [
            new BundleAnalyzerPlugin()
        ]
    }
};