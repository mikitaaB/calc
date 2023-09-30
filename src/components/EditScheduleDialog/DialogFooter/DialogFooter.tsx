import { memo } from "react";
import { EditScheduleFooterPropsType } from "../../../types";

const DialogFooter = memo(function ({
	handleCloseDialog,
	handleSubmitBtn,
	submitBtnText,
}: EditScheduleFooterPropsType) {
	return (
		<div className="modal-footer">
			<div className="d-flex justify-content-end mt-3">
				<div className="me-1">
					<button className="btn" onClick={handleCloseDialog}>
						Отмена
					</button>
				</div>
				<div className="me-1">
					<button
						className="btn btn-outline-dark"
						onClick={handleSubmitBtn}
					>
						{submitBtnText}
					</button>
				</div>
			</div>
		</div>
	);
});

export default DialogFooter;
