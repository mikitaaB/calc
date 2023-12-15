import { useState, useCallback, Suspense, lazy } from "react";

import Loader from "./components/Loader";
import Button from "./components/Button";
const EditScheduleDialog = lazy(
	() => import("./components/EditScheduleDialog")
);

function App() {
	const [isOpenEditScheduleDialog, setIsOpenEditScheduleDialog] =
		useState<boolean>(false);

	const handleDisplayDialog = useCallback(
		() => setIsOpenEditScheduleDialog((prevState) => !prevState),
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
				/>
			</div>
			{isOpenEditScheduleDialog && (
				<Suspense fallback={<Loader />}>
					<EditScheduleDialog
						handleCloseDialog={handleDisplayDialog}
					/>
				</Suspense>
			)}
		</>
	);
}

export default App;
