/*
 * @Author: Zhouhai 497675647@qq.com
 * @Date: 2022-09-22 16:30:02
 * @LastEditors: Zhouhai 497675647@qq.com
 * @LastEditTime: 2022-11-23 13:41:23
 */
import { useStore } from '@/store';
import { Spin } from 'antd';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { Outlet, Routes, useOutlet } from 'react-router-dom';
import TopContainer from './components/top-container'
import MenuDrawer from './components/menuDrawer'

import './index.less'
import KeepAliveTabs from './components/KeepAliveTabs';



const Layout: React.FC = (_prop: any) => {

    const [openMenu, setOpenMenu] = useState(false);

    const { layoutStore } = useStore();

    const onMenuClick = () => {
        setOpenMenu(!openMenu);
    };


    return (
        <div className="layout">
            <Spin size="large" spinning={layoutStore.isSpanning} style={{ height: '100%', overflow: 'hidden' }}>
                <TopContainer onMenuClick={onMenuClick} className="head" />
                <MenuDrawer open={openMenu} onClose={onMenuClick} className="menudraw"></MenuDrawer>
                <div className="body">
                    <div className="body-tabs">
                        <KeepAliveTabs />
                    </div>
                    <div className="body-content">
                        <Outlet></Outlet>
                    </div>
                </div>
            </Spin>
        </div>
    )
}

export default observer(Layout) 