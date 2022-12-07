/*
 * @Author: Zhouhai 497675647@qq.com
 * @Date: 2022-11-30 11:27:09
 * @LastEditors: Zhouhai 497675647@qq.com
 * @LastEditTime: 2022-12-07 09:41:03
 */
/* eslint-disable @typescript-eslint/no-unused-vars */
import BillCard from '@/components/BillCard';
import { useStore } from '@/store';
import { UserDomain } from '@/type.d/system';
import { ProFormColumnsType, ProFormInstance } from '@ant-design/pro-components';
import { Space, Button, Modal } from 'antd';
import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import './index.less';

interface UserCardProp {
    userStatusOptions: any[];
    /**
     * 卡片数据 受控
     */
    cardData: UserDomain;

    newdata?: UserDomain;
    /**
     * 列表数据
     */
    tableListDataSource: UserDomain[];
    /**
     * 更新列表数据
     */
    setTableListDataSource: (data: UserDomain[]) => void;

    isedit?: boolean;

    setIsedit?: (isedit: boolean) => void
    /**
     * 跳转到列表状态
     */
    onBack?: (e?: React.MouseEvent<HTMLElement>) => void;
}
export type UserCardInstance = {
    setIsedit: (isedit: boolean) => void
}

const UserCard = forwardRef((props: UserCardProp) => {
    const { cardData,isedit = false, onBack } = props;
    const [selectdata, setSelectdata] = useState<UserDomain>(cardData);
    const [oldSelectdata, setOldSelectdata] = useState<UserDomain>({});//编辑状态临时保存选中的菜单树数据
    const formRef = useRef<ProFormInstance<UserDomain>>();


    const intCardData = (_cardData: UserDomain) => {
        setSelectdata(_cardData)
        setOldSelectdata({})
    }



    useEffect(() => {//从列表跳转到卡片，如果数据发生了变化，更新数据
        intCardData(cardData)
    }, [cardData])

    useEffect(() => {
        formRef.current?.resetFields()
        if (selectdata) {
            formRef.current?.setFieldsValue({...selectdata});
        } else {
            formRef.current?.setFieldsValue({});
        }
    }, [selectdata])

    /**
    * 表单字段配置
    */
    const formConfig: ProFormColumnsType<UserDomain>[] = [
        {
            title: '用户编号',
            key: 'userId',
            valueType: 'text',
            colProps: { md: 8, xl: 6 }
        },
        {
            title: '用户名称',
            key: 'userName',
            valueType: 'text',
            colProps: { md: 8, xl: 6 },
        },
    ];


    return (
        <BillCard
            FormConfig={formConfig}
            formRef={formRef}
            isedit={isedit}
            onBack={onBack}
            title={'用户管理'} />
    )
})
export default UserCard;