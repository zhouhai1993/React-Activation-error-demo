/*
 * @Author: 周海 zhouhaib@yonyou.com
 * @Date: 2022-10-04 01:05:47
 * @LastEditors: 周海 zhouhaib@yonyou.com
 * @LastEditTime: 2022-10-04 13:13:49
 */
import { makeAutoObservable } from 'mobx';

class LayoutStore {
    //全局loading
	isSpanning: boolean = false;

	constructor() {
		makeAutoObservable(this);
	}



    OpenSpanning = () =>{
        this.isSpanning = true
    }


    
    CloseSpanning = () =>{
        this.isSpanning = false
    }


}
export { LayoutStore };