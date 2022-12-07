/*
 * @Author: Zhouhai 497675647@qq.com
 * @Date: 2022-09-22 16:37:16
 * @LastEditors: Zhouhai 497675647@qq.com
 * @LastEditTime: 2022-09-22 16:45:53
 */
import { useRoutes } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    return useRoutes(MainRoutes);
}
