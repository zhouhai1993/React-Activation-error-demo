/*
 * @Author: Zhouhai 497675647@qq.com
 * @Date: 2022-11-08 16:53:00
 * @LastEditors: Zhouhai 497675647@qq.com
 * @LastEditTime: 2022-11-08 16:58:49
 */
export declare type GenTableDomain = Record<string, any> & {
    tableId?: string;
    tableName?: string;
    tableComment?: string;
    subTableName?: string;
    subTableFkName?: string;
    className?: string;
    tplCategory?: string;
    packageName?: string;
    moduleName?: string;
    businessName?: string;
    functionName?: string;
  
    functionAuthor?: string;
    genType?: string;
    genPath?: string;
    options?: string;
    treeCode?: string;
    treeParentCode?: string;
  
    treeName?: string;
    parentMenuId?: string;
    parentMenuName?: string;
    createTime?: string;
    createBy?: string;
    updateTime?: string;
    updateBy?: string;
  }