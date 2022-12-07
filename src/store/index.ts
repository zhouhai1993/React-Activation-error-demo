/*
 * @Author: 周海 zhouhaib@yonyou.com
 * @Date: 2022-09-23 19:52:19
 * @LastEditors: Zhouhai 497675647@qq.com
 * @LastEditTime: 2022-12-07 09:22:42
 */
//把所有的模块统一处理
//导出一个统一的方法useStore
import React from "react";
import { LayoutStore } from "./Layout.Store";

class RootStore {
  layoutStore: LayoutStore;

  constructor() {
    this.layoutStore = new LayoutStore();
    //..
  }
}

//实例化根
//导出useStore context

const rootStore = new RootStore();
const context = React.createContext(rootStore);

const useStore = () => React.useContext(context);

export { useStore };
