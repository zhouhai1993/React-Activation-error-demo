/*
 * @Author: Zhouhai 497675647@qq.com
 * @Date: 2022-11-23 10:13:38
 * @LastEditors: Zhouhai 497675647@qq.com
 * @LastEditTime: 2022-12-07 09:28:12
 */
import { useAliveController } from 'react-activation'

import Tab from './tab'
import './index.less'

export default function KeepAliveTabs() {
    const { getCachingNodes } = useAliveController()
    const cachingNodes = getCachingNodes()

    return (
        <div className='alive-tabs'>
            <Tab key={'999'} name={'nav_home'} />
            <Tab key={'998'} name={'nav_system/corp'} />
            <Tab key={'997'} name={'nav_system/user'} />
        </div>
    )
}
