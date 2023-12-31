import { memo } from "react";
import { getFormatDate } from "../../utils/handleCalculations";
import { TimerPropsType } from "../../types";
import Button from "../Button";

const Timer = memo(function ({
	start,
	end,
	isEditStart,
	type,
	handleTimerChange,
}: TimerPropsType) {

	return (
		<div className="input-group">
			<input
				className="form-control text-center"
				value={start}
				onChange={handleTimerChange}
				type={!isEditStart ? "text" : type}
				max={!isEditStart ? undefined : getFormatDate(new Date())}
				disabled={!isEditStart}
			/>
			<Button
				className="btn-secondary"
				disabled
				label="до"
				type="button"
			/>
			<input
				className="form-control text-center"
				value={end}
				type="text"
				disabled
			/>
		</div>
	);
});

export default Timer;
