/*
 * @Author: 周海 zhouhaib@yonyou.com
 * @Date: 2022-11-04 21:05:06
 * @LastEditors: Zhouhai 497675647@qq.com
 * @LastEditTime: 2022-11-23 18:39:50
 */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useStore } from '@/store';
import { MenuDomain } from '@/type.d/system';
import { createIcon } from '@/utils';
import { Typography } from 'antd';
import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import './index.less';
type MenuItemProps = {
    srcmenus: MenuDomain[][],
    menus: MenuDomain[],
    onClick: (menu: MenuDomain, srcmenus: MenuDomain[][]) => void,
    onClose: () => void
}


const MenuItem: React.FC<MenuItemProps> = (Props) => {
    const [activekey, setActivekey] = useState<string>('');

    const navigate = useNavigate()

    const createItem = (item: MenuDomain) => {
        const path = item.path || '';

        const title = item.menuName || '';
        let icon = item.icon || "MenuUnfoldOutlined";
        const menuType = item.menuType || 'M'

        if (icon === "#") {
            icon = "MenuUnfoldOutlined"
        }

        return (
            <Typography.Link
                key={path}
                className={path === activekey ? 'menuitems-item-active' : 'menuitems-item'}
                onClick={() => {
                    if (menuType === 'M') {
                        if (activekey !== path) {
                            setActivekey(path)
                            Props.onClick(item, Props.srcmenus)
                        }
                    } else {
                        setActivekey(path)
                        navigate(path, { state: { id: '123', title: '123' } })
                        Props.onClose()
                    }

                }}
                ellipsis={true}
            >
                {createIcon(icon)} {title}
            </Typography.Link>

        )
    }


    return (
        <div className='menuitems-content'>
            {
                Props.menus.map((item) => {
                    return createItem(item)
                })
            }
        </div>
    )
}
export default MenuItem;