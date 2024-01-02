import {
	memo,
	useState,
	ChangeEvent,
	Fragment,
	useCallback,
} from "react";
import { WEEKDAYS } from "../../constants";
import { WeekDaysPropsType } from "../../types";

const WeekDays = memo(function ({
	selWeekdays,
	handleWeekdaysChange,
}: WeekDaysPropsType) {
	const [checkedDays, setCheckedDays] = useState<number[]>(selWeekdays);

	const handleCheckboxChange = useCallback(
		(day: number, event: ChangeEvent<HTMLInputElement>) => {
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
		},
		[checkedDays, handleWeekdaysChange]
	);

	const handleGroupChange = useCallback(
		(days: number[]) => {
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
		},
		[checkedDays, handleWeekdaysChange]
	);

	return (
		<div className="btn-group" role="group" aria-label="weekdays_group">
			{WEEKDAYS.map((day) => (
				<Fragment key={day.id}>
					<input
						type="checkbox"
						className="btn-check"
						id={day.id}
						autoComplete="off"
						onChange={(e) =>
							Array.isArray(day.val)
								? handleGroupChange(day.val)
								: handleCheckboxChange(day.val, e)
						}
						checked={
							Array.isArray(day.val)
								? day.val.every((d) => checkedDays.includes(d))
								: checkedDays.includes(day.val)
						}
					/>
					<label className="btn btn-outline-primary" htmlFor={day.id}>
						{day.label}
					</label>
				</Fragment>
			))}
		</div>
	);
});

export default WeekDays;
