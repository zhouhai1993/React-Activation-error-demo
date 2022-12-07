/*
 * @Author: Zhouhai 497675647@qq.com
 * @Date: 2022-09-27 15:16:16
 * @LastEditors: Zhouhai 497675647@qq.com
 * @LastEditTime: 2022-12-07 09:26:46
 */
import React, { useEffect } from 'react';

type Props = {
    children: React.ReactElement
}



const FrontendAuth: React.FC<Props> = ({ children }) => {


    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, []);


    //不需要权限控制，直接展示界面
    return React.cloneElement(children)
};

export default FrontendAuth;