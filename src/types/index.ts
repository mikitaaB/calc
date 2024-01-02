import { ButtonHTMLAttributes, ChangeEvent } from "react";

export type HourType = {
	value: number;
	text: "Академические" | "Астрономические";
};

export type EditScheduleHeaderPropsType = {
	headerText: string;
	handleCloseDialog: () => void;
};

export type ScheduleDataType = {
	[key: string]: string | number | number[];
	groupColor: string;
	totalHoursValue: number;
	hoursPerDay: number;
	hourValue: number;
	breakType: number;
	classroom: string;
	teacher: string;
	dateStart: string;
	dateEnd: string;
	timeStart: string;
	timeEnd: string;
	weekdays: number[];
};

export type EditScheduleBodyPropsType = {
	handleValueChange: (key: string, value: number | string | number[]) => void;
	weekdays: number[];
	dateStart: string;
	dateEnd: string;
	timeStart: string;
	timeEnd: string;
	groupColor: string;
};

export type EditScheduleFooterPropsType = {
	handleCloseDialog: () => void;
	handleSubmitBtn: () => void;
	submitBtnText: string;
};

export type SelectPropsType = {
	options: { value: number | string; text: string }[];
	onSelectedOption: (value: number | string) => void;
	hideDefaultOption?: boolean;
};

export type StepInputProps = {
	onValueChange: (value: number) => void;
	maxValue: number;
	step: number;
	buttonText: string;
};

export type TimerPropsType = {
	start: string;
	end: string;
	isEditStart: boolean;
	type: "date" | "time";
	handleTimerChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export type WeekDaysPropsType = {
	selWeekdays: number[];
	handleWeekdaysChange: (values: number[]) => void;
};

export interface ButtonPropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string,
	disabled?: boolean,
	label?: string,
}
