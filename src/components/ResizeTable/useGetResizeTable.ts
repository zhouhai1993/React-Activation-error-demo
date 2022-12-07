/*
 * @Author: Zhouhai 497675647@qq.com
 * @Date: 2022-10-27 11:56:23
 * @LastEditors: Zhouhai 497675647@qq.com
 * @LastEditTime: 2022-11-16 14:52:43
 */
//useGetResizeTable.ts
import { useEffect, useState } from 'react';
import debounce from 'lodash/debounce';


export function useGetResizeHeight(name: string) {

    //设置撑高表格外部包裹元素的高度
    const [tableHeight, setTableHeight] = useState(500);
    const [islive,setIslive] = useState(true);
    const handleGetTableHeight = () => {
        setTimeout(() => {
            
            
            let height = document.getElementById(name)?.clientHeight;
            if(!height || height === 0){
                height = 700;
            }
            height = height - 55 - 83; //55-表头高度，6-微调高度
            if(islive){
                setTableHeight(height);
            }
            
            
        });
    };

    useEffect(() => {
        setIslive(true)
        handleGetTableHeight();
        //窗口resize防抖
        const debounced = debounce(handleGetTableHeight, 200);
        window.addEventListener('resize', debounced);
        //卸载组件时解除对resize的监听
        return () => {
            setIslive(false)
            window.removeEventListener('resize', debounced)
        };
    }, []);
 
 
    return [tableHeight];
}