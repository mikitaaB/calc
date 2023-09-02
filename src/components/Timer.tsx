import { memo } from "react";
import { TimerPropsType } from "../types";

export const Timer = memo(function ({
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
				disabled={!isEditStart}
			/>
			<button className="btn btn-secondary disabled">до</button>
			<input
				className="form-control text-center"
				value={end}
				type="text"
				disabled
			/>
		</div>
	);
});
