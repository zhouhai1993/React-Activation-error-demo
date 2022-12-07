/*
 * @Author: 周海 zhouhaib@yonyou.com
 * @Date: 2022-10-03 22:49:43
 * @LastEditors: 周海 zhouhaib@yonyou.com
 * @LastEditTime: 2022-10-03 22:50:53
 */
/* eslint-disable @typescript-eslint/no-unused-vars */
import type { BaseButtonProps } from 'antd/lib/button/button';
import type { tableFieldtype } from '.';


export type customColmns={
  title: string,
  key: string,
  width?: string | number,
  type: tableFieldtype,
  enumType?: string,
  render?: any
}

export interface formButton extends BaseButtonProps{
  key: string,
  title: string,
  access?: string,
  icon?: React.ReactNode;
}