import { memo, useState, ChangeEvent } from "react";
import { WeekDaysPropsType } from "../types";

export const WeekDays = memo(function ({
	weekdays,
	handleWeekdaysChange,
}: WeekDaysPropsType) {
	const [checkedDays, setCheckedDays] = useState<number[]>(weekdays);

	const handleCheckboxChange = (
		day: number,
		event: ChangeEvent<HTMLInputElement>
	) => {
		let newCheckedDays;

		if (event.target.checked) {
			newCheckedDays = [...checkedDays, day];
		} else {
			newCheckedDays = checkedDays.filter(
				(checkedDay) => checkedDay !== day
			);
		}

		setCheckedDays(newCheckedDays);
		handleWeekdaysChange(newCheckedDays);
	};

	const handleGroupChange = (days: number[]) => {
		let newCheckedDays;

		if (days.every((day) => checkedDays.includes(day))) {
			newCheckedDays = checkedDays.filter(
				(checkedDay) => !days.includes(checkedDay)
			);
		} else {
			newCheckedDays = [
				...checkedDays.filter(
					(checkedDay) => !days.includes(checkedDay)
				),
				...days,
			];
		}

		setCheckedDays(newCheckedDays);
		handleWeekdaysChange(newCheckedDays);
	};

	return (
		<div className="btn-group" role="group" aria-label="weekdays_group">
			<input
				type="checkbox"
				className="btn-check"
				id="mwfbtn"
				autoComplete="off"
				onChange={() => handleGroupChange([1, 3, 5])}
				checked={[1, 3, 5].every((day) => checkedDays.includes(day))}
			/>
			<label className="btn btn-outline-primary" htmlFor="mwfbtn">
				ПН/СР/ПТ
			</label>

			<input
				type="checkbox"
				className="btn-check"
				id="tuethubtn"
				autoComplete="off"
				onChange={() => handleGroupChange([2, 4])}
				checked={[2, 4].every((day) => checkedDays.includes(day))}
			/>
			<label className="btn btn-outline-primary" htmlFor="tuethubtn">
				ВТ/ЧТ
			</label>

			<input
				type="checkbox"
				className="btn-check"
				id="monbtn"
				autoComplete="off"
				checked={checkedDays.includes(1)}
				onChange={(e) => handleCheckboxChange(1, e)}
			/>
			<label className="btn btn-outline-primary" htmlFor="monbtn">
				ПН
			</label>

			<input
				type="checkbox"
				className="btn-check"
				id="tuebtn"
				autoComplete="off"
				checked={checkedDays.includes(2)}
				onChange={(e) => handleCheckboxChange(2, e)}
			/>
			<label className="btn btn-outline-primary" htmlFor="tuebtn">
				ВТ
			</label>

			<input
				type="checkbox"
				className="btn-check"
				id="wedbtn"
				autoComplete="off"
				checked={checkedDays.includes(3)}
				onChange={(e) => handleCheckboxChange(3, e)}
			/>
			<label className="btn btn-outline-primary" htmlFor="wedbtn">
				СР
			</label>

			<input
				type="checkbox"
				className="btn-check"
				id="thubtn"
				autoComplete="off"
				checked={checkedDays.includes(4)}
				onChange={(e) => handleCheckboxChange(4, e)}
			/>
			<label className="btn btn-outline-primary" htmlFor="thubtn">
				ЧТ
			</label>

			<input
				type="checkbox"
				className="btn-check"
				id="fribtn"
				autoComplete="off"
				checked={checkedDays.includes(5)}
				onChange={(e) => handleCheckboxChange(5, e)}
			/>
			<label className="btn btn-outline-primary" htmlFor="fribtn">
				ПТ
			</label>

			<input
				type="checkbox"
				className="btn-check"
				id="satbtn"
				autoComplete="off"
				checked={checkedDays.includes(6)}
				onChange={(e) => handleCheckboxChange(6, e)}
			/>
			<label className="btn btn-outline-primary" htmlFor="satbtn">
				СБ
			</label>

			<input
				type="checkbox"
				className="btn-check"
				id="sanbtn"
				autoComplete="off"
				checked={checkedDays.includes(0)}
				onChange={(e) => handleCheckboxChange(0, e)}
			/>
			<label className="btn btn-outline-primary" htmlFor="sanbtn">
				ВС
			</label>
		</div>
	);
});
