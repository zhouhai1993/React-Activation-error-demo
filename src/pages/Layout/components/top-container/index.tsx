/*
 * @Author: Zhouhai 497675647@qq.com
 * @Date: 2022-09-27 15:39:52
 * @LastEditors: Zhouhai 497675647@qq.com
 * @LastEditTime: 2022-12-07 09:24:39
 */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { Avatar, Image, Dropdown, Menu, MenuProps,Modal } from 'antd';
import './index.less';

import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
type Props = {
    className: string;
    onMenuClick: () => void;
}
type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    { key: 'userInfo', label: '个人信息' },
    { type: 'divider' },
    { key: 'logout', label: '退出登录' }
]

const TopContainer: React.FC<Props> = ({ className, onMenuClick }) => {

    const navigate = useNavigate();

    const onMenuItem = (info: any) => {
        switch (info.key) {
            case 'userInfo':
                navigate('/profile')
                return;
            case 'logout':
                Modal.confirm({
                    title:'警告',
                    content:"确定要退出吗？",
                    onOk:()=>{
                        navigate('/login',{replace: true});
                    },
                    onCancel:()=>{
                        return;
                    }

                })
                return;
                
            default:
                return;
        }
    }

    return (
        <div className={className}>
            <div className='top-nav'>
                <div className='nav-left'>
                    <Image
                        onClick={onMenuClick}
                        width={42}
                        height={42}
                        preview={false}
                        src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                    />
                </div>
                <div className='nav-middle'>
                    <div style={{ color: 'white' }}>若依后台管理</div>
                </div>
                {/* 右侧头像 */}
                <div className='nav-right'>
                    <Dropdown
                        overlay={
                            <Menu mode="vertical" items={items} onClick={onMenuItem} />
                        }
                        placement="bottomLeft"
                        arrow
                    >
                        <Avatar style={{ backgroundColor: 'white' }} size={30}/>
                    </Dropdown>

                </div>
            </div>
        </div>
    )
}
export default observer(TopContainer);