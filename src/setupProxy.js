/*
 * @Author: Zhouhai 497675647@qq.com
 * @Date: 2022-09-27 15:16:16
 * @LastEditors: Zhouhai 497675647@qq.com
 * @LastEditTime: 2022-09-30 11:00:32
 */
const { createProxyMiddleware } = require('http-proxy-middleware')


module.exports = function (app) {
    app.use(`${process.env.REACT_APP_BASE_API}`, createProxyMiddleware({
        target: `http://${process.env.REACT_APP_BASE_IP}:${process.env.REACT_APP_BASE_PORT}`,
        changeOrigin: true,
        pathRewrite: {
            [`^${process.env.REACT_APP_BASE_API}`]: ''
        },
    }))
}