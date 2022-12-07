/*
 * @Author: Zhouhai 497675647@qq.com
 * @Date: 2022-10-21 13:07:34
 * @LastEditors: Zhouhai 497675647@qq.com
 * @LastEditTime: 2022-10-27 12:01:25
 */
/// <reference types="react-scripts" />
declare module '*.less' {
    const classes: {
        readonly [key: string]: string
    }
    export default classes
    declare module '*.less'
}