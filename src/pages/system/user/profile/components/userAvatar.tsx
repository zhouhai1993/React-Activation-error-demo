/*
 * @Author: 周海 zhouhaib@yonyou.com
 * @Date: 2022-11-30 22:15:46
 * @LastEditors: Zhouhai 497675647@qq.com
 * @LastEditTime: 2022-12-07 09:43:20
 */
/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useRef, useState } from 'react';
import Cropper, { ReactCropperElement } from 'react-cropper' // 引入Cropper
import 'cropperjs/dist/cropper.css' // 引入Cropper对应的css
import './index.less';
import 'cropperjs/dist/cropper.css' // 引入Cropper对应的css
import { Button, message, Modal, Slider, Upload } from 'antd';
import { CloudUploadOutlined, RedoOutlined, UndoOutlined } from '@ant-design/icons';
import { RcFile } from 'antd/lib/upload';
import { useStore } from '@/store';

const MAX_FILE_SIZE = 5 * 1024 * 1024 // 文件最大限制为5M

{/*  props属性的限制规则 */ }
type prop = {
    uploadedImageFile: any,
    onClose: () => void,
    open: boolean;
}


{/* 裁剪框组件 */ }
const UserAvatar: React.FC<prop> = ({ uploadedImageFile, onClose, open }) => {

    const [src, setSrc] = useState<string>() // 被选中的待裁剪文件的src
    const cropperRef = useRef<ReactCropperElement>(null) // 标记Cropper，会用到自带的方法将裁剪好的img的url进行转义
    const [loading, setLoading] = useState<boolean>(false)

    const [rotate, setRotate] = useState<number>(0)

    useEffect(() => {
        setSrc(uploadedImageFile)
    }, [uploadedImageFile])

    useEffect(() => {
        setCropperRotate(rotate)
    }, [rotate])



    const setCropperRotate = (_rotate: number) => {
        const { cropper } = cropperRef?.current || {};
        if (cropper) {
            cropper.rotateTo(_rotate);
        }
    };
    const handleClick = (type: 'add' | 'duce') => {
        if (type === 'add') {
            const _rotate = rotate - 10;
            setRotate(_rotate < -180 ? -180 : _rotate);
        } else if (type === 'duce') {
            const _rotate = rotate + 10;
            setRotate(_rotate > 180 ? 180 : _rotate);
        }
    };
    const handleBeforeUpload = (file: RcFile, fileList: RcFile[]) => {
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => {
                if (e.target?.result) {
                    console.log('result', e.target?.result);
                    setSrc(e.target.result as string);
                }

            };
        }
        return false;
    };


    const handleSubmit = () => {
        let filename = uploadedImageFile.name
        setLoading(true)
        console.log('正在上传图片')
        const { cropper } = cropperRef?.current || {};
        cropper?.getCroppedCanvas().toBlob(async blob => {
            if (blob) {
                // 创造提交表单数据对象
                const formData = new FormData()
                // 添加要上传的文件
                formData.append('avatarfile', blob, filename)
                // 上传图片
                setLoading(false)

            } else {
                setLoading(false)
            }

        })
    }

    return (
        <Modal
            cancelText={'取消'}
            okText={'提交'}
            style={{ width: '100%' }}
            width={900}
            confirmLoading={loading}
            // bodyStyle={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: '100%' }}//内容垂直居中
            onCancel={onClose}
            onOk={handleSubmit}
            mask
            maskClosable={false}
            keyboard={false}
            closable={false}
            destroyOnClose
            open={open}
            centered>
            <Cropper
                className="cropper"
                src={src || ''}
                ref={cropperRef}
                style={{
                    width: '100%',
                    height: '400px'
                }} //想要改变图片的大小，用style
                viewMode={1}
                rotatable={true} // 滚轮滑动缩放图片大小
                zoomable={true}
                aspectRatio={1} // 固定为1:1  可以自己设置比例, 默认情况为自由比例
                guides={false}
                preview={'.cropper-preview'}
            />
            <div className="rotate-and-save-button-container">
                <div className="preview-container">
                    <div className="cropper-preview" />
                </div>
                <div className='slider-container'>
                    <div>
                        <Upload
                            beforeUpload={handleBeforeUpload}
                            maxCount={1}
                            accept=".png,.jpg,.jpeg">
                            <Button icon={<CloudUploadOutlined />}>选择</Button>
                        </Upload>
                    </div>
                    <div className='slider'>
                        <button className='rotate-button' type="button" onClick={() => { handleClick('add'); }}><UndoOutlined /></button>
                        <Slider className='rotate-slider' value={rotate} min={-180} max={180} onChange={setRotate} />
                        <button className='rotate-button' type="button" onClick={() => { handleClick('duce'); }}><RedoOutlined /></button>
                    </div>
                </div>

            </div>
        </Modal>
    )
}


export default UserAvatar;
