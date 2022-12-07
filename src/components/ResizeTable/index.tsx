/*
 * @Author: Zhouhai 497675647@qq.com
 * @Date: 2022-10-27 11:24:53
 * @LastEditors: Zhouhai 497675647@qq.com
 * @LastEditTime: 2022-11-18 15:54:40
 */
//ResizeTable.tsx
import React, { forwardRef } from 'react';
import { ParamsType, ProTable, ProTableProps } from '@ant-design/pro-components';
import { useGetResizeHeight } from './useGetResizeTable';
import './index.less';
import { ConfigProvider, Pagination, PaginationProps } from 'antd';
import zh_CN from 'antd/es/locale/zh_CN';

const ResizeTable = forwardRef(<DataType extends Record<string, any>, Params extends ParamsType = ParamsType, ValueType = "text">(props: ProTableProps<DataType, Params, ValueType>) => {
    const [tableHeight] = useGetResizeHeight('resize-table');

    
    /**
     * table的配置信息，设置一些默认值
     */
    const tableProps: ProTableProps<DataType, Params, ValueType> = {
        ...props,
        search: false,
        pagination: false,
        defaultSize: 'small',
        bordered: true,
        revalidateOnFocus: false,
        scroll: {
            y: tableHeight,
        },
    };

    /**
     * 分页器的配置信息，设置一些默认值
     */
    const pagination: PaginationProps = {
        showQuickJumper: true,
        showSizeChanger: true,
        current: 1,
        pageSize: 10,
        total: 0,
        ...props.pagination,
    }

    if (props && props.scroll && props.scroll.x) {
        tableProps.scroll!.x = props.scroll.x;
    }

    return (
        <div className='tableWrap'>
            <div id="resize-table" className='table'>
                <ProTable<DataType, Params, ValueType > {...tableProps} />
                {
                    (typeof props.pagination === 'boolean' && props.pagination === false) ? null : <ConfigProvider locale={zh_CN}>
                        <Pagination {...pagination} className='table-agination' />
                    </ConfigProvider >
                }

            </div>
        </div>
    );
}) as <DataType extends Record<string, any>, Params extends ParamsType = ParamsType, ValueType = "text">(
        Props: ProTableProps<DataType, Params, ValueType>
    ) => React.ReactElement;

export default ResizeTable;