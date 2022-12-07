/*
 * @Author: Zhouhai 497675647@qq.com
 * @Date: 2022-11-16 18:01:27
 * @LastEditors: Zhouhai 497675647@qq.com
 * @LastEditTime: 2022-11-16 18:01:34
 */
export declare type SysRolePostDomain = Record<string, any> & {
    roleId?: string;
    postId?: string;
    postname?: string;
    postcode?: string;
    rolePostId?: string;
    createBy?: string;
    createTime?: Date;
    updateBy?: string;
    remark?: string;
}