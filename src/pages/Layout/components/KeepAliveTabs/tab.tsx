/*
 * @Author: Zhouhai 497675647@qq.com
 * @Date: 2022-11-23 10:39:06
 * @LastEditors: Zhouhai 497675647@qq.com
 * @LastEditTime: 2022-12-07 09:46:16
 */

/*
使用 withAliveScope 或 useAliveController 获取控制函数

drop(name): （"卸载"仅可用于缓存状态下的节点，如果节点没有被缓存但需要清空缓存状态，请使用 “刷新” 控制）

按 name 卸载缓存状态下的 <KeepAlive> 节点，name 可选类型为 String 或 RegExp，注意，仅卸载命中 <KeepAlive> 的第一层内容，不会卸载 <KeepAlive> 中嵌套的、未命中的 <KeepAlive>

dropScope(name): （"卸载"仅可用于缓存状态下的节点，如果节点没有被缓存但需要清空缓存状态，请使用 “刷新” 控制）

按 name 卸载缓存状态下的 <KeepAlive> 节点，name 可选类型为 String 或 RegExp，将卸载命中 <KeepAlive> 的所有内容，包括 <KeepAlive> 中嵌套的所有 <KeepAlive>

refresh(name):

按 name 刷新缓存状态下的 <KeepAlive> 节点，name 可选类型为 String 或 RegExp，注意，仅刷新命中 <KeepAlive> 的第一层内容，不会刷新 <KeepAlive> 中嵌套的、未命中的 <KeepAlive>

refreshScope(name):

按 name 刷新缓存状态下的 <KeepAlive> 节点，name 可选类型为 String 或 RegExp，将刷新命中 <KeepAlive> 的所有内容，包括 <KeepAlive> 中嵌套的所有 <KeepAlive>

clear():

将清空所有缓存中的 KeepAlive

getCachingNodes():

获取所有缓存中的节点
*/
import { useAliveController } from 'react-activation'
import { CloseCircleOutlined } from '@ant-design/icons'

import './index.less'
import { useLocation, useNavigate } from 'react-router-dom'
import { Dropdown, Menu, MenuProps, Space } from 'antd'
type MenuItem = Required<MenuProps>['items'][number];
type props = {
    name?: string
}

const home = 'nav_home'

const Tab: React.FC<props> = ({ name = '未知节点' }) => {
    const navigate = useNavigate()
    const location = useLocation()
    const menusName: Record<string,string> = {
        'system/corp':'公司管理',
        'system/user':'用户管理'
    };
    const { getCachingNodes, dropScope, refresh, refreshScope } = useAliveController()
    const cachingNodes = getCachingNodes()
    const closable = cachingNodes.length > 1 && name !== home


    function dropTab(e: { stopPropagation: () => void }) {
        e.stopPropagation()
        closeCurrent()
    }

    const closeCurrent = () => {
        if (name !== home) {
            // 前往排除当前 node 后的最后一个 tab
            const lastnodename = cachingNodes.filter((node) => {
                return node.name !== name && node.name?.startsWith('nav_')
            }).pop()?.id
            console.log('closeCurrent',lastnodename,name);
            
            dropScope(name)
            navigate(lastnodename || '')
        }

    }


    const clostOther = () => {
        cachingNodes.forEach((node) => {
            if (node.name && node.name !== name && node.name !== home) {
                dropScope(node.name)
            }
        })
        navigate(name)
    }

    const clostAll = () => {
        cachingNodes.forEach((node) => {
            if (node.name && node.name !== home) {
                dropScope(node.name)
            }
        })
        navigate(home)
    }


    const items: MenuItem[] = [
        { key: 'refresh', label: '刷新页面' },
        { key: 'closeCurrent', label: '关闭当前' },
        { key: 'clostOther', label: '关闭其他' },
        { key: 'clossAll', label: '全部关闭' }
    ]

    const onMenuItem = (info: any) => {
        info.domEvent.stopPropagation()
        switch (info.key) {
            case 'refresh':
                refreshScope(name)
                return;
            case 'closeCurrent':
                closeCurrent()
                return;
            case 'clostOther':
                clostOther()
                return;
            case 'clossAll':
                clostAll()
                return;
            default:
                return;
        }
    }

    return (
        <div
            className={location.pathname === `/${name.replace('nav_', '')}` ? 'active' : 'tab'}
            onClick={() => {
                if (location.pathname !== `/${name.replace('nav_', '')}`) {//点击导航时，如果已经是当前展示页面，则不需要跳转
                    console.log('navigate',name);
                    
                    navigate(name.replace('nav_', ''))
                }
            }}>
            <Dropdown
                overlay={
                    <Menu mode="vertical" items={items} onClick={onMenuItem} />
                }
                placement="bottomLeft"
                arrow
                trigger={['contextMenu']}
            >
                <Space>
                    {name === home ? '主页' : (menusName[name.replace('nav_', '')] || '未知节点')}
                    {closable && (
                        <CloseCircleOutlined
                            onClick={dropTab}
                        />
                    )}
                </Space>

            </Dropdown>

        </div>

    )
}
export default Tab

