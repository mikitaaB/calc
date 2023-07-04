import { memo, useState, useEffect, useCallback } from "react";
import { StepInputProps } from "../types";

export const StepInput = memo(function ({
	onValueChange,
	maxValue,
	step,
	buttonText,
}: StepInputProps) {
	const [value, setValue] = useState<number>(0);

	const handleButtonClick = useCallback(
		(stepValue: number) => () => {
			const newValue = value + stepValue;
			if (newValue < 0 || newValue > maxValue) {
				return;
			}
			setValue(newValue);
		},
		[maxValue, value]
	);

	useEffect(() => {
		onValueChange(value);
	}, [onValueChange, value]);

	return (
		<div className="input-group">
			<button
				className="btn btn-primary"
				disabled={value <= 0}
				onClick={handleButtonClick(-step)}
				type="button"
			>
				-
			</button>
			<input
				type="text"
				className="form-control text-center"
				value={value}
				readOnly
			/>
			<button className="btn btn-secondary disabled">{buttonText}</button>
			<button
				className="btn btn-primary"
				disabled={value >= maxValue}
				onClick={handleButtonClick(step)}
				type="button"
			>
				+
			</button>
		</div>
	);
});
