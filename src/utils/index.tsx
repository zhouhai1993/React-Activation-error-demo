/*
 * @Author: Zhouhai 497675647@qq.com
 * @Date: 2022-09-27 15:16:16
 * @LastEditors: Zhouhai 497675647@qq.com
 * @LastEditTime: 2022-12-07 09:42:17
 */
export { default as errorCode } from "./errorCode"
export { createIcon,getIcon } from './IconUtil';
export { getToken,setToken,removeToken } from "./auth"
export { default as isValidKey } from "./common"
export { matchPermission,matchPerms,matchPerm,checkRole } from "./permission"