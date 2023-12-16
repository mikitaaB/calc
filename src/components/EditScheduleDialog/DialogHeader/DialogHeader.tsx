import { memo } from "react";
import Button from "../../Button";
import { EditScheduleHeaderPropsType } from "../../../types";

const DialogHeader = memo(function ({
	headerText,
	handleCloseDialog,
}: EditScheduleHeaderPropsType) {
	return (
		<div className="modal-header">
			<h1 className="modal-title fs-5" id="editScheduleDialogHeader">
				{headerText}
			</h1>
			<Button
				className="btn-close"
				aria-label="Close"
				data-bs-dismiss="modal"
				onClick={handleCloseDialog}
				type="button"
			/>
		</div>
	);
});

export default DialogHeader;
