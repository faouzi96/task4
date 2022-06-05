const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = function (app) {
    app.use(
        "/api/login",
        createProxyMiddleware({
            target: "http://localhost:5000",
            changeOrigin: true,
        })
    )
    app.use(
        "/api/signin",
        createProxyMiddleware({
            target: "http://localhost:5000",
            changeOrigin: true,
        })
    )
    app.use(
        "/api/manipulationdata",
        createProxyMiddleware({
            target: "http://localhost:5000",
            changeOrigin: true,
        })
    )
    app.use(
        "/api/recuperationdata",
        createProxyMiddleware({
            target: "http://localhost:5000",
            changeOrigin: true,
        })
    )
}
