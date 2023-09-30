import { ChangeEvent, memo, useCallback, useMemo, useRef } from "react";
import {
	hourTypeOptions,
	breakTypeOptions,
	classroomOptions,
	teacherOptions,
} from "../../../constants";
import Alert from "../../Alert";
import Select from "../../Select";
import StepInput from "../../StepInput";
import WeekDays from "../../WeekDays";
import Timer from "../../Timer";
import { EditScheduleBodyPropsType } from "../../../types";

const DialogBody = memo(function ({
	handleValueChange,
	weekdays,
	dateStart,
	dateEnd,
	timeStart,
	timeEnd,
}: EditScheduleBodyPropsType) {
	const colorInputRef = useRef<HTMLInputElement>(null);

	const handleTotalHoursChange = useCallback(
		(value: number) => handleValueChange("totalHoursValue", value),
		[handleValueChange]
	);
	const handleHoursPerDayChange = useCallback(
		(value: number) => handleValueChange("hoursPerDay", value),
		[handleValueChange]
	);
	const handleHourTypeChange = useCallback(
		(value: number | string) => handleValueChange("hourValue", value),
		[handleValueChange]
	);
	const handleBreakTypeChange = useCallback(
		(value: number | string) =>
			handleValueChange("breakType", Number(value)),
		[handleValueChange]
	);
	const handleClassroomChange = useCallback(
		(value: number | string) => handleValueChange("classroom", value),
		[handleValueChange]
	);
	const handleTeacherChange = useCallback(
		(value: number | string) => handleValueChange("teacher", value),
		[handleValueChange]
	);
	const handleWeekdaysChange = useCallback(
		(value: number[]) => handleValueChange("weekdays", value),
		[handleValueChange]
	);
	const handleGroupColorChange = useCallback(() => {
		if (colorInputRef.current !== null) {
			handleValueChange("groupColor", colorInputRef.current.value);
		}
	}, [handleValueChange]);
	const handleDateStartChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			handleValueChange("dateStart", e.currentTarget.value);
		},
		[handleValueChange]
	);

	const alertContent = useMemo(
		() => (
			<>
				Выбор <strong>преподавателя</strong> и{" "}
				<strong>аудитории</strong> не обязателен.
			</>
		),
		[]
	);

	return (
		<div className="modal-body" style={{ whiteSpace: "pre-line" }}>
			<form>
				<div className="row">
					<div className="d-flex justify-content-between align-items-center">
						<button
							type="button"
							className="btn btn-outline-primary disabled"
						>
							Онлайн школа
						</button>
						<div className="d-flex align-items-center ms-3">
							<label htmlFor="colorInput" className="form-label">
								Цвет группы:
							</label>
							<input
								className="form-control form-control-color ms-2"
								id="colorInput"
								ref={colorInputRef}
								type="color"
								defaultValue="#FFFFFF"
								onChange={handleGroupColorChange}
								title="Choose your color"
							/>
						</div>
					</div>
				</div>

				<div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 mt-3">
					<div className="col-md-4">
						<Select
							options={hourTypeOptions}
							onSelectedOption={handleHourTypeChange}
						/>
					</div>
					<div className="col-md-4">
						<StepInput
							onValueChange={handleTotalHoursChange}
							maxValue={1000}
							step={1}
							buttonText="Всего часов"
						/>
					</div>
					<div className="col-md-4">
						<Timer
							start={dateStart}
							end={dateEnd}
							isEditStart
							handleTimerChange={handleDateStartChange}
							type="date"
						/>
					</div>
				</div>

				<div className="row py-3">
					<WeekDays
						selWeekdays={weekdays}
						handleWeekdaysChange={handleWeekdaysChange}
					/>
				</div>

				<div className="row row-cols-1 row-cols-sm-2 row-cols-md-2">
					<div className="col col-md-4">
						<Select
							options={breakTypeOptions}
							onSelectedOption={handleBreakTypeChange}
						/>
					</div>
					<div className="col col-md-4">
						<StepInput
							onValueChange={handleHoursPerDayChange}
							maxValue={24}
							step={0.5}
							buttonText="Часов в день"
						/>
					</div>
					<div className="col-md-4">
						<Timer
							start={timeStart}
							end={timeEnd}
							isEditStart={false}
							type="time"
						/>
					</div>
				</div>

				<div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 mt-3">
					<div className="col col-md-7">
						<Select
							options={teacherOptions}
							onSelectedOption={handleTeacherChange}
							hideDefaultOption={true}
						/>
					</div>
					<div className="col col-md-5">
						<Select
							options={classroomOptions}
							onSelectedOption={handleClassroomChange}
							hideDefaultOption={true}
						/>
					</div>
				</div>
				<Alert>{alertContent}</Alert>
			</form>
		</div>
	);
});

export default DialogBody;
