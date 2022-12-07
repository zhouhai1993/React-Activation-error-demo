/*
 * @Author: Zhouhai 497675647@qq.com
 * @Date: 2022-11-16 13:47:44
 * @LastEditors: Zhouhai 497675647@qq.com
 * @LastEditTime: 2022-11-16 13:47:57
 */
export declare type SysPostDomain = Record<string, any> & {
    postId?: string;
    postCode?: string;
    postName?: string;
    postSort?: string;
    status?: string;
    createBy?: string;
    createTime?: Date;
    updateBy?: string;
    updateTime?: Date;
    remark?: string;
}