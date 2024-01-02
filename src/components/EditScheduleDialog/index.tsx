import { useCallback, useEffect, useMemo, useState } from "react";
import DialogHeader from "./DialogHeader";
import DialogFooter from "./DialogFooter";

import DialogBody from "./DialogBody";
import {
	calculateDateEnd,
	calculateTimeEnd,
} from "../../utils/handleCalculations";
import { ScheduleDataType } from "../../types";

const EditScheduleDialog = ({
	dialogData,
	handleCloseDialog,
}: {
	dialogData: ScheduleDataType,
	handleCloseDialog: () => void;
}) => {
	const [scheduleData, setScheduleData] = useState<ScheduleDataType>(dialogData);

	const handleValueChange = useCallback(
		(key: string, value: number | string | number[]) => {
			setScheduleData((prevState) => {
				if (prevState[key] !== value) {
					return { ...prevState, [key]: value };
				}
				return prevState;
			});
		},
		[]
	);

	const handleSubmitBtn = useCallback(() => {
		console.log(scheduleData);
		handleCloseDialog();
	}, [handleCloseDialog, scheduleData]);

	const newTimeEnd = useMemo(
		() =>
			calculateTimeEnd(
				scheduleData.hourValue,
				scheduleData.hoursPerDay,
				scheduleData.timeStart,
				scheduleData.breakType
			),
		[
			scheduleData.hourValue,
			scheduleData.hoursPerDay,
			scheduleData.timeStart,
			scheduleData.breakType,
		]
	);

	useEffect(() => {
		handleValueChange("timeEnd", newTimeEnd);
	}, [newTimeEnd, handleValueChange]);

	const newDateEnd = useMemo(
		() =>
			calculateDateEnd(
				scheduleData.totalHoursValue,
				scheduleData.hoursPerDay,
				scheduleData.dateStart,
				scheduleData.weekdays
			),
		[
			scheduleData.totalHoursValue,
			scheduleData.hoursPerDay,
			scheduleData.dateStart,
			scheduleData.weekdays,
		]
	);

	useEffect(() => {
		handleValueChange("dateEnd", newDateEnd);
	}, [handleValueChange, newDateEnd]);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				handleCloseDialog();
			}
		};
		document.addEventListener("keydown", handleKeyDown);
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [handleCloseDialog]);

	return (
		<div
			className="modal modal-xl fade show d-block"
			id="editScheduleDialog"
			aria-labelledby="editScheduleDialogLabel"
			role="dialog"
			aria-hidden={false}
			tabIndex={-1}
		>
			<div
				className="modal-dialog modal-dialog-scrollable"
				role="document"
			>
				<div className="modal-content">
					<DialogHeader
						headerText="Редактирование расписания"
						handleCloseDialog={handleCloseDialog}
					/>
					<DialogBody
						handleValueChange={handleValueChange}
						weekdays={scheduleData.weekdays}
						dateStart={scheduleData.dateStart}
						dateEnd={scheduleData.dateEnd}
						timeStart={scheduleData.timeStart}
						timeEnd={scheduleData.timeEnd}
						groupColor={scheduleData.groupColor}
					/>
					<DialogFooter
						handleCloseDialog={handleCloseDialog}
						handleSubmitBtn={handleSubmitBtn}
						submitBtnText="Добавить расписание"
					/>
				</div>
			</div>
		</div>
	);
};

export default EditScheduleDialog;
