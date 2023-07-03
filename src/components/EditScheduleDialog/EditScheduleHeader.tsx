import { memo } from "react";
import { EditScheduleHeaderPropsType } from "../../types";

export const EditScheduleHeader = memo(function ({
	headerText,
	handleCloseDialog,
}: EditScheduleHeaderPropsType) {
	return (
		<>
			<div className="modal-header">
				<h1 className="modal-title fs-5" id="editScheduleDialogLabel">
					{headerText}
				</h1>
				<button
					type="button"
					className="btn-close"
					aria-label="Close"
					onClick={handleCloseDialog}
				></button>
			</div>
		</>
	);
});
