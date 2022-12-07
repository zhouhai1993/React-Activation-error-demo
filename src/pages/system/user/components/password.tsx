/*
 * @Author: Zhouhai 497675647@qq.com
 * @Date: 2022-11-30 15:44:01
 * @LastEditors: Zhouhai 497675647@qq.com
 * @LastEditTime: 2022-11-30 16:55:05
 */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { UserDomain } from '@/type.d/system/user';
import { Form, Input, Modal } from 'antd';
import React, { useEffect, useState } from 'react'
import './index.less'
type prop = {
    open: boolean;
    onCancel: () => void;
    onOk: (data: UserDomain) => Promise<void>;
    userId: string
}

const PasswordModal: React.FC<prop> = ({ open, onCancel, onOk, userId: id }) => {
    const [userId, setUserId] = useState<string>(id)
    const [loading, setLoading] = useState<boolean>(false)
    const [form] = Form.useForm();
    useEffect(() => {
        setUserId(id)
    }, [id])

    useEffect(() => {
        form.resetFields()
    }, [open])

    return (
        <Modal
            confirmLoading = {loading}
            bodyStyle={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: '100%' }}//内容垂直居中
            centered
            onOk={async () => {
                await form.validateFields()
                let data = form.getFieldsValue()
                data['userId'] = userId;
                setLoading(true)
                onOk(data).then(()=>{
                    setLoading(false)
                })
            }}
            onCancel={onCancel}
            mask
            maskClosable={false}
            keyboard={false}
            destroyOnClose
            title={'密码重置'}
            open={open}>
            <Form
                form={form}
                name="basic"
                layout='vertical'
                autoComplete="off">
                <Form.Item
                    label="请输入新密码"
                    name="password"
                    rules={[{ required: true, min: 5, max: 20, message: '用户密码长度必须介于 5 和 20 之间' }]}
                >
                    <Input.Password />
                </Form.Item>
            </Form>
        </Modal >
    )
}
export default PasswordModal;