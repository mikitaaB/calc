import { useState, useCallback, Suspense, lazy } from "react";

import { Loader } from "./components/Loader";
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
				<button
					type="button"
					className="btn btn-outline-primary"
					onClick={handleDisplayDialog}
				>
					Редактирование расписания
				</button>
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
