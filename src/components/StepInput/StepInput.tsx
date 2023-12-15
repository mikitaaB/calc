import { memo, useState, useEffect, useCallback } from "react";
import { StepInputProps } from "../../types";
import Button from "../Button";

const StepInput = memo(function ({
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
			<Button
				className="btn-primary"
				disabled={value <= 0}
				label="-"
				onClick={handleButtonClick(-step)}
				type="button"
			/>
			<input
				type="text"
				className="form-control text-center"
				value={value}
				readOnly
			/>

			<Button
				className="btn-secondary"
				disabled
				label={buttonText}
				type="button"
			/>
			<Button
				className="btn-primary"
				disabled={value >= maxValue}
				label="+"
				onClick={handleButtonClick(step)}
				type="button"
			/>
		</div>
	);
});

export default StepInput;
