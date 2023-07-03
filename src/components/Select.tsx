import { ChangeEvent, memo, useState } from "react";
import { SelectPropsType } from "../types";

export const Select = memo(function ({
	options,
	onSelectedOption,
	hideDefaultOption = false,
}: SelectPropsType) {
	const [selectedOption, setSelectedOption] = useState("");

	const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
		onSelectedOption(e.target.value);
		setSelectedOption(e.target.value);
	};

	const defaultOption = hideDefaultOption ? options[0] : null;
	const selectOptions = hideDefaultOption ? options.slice(1) : options;

	return (
		<div className="select-container">
			<select
				className="form-select"
				value={selectedOption}
				onChange={handleSelectChange}
			>
				{defaultOption && (
					<option value="" disabled hidden>
						{defaultOption.text}
					</option>
				)}
				{selectOptions.map(
					(option: { value: number | string; text: string }) => (
						<option key={option.value} value={option.value}>
							{option.text}
						</option>
					)
				)}
			</select>
		</div>
	);
});
