module.exports = {
    // html pug
    chainWebpack: config => {
        config.module.rule('pug')
            .test(/\.pug$/)
            .use('pug-html-loader')
            .loader('pug-html-loader')
            .end()
    },
    // 主题定制
    css: {
        loaderOptions: {
          less: {
            lessOptions: {
                modifyVars: {
                    "layout-header-background": "#353943"
                },
                javascriptEnabled: true,
            },
          },
        },
    }
}