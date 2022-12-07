/*
 * @Author: Zhouhai 497675647@qq.com
 * @Date: 2022-11-25 09:27:42
 * @LastEditors: Zhouhai 497675647@qq.com
 * @LastEditTime: 2022-11-25 09:27:57
 */
export declare type SysPostMenuDomain = Record<string, any> & {
    postMenuId?: string;
    postId?: string;
    menuId?: string;
    menuType?: string;
    createBy?: string;
    createTime?: Date;
    updateBy?: string;
    updateTime?: Date;
    remark?: string;
}