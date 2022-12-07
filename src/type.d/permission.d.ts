/*
 * @Author: Zhouhai 497675647@qq.com
 * @Date: 2022-09-28 16:26:58
 * @LastEditors: Zhouhai 497675647@qq.com
 * @LastEditTime: 2022-10-24 17:07:36
 */

declare type Role = {
    admin: boolean;
    createBy: string;
    createTime: string;
    dataScope: string;
    delFlag: string;
    deptCheckStrictly: boolean;
    deptIds: string;
    flag: boolean;
    menuCheckStrictly: boolean;
    menuIds: string;
    params: any;
    remark: string;
    roleId: number;
    roleKey: string;
    roleName: string;
    roleSort: string;
    searchValue: string;
    status: string;
    updateBy: string;
    updateTime: string;
  };
  export default Role;