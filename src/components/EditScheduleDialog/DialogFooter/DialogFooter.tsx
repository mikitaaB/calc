import { memo } from "react";
import Button from "../../Button";
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
					<Button
						onClick={handleCloseDialog}
						label="Отмена"
						type="button"
					/>
				</div>
				<div className="me-1">
					<Button
						className="btn-outline-dark"
						onClick={handleSubmitBtn}
						label={submitBtnText}
						type="submit"
					/>
				</div>
			</div>
		</div>
	);
});

export default DialogFooter;
