/*
 * @Author: 周海 zhouhaib@yonyou.com
 * @Date: 2022-09-23 21:49:09
 * @LastEditors: 周海 zhouhaib@yonyou.com
 * @LastEditTime: 2022-09-23 21:50:51
 */
import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token: string) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
