/*
 * @Author: 周海 zhouhaib@yonyou.com
 * @Date: 2022-09-30 19:21:54
 * @LastEditors: Zhouhai 497675647@qq.com
 * @LastEditTime: 2022-11-15 17:04:04
 */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createIcon } from '@/utils/IconUtil';
import { Space } from 'antd';
import React from 'react'
import PageDiv from '../PageDiv';
import './index.less';
type props = {
    title: string,
    titleIcon?: string,
    titleReactNode?: React.ReactNode,
    headButton?: React.ReactNode,
    treeNode: React.ReactNode,
    cardNode: React.ReactNode
}
const TreeCardLayout: React.FC<props> = ({ title, titleIcon, titleReactNode, headButton, treeNode, cardNode }: props) => {
    return (
        <PageDiv>
            <div className='ry-div-header'>
                <div className="ry-div-header-title">
                    <Space>
                        <div className='ry-div-header-title-icon'>{createIcon(titleIcon)} {title}</div>
                        {titleReactNode}
                    </Space>
                </div>
                <div className="ry-div-header-button">
                    {headButton}
                </div>
            </div>
            <div className="ry-div-content">
                <div className='ry-left'>
                    {treeNode}
                </div>
                <div className='ry-card'>
                    {cardNode}
                </div>
            </div>
        </PageDiv>
    )
}
export default TreeCardLayout;