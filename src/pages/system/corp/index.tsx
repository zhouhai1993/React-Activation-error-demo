/* eslint-disable jsx-a11y/anchor-is-valid */
/*
 * @Author: Zhouhai 497675647@qq.com
 * @Date: 2022-10-26 17:05:31
 * @LastEditors: Zhouhai 497675647@qq.com
 * @LastEditTime: 2022-12-07 09:48:58
 */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef, useState } from 'react'
import { Button, Popconfirm, Space, Switch } from 'antd';
import PageDiv from '@/components/PageDiv';
import { DictDataDomain, CorpDomain } from '@/type.d/system';
import { ActionType, ProColumns, ProFormDateRangePicker, ProFormInstance, ProFormSelect, ProFormText, QueryFilter } from '@ant-design/pro-components';
import ResizeTable from '@/components/ResizeTable';
import { useStore } from '@/store';
import './index.less';
import KeepAlive from 'react-activation';
import CorpCard, { CorpCardInstance } from './corpCard';


const Corp: React.FC = () => {
    const { layoutStore } = useStore();

    const actionRef = useRef<ActionType>();
    const queryformRef = useRef<ProFormInstance<CorpDomain>>();
    const [statusOptions, setStatusOptions] = useState<any[]>([]);
    const [tableListDataSource, setTableListDataSource] = useState<CorpDomain[]>([
        {pkCorp:'1',corpCode:'101',corpName:'北京'},
        {pkCorp:'2',corpCode:'102',corpName:'天津'},
    ]);
    const [cardData, setCardData] = useState<CorpDomain>({});
    const [pageStatus, setPageStatus] = useState<'List' | 'Card'>('List');
    const [isedit, setIsedit] = useState<boolean>(false);

    const newdata = {
        corpCode: '',
        corpName: '',
        taxpayerid: '',
        pkFathercorp: '',
        enablestate: '0',
        remark: '',
    }

    const columns: ProColumns<CorpDomain>[] = [
        {
            title: '主键',
            dataIndex: 'pkCorp',
            fixed: 'left'
        },
        {
            title: '公司编码',
            dataIndex: 'corpCode',
            fixed: 'left'
        },
        {
            title: '公司名称',
            dataIndex: 'corpName',
            fixed: 'left'
        },
        {
            title: '操作',
            width: 180,
            key: 'option',
            valueType: 'option',
            render: (_dom: React.ReactNode, entity: CorpDomain) => [
                <a key="view" onClick={() => {
                    onView(entity)
                }}>详情</a>,

            ],
        },
    ];

    const toCard = (data: CorpDomain, isEdit: boolean = false) => {
        setPageStatus('Card')
        setCardData({ ...data })
        setIsedit(isEdit)
    }


    const onView = (data: CorpDomain) => {
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


    return (<PageDiv>{

        pageStatus === 'List' ? <PageDiv>
            <QueryFilter<CorpDomain>
                defaultCollapsed
                split
                span={4}
                onFinish={onQuery}
                formRef={queryformRef}>
                <ProFormText key='corpName' name="corpName" label="公司名称" />
                <ProFormText key='corpCode' name="corpCode" label="公司编码" />
                <ProFormSelect key='enablestate' name="enablestate" label="启用状态" options={statusOptions} />
                <ProFormDateRangePicker key='createTime' name="createTime" label="创建时间" />
            </QueryFilter>
            <ResizeTable<CorpDomain>
                onRow={record => {
                    return {
                        onDoubleClick: event => { onView(record) },
                    };
                }}
                rowKey={'pkCorp'}
                dataSource={tableListDataSource}
                actionRef={actionRef}
                columns={columns}
                cardBordered
                revalidateOnFocus={false}
                pagination={false}
            >
            </ResizeTable>

        </PageDiv >
            :
            <CorpCard
                onBack={() => setPageStatus('List')}
                isedit={isedit}
                setIsedit={setIsedit}
                statusOptions={statusOptions}
                cardData={cardData}
                newdata={newdata}
                tableListDataSource={tableListDataSource}
                setTableListDataSource={setTableListDataSource} />}
    </PageDiv>
    )
}
export default Corp;