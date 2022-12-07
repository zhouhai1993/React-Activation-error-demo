/* eslint-disable jsx-a11y/anchor-is-valid */
/*
 * @Author: Zhouhai 497675647@qq.com
 * @Date: 2022-10-26 17:05:31
 * @LastEditors: Zhouhai 497675647@qq.com
 * @LastEditTime: 2022-12-07 09:49:42
 */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef, useState } from 'react'
import { Button, message, Popconfirm, Space, Tag } from 'antd';
import PageDiv from '@/components/PageDiv';
import { DictDataDomain, UserDomain } from '@/type.d/system';
import { ActionType, ProColumns, ProFormDateRangePicker, ProFormInstance, ProFormSelect, ProFormText, QueryFilter } from '@ant-design/pro-components';
import ResizeTable from '@/components/ResizeTable';
import { useStore } from '@/store';
import { pageInfo } from '@/type.d/ajaxResult';
import './index.less';
import UserCard, { UserCardInstance } from './userCard';
import PasswordModal from './components/password';


const User: React.FC = () => {
    const { layoutStore } = useStore();

    const actionRef = useRef<ActionType>();

    const cardRef = useRef<UserCardInstance>()

    const queryformRef = useRef<ProFormInstance<UserDomain>>();
    const [userStatusOptions, setUserStatusOptions] = useState<any[]>([]);
    const [tableListDataSource, setTableListDataSource] = useState<UserDomain[]>([
        {userId:'1',userName:"用户1"},
        {userId:'2',userName:"用户2"}
    ]);
    const [cardData, setCardData] = useState<UserDomain>({});
    const [pageStatus, setPageStatus] = useState<'List' | 'Card'>('List');
    const [isedit, setIsedit] = useState<boolean>(false);

    const [pageInfo, setPageInfo] = useState<pageInfo>({
        current: 1,
        pageSize: 10,
        total: 0
    });


    const newdata = {
        userName: '',
        nickName: '',
        userType: '00',
        sex: '0',
        status: '0',
        delFlag: '0',
    }

    const columns: ProColumns<UserDomain>[] = [
        {
            title: '用户编号',
            dataIndex: 'userId',
            valueType: 'text',
            fixed: 'left',
        },
        {
            title: '用户名称',
            dataIndex: 'userName',
            fixed: 'left'
        },
        {
            title: '操作',
            width: 180,
            key: 'option',
            valueType: 'option',
            render: (_dom: React.ReactNode, entity: UserDomain) => [
                <a key="view" onClick={() => {
                    onView(entity)
                }}>详情</a>,
            ],
        },
    ];

    const toCard = (data: UserDomain, isEdit: boolean = false) => {
        setPageStatus('Card')
        setCardData({ ...data })
        cardRef.current?.setIsedit(isEdit)
    }

    const toList = () => {
        setPageStatus('List')
    }

    const onView = (data: UserDomain) => {
        toCard(data)
    }





    const onQuery = async (_data: any) => {
        if (_data.createTime) {
            _data.params = {}
            _data.params['beginTime'] = _data.createTime[0];
            _data.params['endTime'] = _data.createTime[1];
            delete _data.createTime
        }
        layoutStore.OpenSpanning();
        setTableListDataSource([])

        return _data;
    }

    const onPageChange: (current: number, pageSize: number) => void = (current, pageSize) => {
        setPageInfo({ ...pageInfo, current, pageSize });
        if (pageInfo.total > 0) {
            //如果原页面有数据，触发查询
            queryformRef?.current?.submit()
        }
    };

    return (<PageDiv>{
        pageStatus === 'List' ? <PageDiv>
            <QueryFilter<UserDomain>
                defaultCollapsed
                split
                span={4}
                onFinish={onQuery}
                formRef={queryformRef}>

                <ProFormText key='userName' name="userName" label="用户名称" />
                <ProFormText key='phonenumber' name="phonenumber" label="手机号码" />
                <ProFormSelect key='status' name="status" label="状态" options={userStatusOptions} />
                <ProFormDateRangePicker key='createTime' name="createTime" label="创建时间" />
            </QueryFilter>
            <ResizeTable<UserDomain>
                onRow={record => {
                    return {
                        onDoubleClick: event => { onView(record) },
                    };
                }}
                dataSource={tableListDataSource}
                actionRef={actionRef}
                columns={columns}
                cardBordered
                revalidateOnFocus={false}
                pagination={{
                    ...pageInfo,
                    showTitle: false,
                    onChange: onPageChange
                }}
            >
            </ResizeTable>
        </PageDiv >
            :
            <UserCard
                onBack={toList}
                isedit={isedit}
                setIsedit={setIsedit}
                userStatusOptions={userStatusOptions}
                cardData={cardData}
                newdata={newdata}
                tableListDataSource={tableListDataSource}
                setTableListDataSource={setTableListDataSource} />}
    </PageDiv>
    )
}
export default User;