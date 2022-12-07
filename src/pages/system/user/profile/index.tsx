/*
 * @Author: 周海 zhouhaib@yonyou.com
 * @Date: 2022-11-30 19:53:31
 * @LastEditors: Zhouhai 497675647@qq.com
 * @LastEditTime: 2022-12-07 09:42:53
 */
/* eslint-disable @typescript-eslint/no-unused-vars */
import PageDiv from '@/components/PageDiv';
import { Card, Col, Row, Tabs } from 'antd';
import React from 'react'
import './index.less';
import UserAvatar from './components/userAvatar';
import { useState } from 'react';
import UserInfo from './components/userInfo';
const Profile: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false)


    return (
        <PageDiv>
            <Row gutter={24}>
                <Col span={6}>
                    <Card
                        bordered
                        title={'个人信息'}>
                    </Card>
                </Col>
                <Col span={18}>
                    <Card
                        bordered
                        title={'基本资料'}>
                        <Tabs
                            defaultActiveKey="1"
                            items={[
                                {
                                    label: `基本信息`,
                                    key: '1',
                                    children: <UserInfo />
                                }
                            ]} />

                    </Card>
                </Col>
            </Row>
            <UserAvatar uploadedImageFile={{}} onClose={() => setOpen(false)} open={open} />
        </PageDiv>
    )
}
export default Profile;