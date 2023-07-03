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
		<div className="row gx-0">
			<div className="col-sm-5">
				<input
					className="form-control text-center"
					value={start}
					onChange={handleTimerChange}
					type={type}
					disabled={!isEditStart}
				/>
			</div>
			<div className="col-sm-2">
				<button className="btn btn-secondary disabled">до</button>
			</div>
			<div className="col-sm-5">
				<input
					className="form-control text-center"
					value={end}
					type={type}
					disabled
				/>
			</div>
		</div>
	);
});
