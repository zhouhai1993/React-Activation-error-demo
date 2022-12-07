/*
 * @Author: Zhouhai 497675647@qq.com
 * @Date: 2022-12-01 14:14:47
 * @LastEditors: Zhouhai 497675647@qq.com
 * @LastEditTime: 2022-12-07 09:42:15
 */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useStore } from '@/store';
import { CorpDomain } from '@/type.d/system';
import { Button, Form, Input, message, Radio, Select } from 'antd';
import React, { useEffect, useState } from 'react'
import './index.less';
const UserInfo: React.FC = () => {
    const [form] = Form.useForm();
    const { layoutStore } = useStore()

    const [corpOption,setCorpOtion] = useState<any[]>([])



    return (
        <Form
            form={form}
            name="basic"
            autoComplete="off"
            labelCol={{ span: 2 }}
            wrapperCol={{ span: 21 }}>
            <Form.Item
                label="默认组织"
                name="corpId"
            >
                <Select options={corpOption}/>
            </Form.Item>
            <Form.Item
                label="用户昵称"
                name="nickName"
                rules={[{ required: true }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="手机号码"
                name="phonenumber"
                rules={[{ required: true }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="邮箱"
                name="email"
                rules={[
                    { required: true },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="性别"
                name="sex"
                rules={[
                    { required: true },
                ]}
            >
                <Radio.Group>
                    <Radio value="0">男</Radio>
                    <Radio value="1">女</Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item
                wrapperCol={{ span: 14, offset: 1 }}
            >
                <Button type="primary" htmlType="submit">提交</Button>
            </Form.Item>
        </Form >
    )

}
export default UserInfo;