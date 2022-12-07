/*
 * @Author: Zhouhai 497675647@qq.com
 * @Date: 2022-10-27 16:29:39
 * @LastEditors: Zhouhai 497675647@qq.com
 * @LastEditTime: 2022-10-27 16:37:25
 */
/* *
 *
 * @author whiteshader@163.com
 * @datetime  2021/09/16
 * 
 * */

export type DictDataDomain = {
    dictCode: number;
    dictSort: number;
    dictLabel: string;
    dictValue: string;
    dictType: string;
    cssClass: string;
    listClass: string;
    isDefault: string;
    status: string;
    createBy: string;
    createTime: date;
    updateBy: string;
    updateTime: date;
    remark: string;
  };
  
  export type DictDataListPagination = {
    total: number;
    pageSize: number;
    current: number;
  };
  
  export type DictDataListData = {
    list: DictDataType[];
    pagination: Partial<DictDataListPagination>;
  };
  
  export type DictDataListParams = {
    dictCode?: string;
    dictSort?: string;
    dictLabel?: string;
    dictValue?: string;
    dictType?: string;
    cssClass?: string;
    listClass?: string;
    isDefault?: string;
    status?: string;
    createBy?: string;
    createTime?: string;
    updateBy?: string;
    updateTime?: string;
    remark?: string;
    pageSize?: string;
    currentPage?: string;
    filter?: string;
    sorter?: string;
  };
  