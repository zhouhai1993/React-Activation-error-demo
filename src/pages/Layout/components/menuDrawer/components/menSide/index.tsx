/*
 * @Author: Zhouhai 497675647@qq.com
 * @Date: 2022-11-04 11:19:09
 * @LastEditors: Zhouhai 497675647@qq.com
 * @LastEditTime: 2022-11-23 18:38:18
 */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { MenuDomain } from '@/type.d/system';
import { createIcon } from '@/utils';
import { Space, Typography } from 'antd';
import React, { useState } from 'react'
import './index.less';

type MenSideProps = {
    menus: MenuDomain[],
    onClick: (menu: MenuDomain)=>void
}

const MenSide: React.FC<MenSideProps> = (props) => {

    const [activekey, setActivekey] = useState<string>('');

    const createTitle = (item: MenuDomain) => {
        const patch = item.path || '';

        const title = item.menuName || '';
        let icon = item.icon || "MenuUnfoldOutlined";
        const isFrame = item.isFrame || '1'

        if (icon === "#") {
            icon = "MenuUnfoldOutlined"
        }
        return (
            <Space key={item.menuId} align='start' size={2}>
                <Typography.Link
                    key={item.menuId}
                    className={patch === activekey ? 'menside-item-active' : 'menside-item'}
                    onClick={() => {
                        if (isFrame === '0') {
                            window.open(patch)
                        } else {
                            setActivekey(patch)
                            props.onClick(item)
                        }

                    }}
                    ellipsis={true}
                >
                    {createIcon(icon)} {title}
                </Typography.Link>
            </Space>
        )
    }


    return (
        <div className='menside'>
            <div className='menside-content'>
                {
                    props.menus.map((item) => {
                        const visible = item.visible
                        if (visible === '1') {//隐藏的菜单，不显示
                            return null
                        }

                        return createTitle(item)
                    })
                }
            </div>

        </div>
    )
}
export default MenSide;