const {createProxyMiddleware} = require("http-proxy-middleware") //17.0.2 不是proxy 是createProxyMiddleware

module.exports = function (app) {
    app.use(
        (
            createProxyMiddleware('/api1', {//遇见/api1前缀的请求，就会触发该代理
                target: "http://localhost:5000",//请求转发地址
                changeOrigin: true,//控制服务器收到的请求头中Host的值
                pathRewrite: {
                    "^/api1": ""//重写请求路径
                }
            })
        )
    )
}