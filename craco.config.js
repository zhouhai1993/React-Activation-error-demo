/*
 * @Author: Zhouhai 497675647@qq.com
 * @Date: 2022-09-22 17:29:18
 * @LastEditors: Zhouhai 497675647@qq.com
 * @LastEditTime: 2022-11-24 16:17:52
 */
//添加自定义对于webpack的配置
const path = require('path')
const CracoLessPlugins = require('craco-less')

module.exports = {
    babel: {
        plugins: [
            "react-activation/babel"
        ]
    },
    plugins: [
        {
            plugin: CracoLessPlugins,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            '@primary-color': '#1DA57A',
                            '@border-radius-base': '4px'
                        },
                        javascriptEnabled: true
                    }
                }
            }
        }
    ],
    webpack: {
        //配置别名
        alias: {
            //约定：使用@ 标识src文件所在路径
            '@': path.resolve(__dirname, 'src')
        }
    },

}