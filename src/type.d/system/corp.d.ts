/*
 * @Author: Zhouhai 497675647@qq.com
 * @Date: 2022-11-08 10:24:29
 * @LastEditors: Zhouhai 497675647@qq.com
 * @LastEditTime: 2022-11-08 16:57:50
 */
export declare type CorpDomain = Record<string, any> & {
    pkCorp?: string;
    corpCode?: string;
    corpName?: string;
    taxpayerid?: string;
    pkFathercorp?: string;
    enablestate?: string;
    leader?: string,
    phone?: string,
    address?: string
    createBy?: string;
    createTime?: Date;
    updateBy?: string;
    updateTime?: Date;
    remark?: string;
    children?: CorpDomain[];
};