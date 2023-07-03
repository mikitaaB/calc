import { useCallback, useEffect, useMemo, useState } from "react";
import { EditScheduleHeader } from "./EditScheduleHeader";
import {
	breakTypeOptions,
	classroomOptions,
	hourTypeOptions,
	teacherOptions,
} from "../../constants";
import { EditScheduleFooter } from "./EditScheduleFooter";

import { EditScheduleBody } from "./EditScheduleBody";
import {
	calculateDateEnd,
	calculateTimeEnd,
} from "../../utils/handleCalculations";
import { ScheduleDataType } from "../../types";

const EditScheduleDialog = ({
	handleCloseDialog,
}: {
	handleCloseDialog: () => void;
}) => {
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

	const strToday = new Date().toISOString().slice(0, 10);

	const [scheduleData, setScheduleData] = useState<ScheduleDataType>({
		groupColor: "#FFFFF",
		totalHoursValue: 0,
		hoursPerDay: 0,
		hourValue: hourTypeOptions[0].value,
		breakType: breakTypeOptions[0].value,
		classroom: classroomOptions[0].value,
		teacher: teacherOptions[0].value,
		dateStart: strToday,
		dateEnd: strToday,
		timeStart: "07:00",
		timeEnd: "07:00",
		weekdays: [1, 3],
	});

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

	return (
		<div
			className="modal modal-xl fade show"
			style={{ display: "block" }}
			id="editScheduleDialog"
			aria-labelledby="editScheduleDialogLabel"
			role="dialog"
			aria-hidden={false}
		>
			<div
				className="modal-dialog modal-dialog-scrollable"
				role="document"
			>
				<div className="modal-content">
					<EditScheduleHeader
						headerText="Редактирование расписания"
						handleCloseDialog={handleCloseDialog}
					/>
					<EditScheduleBody
						handleValueChange={handleValueChange}
						weekdays={scheduleData.weekdays}
						dateStart={scheduleData.dateStart}
						dateEnd={scheduleData.dateEnd}
						timeStart={scheduleData.timeStart}
						timeEnd={scheduleData.timeEnd}
					/>
					<EditScheduleFooter
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
