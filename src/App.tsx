import { useCallback, useMemo, useState } from "react";
import Button from "./components/Button";
import {
	BREAK_TYPE_OPTIONS,
	CLASSROOM_OPTIONS,
	HOUR_TYPE_OPTIONS,
	TEACHER_OPTIONS,
} from "./constants";
import EditScheduleDialog from "./components/EditScheduleDialog";
import { getFormatDate } from "./utils/handleCalculations";

function App() {
	const [isOpenEditScheduleDialog, setIsOpenEditScheduleDialog] = useState(false);
	const handleDisplayDialog = useCallback(() => setIsOpenEditScheduleDialog(true), []);
	const handleCloseDialog = useCallback(() => setIsOpenEditScheduleDialog(false), []);

	const strToday = getFormatDate(new Date());
	const dialogData = useMemo(() => ({
		groupColor: "#FFFFF",
		totalHoursValue: 0,
		hoursPerDay: 0,
		hourValue: HOUR_TYPE_OPTIONS[0].value,
		breakType: BREAK_TYPE_OPTIONS[0].value,
		classroom: CLASSROOM_OPTIONS[0].value,
		teacher: TEACHER_OPTIONS[0].value,
		dateStart: strToday,
		dateEnd: strToday,
		timeStart: "07:00",
		timeEnd: "07:00",
		weekdays: [1, 3],
	}), [strToday]);

	return (
		<>
			<div className="text-center">
				<Button
					className="btn-outline-primary"
					onClick={handleDisplayDialog}
					label="Редактирование расписания"
					type="button"
					data-toggle="modal"
					data-target="#editScheduleDialog"
				/>
			</div>
			{isOpenEditScheduleDialog && <EditScheduleDialog
				dialogData={dialogData}
				handleCloseDialog={handleCloseDialog}
			/>}
		</>
	);
}

export default App;
