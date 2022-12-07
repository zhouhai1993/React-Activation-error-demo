/*
 * @Author: Zhouhai 497675647@qq.com
 * @Date: 2022-11-15 15:11:19
 * @LastEditors: Zhouhai 497675647@qq.com
 * @LastEditTime: 2022-11-16 11:36:49
 */
export declare type SysDeptDomain = Record<string, any> & {
                deptId?: string;
                pkCorp?: string;
                parentId?: string;
                ancestors?: string;
                deptCode?: string;
                deptName?: string;
                orderNum?: string;
                leader?: string;
                phone?: string;
                email?: string;
                status?: string;
                delFlag?: string;
                createBy?: string;
                createTime?: Date;
                updateBy?: string;
                updateTime?: Date;
                remark?: string;
}