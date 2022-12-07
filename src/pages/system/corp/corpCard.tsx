/*
 * @Author: Zhouhai 497675647@qq.com
 * @Date: 2022-11-30 11:27:09
 * @LastEditors: Zhouhai 497675647@qq.com
 * @LastEditTime: 2022-12-07 09:51:03
 */
/* eslint-disable @typescript-eslint/no-unused-vars */
import BillCard from '@/components/BillCard';
import { useStore } from '@/store';
import { CorpDomain } from '@/type.d/system';
import { ProFormColumnsType, ProFormInstance } from '@ant-design/pro-components';
import { Space, Button, Modal } from 'antd';
import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import KeepAlive from 'react-activation';
import './index.less';

interface CorpCardProp {
    statusOptions: any[];
    /**
     * 卡片数据 受控
     */
    cardData: CorpDomain;
    /**
     * 卡片新增时的默认数据
     */
    newdata?: CorpDomain;
    /**
     * 列表数据
     */
    tableListDataSource: CorpDomain[];
    /**
     * 更新列表数据
     */
    setTableListDataSource: (data: CorpDomain[]) => void;

    setIsedit?: (isedit: boolean) => void;

    isedit?: boolean;
    /**
     * 跳转到列表状态
     */
    onBack?: (e?: React.MouseEvent<HTMLElement>) => void;
}
export type CorpCardInstance = {
    setIsedit: (isedit: boolean) => void
}
type CorpCardRef = React.MutableRefObject<CorpCardInstance | undefined> | React.RefObject<CorpCardInstance | undefined>

const CorpCard = forwardRef((props: CorpCardProp) => {
    const { statusOptions, cardData, newdata = {}, tableListDataSource, setTableListDataSource, setIsedit, isedit = false, onBack } = props;
    const { layoutStore} = useStore();
    const [selectdata, setSelectdata] = useState<CorpDomain>(cardData);
    const [oldSelectdata, setOldSelectdata] = useState<CorpDomain>({});//编辑状态临时保存选中的菜单树数据
    const formRef = useRef<ProFormInstance<CorpDomain>>();


    const intCardData = (_cardData: CorpDomain) => {
        setSelectdata(_cardData)
        setOldSelectdata({})
    }


    useEffect(() => {//从列表跳转到卡片，如果数据发生了变化，更新数据
        intCardData(cardData)
    }, [cardData])


    useEffect(() => {
        formRef.current?.resetFields()
        if (selectdata) {
            formRef.current?.setFieldsValue({ ...selectdata });
        } else {
            formRef.current?.setFieldsValue({});
        }
    }, [selectdata])

    /**
    * 表单字段配置
    */
    const formConfig: ProFormColumnsType<CorpDomain>[] = [
        {
            title: '公司编码',
            key: 'pkCorp',
            valueType: 'text',
            dataIndex: 'string',
            colProps: { md: 8, xl: 6 },
            fieldProps: {
                disabled: 'true'
            }
        },
        {
            title: '公司名称',
            key: 'corpName',
            valueType: 'text',
            dataIndex: 'string',
            colProps: { md: 8, xl: 6 }
        }
    ];


    return (
        <KeepAlive cacheKey='corpCard' id='corpCard'>
            <BillCard
                formid='corpCard'
                key={'corpCard'}
                FormConfig={formConfig}
                formRef={formRef}
                isedit={isedit}
                onBack={onBack}
                title={'公司管理'} />
        </KeepAlive>

    )
})
export default CorpCard;