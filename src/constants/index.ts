import { HourType } from "../types";

export const HOUR_TYPE_OPTIONS: HourType[] = [
	{
		value: 45,
		text: "Академические",
	},
	{
		value: 60,
		text: "Астрономические",
	},
];

export const BREAK_TYPE_OPTIONS = [
	{
		value: 0,
		text: "Без перерыва",
	},
	{
		value: 5,
		text: "5 мин",
	},
	{
		value: 10,
		text: "10 мин",
	},
	{
		value: 15,
		text: "15 мин",
	},
	{
		value: 20,
		text: "20 мин",
	},
	{
		value: 30,
		text: "30 мин",
	},
];

export const TEACHER_OPTIONS = [
	{
		value: "",
		text: "Выберите преподавателя на это время",
	},
	{
		value: "Иванов",
		text: "Иванов",
	},
	{
		value: "Петров",
		text: "Петров",
	},
	{
		value: "Смирнов",
		text: "Смирнов",
	},
];

export const CLASSROOM_OPTIONS = [
	{
		value: "",
		text: "Аудитория",
	},
	{
		value: "4-01",
		text: "4-01",
	},
	{
		value: "4-02",
		text: "4-02",
	},
	{
		value: "4-03",
		text: "4-03",
	},
	{
		value: "4-04",
		text: "4-04",
	},
	{
		value: "4-05",
		text: "4-05",
	},
];

export const WEEKDAYS = [
	{ id: "mwfbtn", label: "ПН/СР/ПТ", val: [1, 3, 5] },
	{ id: "tuethubtn", label: "ВТ/ЧТ", val: [2, 4] },
	{ id: "monbtn", label: "ПН", val: 1 },
	{ id: "tuebtn", label: "ВТ", val: 2 },
	{ id: "wedbtn", label: "СР", val: 3 },
	{ id: "thubtn", label: "ЧТ", val: 4 },
	{ id: "fribtn", label: "ПТ", val: 5 },
	{ id: "satbtn", label: "СБ", val: 6 },
	{ id: "sanbtn", label: "ВС", val: 0 },
];
