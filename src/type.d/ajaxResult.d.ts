/*
 * @Author: Zhouhai 497675647@qq.com
 * @Date: 2022-10-24 16:56:22
 * @LastEditors: 周海 zhouhaib@yonyou.com
 * @LastEditTime: 2022-11-04 23:50:42
 */
import { AxiosRequestConfig } from 'axios'

export type AjaxResult = {
  code: number
  msg: string
  rows?: []
  total?: number
  data?: any
}


declare module 'axios' {
  export interface AxiosInstance extends Axios {
    (config: AxiosRequestConfig): AxiosPromise & Promise<AjaxResult>;
    (url: string, config?: AxiosRequestConfig): Promise<AjaxResult>;
  }
}


export type pageInfo = {
  current: number,
  pageSize: number,
  total: number
}