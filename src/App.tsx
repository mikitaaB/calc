import { useState, useCallback } from "react";

import Button from "./components/Button";
import EditScheduleDialog from "./components/EditScheduleDialog";

function App() {
	const [isOpenEditScheduleDialog, setIsOpenEditScheduleDialog] =
		useState<boolean>(false);

	const handleDisplayDialog = useCallback(
		() => setIsOpenEditScheduleDialog(true),
		[]
	);

	const handleCloseDialog = useCallback(
		() => setIsOpenEditScheduleDialog(false),
		[]
	);

	return (
		<>
			<div className="text-center">
				<Button
					className="btn-outline-primary"
					onClick={handleDisplayDialog}
					label="Редактирование расписания"
					type="button"
					data-bs-toggle="modal"
					data-bs-target="#editScheduleDialog"
				/>
			</div>
			<EditScheduleDialog
				isOpenEditScheduleDialog={isOpenEditScheduleDialog}
				handleCloseDialog={handleCloseDialog}
			/>
		</>
	);
}

export default App;
