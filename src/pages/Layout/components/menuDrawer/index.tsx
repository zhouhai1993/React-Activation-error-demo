/*
 * @Author: Zhouhai 497675647@qq.com
 * @Date: 2022-09-27 16:50:04
 * @LastEditors: Zhouhai 497675647@qq.com
 * @LastEditTime: 2022-12-07 09:28:40
 */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Collapse, Drawer } from 'antd';
import { MenuDomain, RoutersMenuItem } from '@/type.d/system';
import { createIcon } from '@/utils';
import { useStore } from '@/store';
import './index.less';
import MenSide from './components/menSide';
import MenuItems from './components/menuItems';

const { Panel } = Collapse;


type MenuDrawerProps = {
    className?: string;
    open: boolean;
    onClose: () => void;
}

const MenuDrawer: React.FC<MenuDrawerProps> = (props) => {
    const { open, onClose, className } = props;
    const [menuItems,setMenuItems] = useState<MenuDomain[]>()
    return (
        <Drawer
            key={'mendrawer'}
            className={className}
            bodyStyle={{ backgroundColor: '#e8ebf0' ,overflow:'hidden',display:'flex',flexDirection:'row'}}
            placement="left"
            onClose={onClose}
            open={open}
            width='68.88%'
            closable={false}
            getContainer={false}
        >
            <MenSide key = 'fistMenu' menus={[]} onClick={(item) =>{
                setMenuItems(item.children)
            } } />
            <MenuItems onClose={onClose} menus={menuItems || []}></MenuItems>

        </Drawer>

    )
}
export default observer(MenuDrawer);