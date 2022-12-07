/*
 * @Author: 周海 zhouhaib@yonyou.com
 * @Date: 2022-10-03 22:48:45
 * @LastEditors: 周海 zhouhaib@yonyou.com
 * @LastEditTime: 2022-10-03 22:51:09
 */
import { formButton } from "@/type.d/formButton";
import Button from "antd/lib/button";



export const renderButton: (_onBtnClick: (_key: string, _event: React.MouseEvent<HTMLElement>) => void , _buttons?: formButton[]) => React.ReactNode = (_onBtnClick , _buttons) => {
    // const access = useAccess();
    const rnode = _buttons?.map((item) => {
        
        const btnprop = {
            type: 'primary' as const,
            // hidden: item.access ? !useAccess().hasPerms(item.access) : false,
            ...item,
        };

        return <Button {...btnprop} key={item.key} size={'middle'} onClick={(_event) => {
            _onBtnClick(item.key, _event)
        }}> {item.title}
        </Button>

    })
    return rnode;
}