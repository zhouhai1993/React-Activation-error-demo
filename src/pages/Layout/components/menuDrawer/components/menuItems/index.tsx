/*
 * @Author: 周海 zhouhaib@yonyou.com
 * @Date: 2022-11-04 20:31:45
 * @LastEditors: Zhouhai 497675647@qq.com
 * @LastEditTime: 2022-11-23 18:35:23
 */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { MenuDomain } from '@/type.d/system';
import React, { useEffect, useState } from 'react'
import './index.less';
import MenuItem from './menuItem';


type MenuItemsProps = {
    menus: MenuDomain[];
    onClose: () => void
}

const MenuItems: React.FC<MenuItemsProps> = (Porps) => {

    const [allMenus, setAllMenus] = useState<MenuDomain[][]>([Porps.menus]);

    useEffect(() => {
        setAllMenus([Porps.menus])
    }, [Porps.menus])

    return (
        <div className='menuitems'>
            {
                allMenus.map((item, index) => {
                    return (
                        <MenuItem key={`${index}`} onClose={Porps.onClose} srcmenus={allMenus} menus={item} onClick={(menu, srcmenus) => {
                            if (menu.menuType === 'C') {//点击的是菜单
                                if (menu.isFrame === '0') {//外部跳转链接
                                    window.open(menu.patch)
                                    Porps.onClose()
                                }
                            } else {//点击的是目录
                                if (menu.children) {//存在下一层目录
                                    setAllMenus([...srcmenus, menu.children])
                                }

                            }

                        }} />

                    )
                })
            }
        </div>
    )
}
export default MenuItems;