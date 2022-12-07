/*
 * @Author: Zhouhai 497675647@qq.com
 * @Date: 2022-11-11 12:55:58
 * @LastEditors: Zhouhai 497675647@qq.com
 * @LastEditTime: 2022-11-11 12:56:28
 */
export declare type SysRoleDomain = Record<string, any> & {
                roleId?: string;
                roleName?: string;
                roleKey?: string;
                roleSort?: string;
                dataScope?: string;
                menuCheckStrictly?: string;
                deptCheckStrictly?: string;
                status?: string;
                delFlag?: string;
                createBy?: string;
                createTime?: Date;
                updateBy?: string;
                updateTime?: Date;
                remark?: string;
                pkCorp?: string;
}