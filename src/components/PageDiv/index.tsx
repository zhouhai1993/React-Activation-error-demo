/*
 * @Author: Zhouhai 497675647@qq.com
 * @Date: 2022-10-26 17:29:39
 * @LastEditors: 周海 zhouhaib@yonyou.com
 * @LastEditTime: 2022-12-06 23:45:21
 */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { CSSProperties } from 'react'
import './index.less';

type Props = {
    children: React.ReactNode,
    style?: CSSProperties | undefined,
    className?: string
}

const PageDiv: React.FC<Props> = ({ children, style, className }) => {
    return (
        <div className={className || 'ry-div-page'} style={style}>
            {children}
        </div>
    )
}
export default PageDiv;