/*
 * @Author: Zhouhai 497675647@qq.com
 * @Date: 2022-10-31 11:54:07
 * @LastEditors: Zhouhai 497675647@qq.com
 * @LastEditTime: 2022-11-16 14:26:27
 */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Modal, ModalProps, PageHeader } from 'antd';
import React from 'react'
import './index.less';

export type FullScreenModalProps = ModalProps & {
    disabled: boolean,
    cardbuttons?: React.ReactNode,
    editbuttions?: React.ReactNode,
}


const FullScreenModal: React.FC<FullScreenModalProps> = (Props) => {

    const height = Props.title ? "calc(100vh - 53px - 45px)" : "calc(100vh - 45px)"


    const props = {
        ...Props,
        destroyOnClose: true,
        closable: false,
        className: Props.className,
        style: {
            maxWidth: "100vw",
            top: '45px',
            paddingBottom: 0

        },
        bodyStyle: {
            height: height,
            overflow: "auto",
            padding: "0px"
        },
        width: "100vw",
        footer: null
    }
    return (
        <Modal {...props}>
            <PageHeader
                className='site-page-header'
                onBack={(e) => {
                    if (e) {
                        if(!props.disabled){
                            Modal.confirm({
                                okText: '确定',
                                cancelText: '取消',
                                title: '系统提示',
                                content: '当前为编辑状态，返回到列表界面则不会保留编辑信息，是否返回到列表界面？',
                                type: 'warning',
                                onOk: () => {
                                    Props.onCancel?.(e)
                                }
                              }
                              )
                        }else{
                            Props.onCancel?.(e)
                        }
                       
                    }
                }}
                title={'详情'}
                extra={Props.disabled ? Props.cardbuttons : Props.editbuttions}>
                {Props.children}
            </PageHeader>
        </Modal>
    )
}
export default FullScreenModal;