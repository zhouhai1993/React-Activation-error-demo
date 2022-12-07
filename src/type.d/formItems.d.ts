/*
 * @Author: 周海 zhouhaib@yonyou.com
 * @Date: 2022-10-03 22:44:35
 * @LastEditors: Zhouhai 497675647@qq.com
 * @LastEditTime: 2022-10-08 16:25:42
 */
/**
 * 组件类型
 * @Text 文本输入框
 * @Select 下拉选择框
 * @Date 日期选择框
 */
export declare type Fieldtype =
	| 'Text'
	| 'Number'
	| 'Select'
	| 'TreeSelect'
	| 'Date'
	| 'Radio';

export declare type TText = {
	tooltip?: string;
	disabled?: boolean;
};

export declare type TNumber = {
	tooltip?: string;
	disabled?: boolean;
	precision: number
};

export declare type TSelectOption = {
	value: string;
};

export declare type TSelect = {
	enumType?: string;
};

export declare type TTreeSelect = TSelect & {};

export declare type TDate = {};


export declare type CheckboxValueType = string | number | boolean;
export interface CheckboxOptionType {
	label: React.ReactNode;
	value: CheckboxValueType;
	style?: React.CSSProperties;
	disabled?: boolean;
	onChange?: (e: any) => void;
}
export declare type TRadio = {
	tooltip?: string
	options?: Array<CheckboxOptionType | string | number>
	requestUrl?: string;
};

export declare interface CustomFormConfig {
	title: string;
	fieldId: string;
	fieldType: Fieldtype;
	defaultValue?: string;
	placeholder?: string;
	config?: TText | TNumber | TSelect | TTreeSelect | TDate | TRadio;
}
