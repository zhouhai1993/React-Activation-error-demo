/*
 * @Author: 周海 zhouhaib@yonyou.com
 * @Date: 2022-10-03 22:46:50
 * @LastEditors: Zhouhai 497675647@qq.com
 * @LastEditTime: 2022-12-07 08:51:15
 */
/* eslint-disable @typescript-eslint/no-unused-vars */
import type { ProFormInstance } from '@ant-design/pro-form';
import type { Store } from 'rc-field-form/es/interface';
import React, { forwardRef, useRef } from 'react'
import { useImperativeHandle } from 'react';
import { BetaSchemaForm, PageHeader, ProFormColumnsType } from '@ant-design/pro-components';
import PageDiv from '../PageDiv';
import './index.less';
import { Divider } from 'antd';

export type FormRef<T> = React.MutableRefObject<ProFormInstance<T> | undefined> | React.RefObject<ProFormInstance<T> | undefined>



/**
 * Props参数说明<数据类型>
 */
export interface customBillCardProps<TableDataType> {
    formid?: string;
    title?: string;
    extraButton?: JSX.Element;
    onBack?: (e?: React.MouseEvent<HTMLElement>) => void;
    /**
     * 卡片区域的配置文件
     */
    FormConfig: ProFormColumnsType[];
    /**
     * 默认值
     */
    defaultValues?: Store;

    isedit?: boolean;

    formRef?: FormRef<TableDataType>;

    children?: JSX.Element;

}



const BillCard = forwardRef(<TableDataType extends Record<string, any>>(Props: customBillCardProps<TableDataType>) => {
    const { formid, title, onBack, extraButton, FormConfig, defaultValues, isedit = false, formRef: propsActionRef, children } = Props;

    const formRef = useRef<ProFormInstance<TableDataType>>();

    useImperativeHandle(propsActionRef, () => formRef.current);

    console.log('BillCard', FormConfig);


    return (
        <PageDiv>
            <PageHeader onBack={onBack} title={title} extra={extraButton} />
            <div className='PageCard'>
                <BetaSchemaForm<TableDataType>
                    key={formid}
                    labelCol={{ flex: '120px' }}
                    wrapperCol={{ flex: 1 }}
                    layout={'horizontal'}
                    grid={true}
                    rowProps={{
                        gutter: [16, 0],
                    }}
                    disabled={!isedit}
                    formRef={formRef}
                    initialValues={defaultValues}
                    columns={FormConfig}
                    submitter={{
                        render: (_, dom) => <>{ }</>,
                    }}
                />
            </div>
            <div className='PageBody'>
                {
                    children
                }
            </div>
        </PageDiv>

    )
}) as <TableDataType extends object>(
        Props: customBillCardProps<TableDataType>
    ) => React.ReactElement;

export default BillCard;