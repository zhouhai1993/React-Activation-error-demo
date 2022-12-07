/*
 * @Author: Zhouhai 497675647@qq.com
 * @Date: 2022-09-22 16:37:31
 * @LastEditors: Zhouhai 497675647@qq.com
 * @LastEditTime: 2022-12-07 09:23:54
 */
import Home from '@/pages/home';
import NoFoundPage from '@/pages/Layout/404';
import NoAuth from '@/pages/Layout/noAuth';
import Corp from '@/pages/system/corp';
import User from '@/pages/system/user';
import { Navigate } from 'react-router-dom';
import Layout from '../pages/Layout';
import KeepAlive from 'react-activation'


const MainRoutes = [
    {
        path: '/',
        element: <Navigate to="home" />,
        auth: false
    },
    {
        element: <Layout />,
        auth: true,
        children: [
            {
                path: 'home',
                auth: false,
                element: <KeepAlive cacheKey='home' name ='nav_home'>{<Home />}</KeepAlive>,
            },
            {
                path: 'system',
                auth: true,
                children: [
                    {
                        path: 'corp',
                        element: <KeepAlive cacheKey='system/corp' name='nav_system/corp'>{<Corp />}</KeepAlive>,
                        auth: true,
                    },
                    {
                        path: 'user',
                        element: <KeepAlive cacheKey='system/user' name='nav_system/user'>{<User />}</KeepAlive>,
                        auth: true,
                    },
                ]
            },
            {
                path: 'noAuth',
                element: <KeepAlive cacheKey='noAuth' name='nav_noAuth'>{<NoAuth />}</KeepAlive>,
                auth: false,
            },
            {
                path: 'notFoundPage',
                element: <KeepAlive cacheKey='notFoundPage' name='nav_notFoundPage'>{<NoFoundPage />}</KeepAlive>,
                auth: false,
            },
            {
                path: '*',
                element: <Navigate to="notFoundPage" />,
                auth: false,
            }
        ]
    },
];

export default MainRoutes;
