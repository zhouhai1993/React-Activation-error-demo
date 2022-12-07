/*
 * @Author: Zhouhai 497675647@qq.com
 * @Date: 2022-09-30 13:23:38
 * @LastEditors: Zhouhai 497675647@qq.com
 * @LastEditTime: 2022-11-04 14:59:38
 */
export declare type RoutersMenuItem = {
    alwaysShow?: boolean;
    children?: RoutersMenuItem[];
    component: string;
    hidden?: boolean;
    meta: MenuItemMeta;
    name: string;
    path: string;
    redirect?: string;
    [key: string]: any;
  };


  export declare type MenuDomain= Record<string,any> & {
    menuId?: string;
    menuName?: string;
    parentId?: string;
    orderNum?: number;
    path?: string;
    component?: string;
    isFrame?: string;
    isCache?: string;
    menuType?: string;
    visible?: string;
    status?: string;
    perms?: string;
    icon?: string;
    createBy?: string;
    createTime?: Date;
    updateBy?: string;
    updateTime?: Date;
    remark?: string;
    children?: MenuDomain[];
  };