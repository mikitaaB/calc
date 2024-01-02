import Button from "../../Button";
import { EditScheduleFooterPropsType } from "../../../types";

const DialogFooter = ({
	handleCloseDialog,
	handleSubmitBtn,
	submitBtnText,
}: EditScheduleFooterPropsType) => {
	return (
		<div className="modal-footer">
			<div className="d-flex justify-content-end mt-3">
				<div className="me-1">
					<Button
						onClick={handleCloseDialog}
						data-bs-dismiss="modal"
						label="Отмена"
						type="button"
					/>
				</div>
				<div className="me-1">
					<Button
						className="btn-outline-dark"
						data-bs-dismiss="modal"
						onClick={handleSubmitBtn}
						label={submitBtnText}
						type="submit"
					/>
				</div>
			</div>
		</div>
	);
};

export default DialogFooter;
