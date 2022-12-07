/*
 * @Author: Zhouhai 497675647@qq.com
 * @Date: 2022-09-22 15:59:05
 * @LastEditors: Zhouhai 497675647@qq.com
 * @LastEditTime: 2022-11-23 15:04:43
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.less'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);