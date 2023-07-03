export const calculateTimeEnd = (
	hourValue: number,
	hoursPerDay: number,
	timeStart: string,
	breakType: number
): string => {
	const [hoursData, minutesData] = timeStart.split(":");
	const eduTime = hourValue * hoursPerDay;
	const minutesStart =
		Number.parseInt(hoursData) * 60 + Number.parseInt(minutesData);
	const minutesEnd = minutesStart + eduTime + breakType;
	const hours = Math.floor(minutesEnd / 60)
		.toString()
		.padStart(2, "0");
	const minutes = Math.floor(minutesEnd % 60)
		.toString()
		.padStart(2, "0");
	return `${hours}:${minutes}`;
};

export const calculateDateEnd = (
	totalHoursValue: number,
	hoursPerDay: number,
	dateStart: string,
	weekdays: number[]
): string => {
	if (totalHoursValue > 0 && hoursPerDay > 0 && weekdays.length > 0) {
		const startDate = new Date(dateStart);
		const daysCount = Math.ceil(totalHoursValue / hoursPerDay);
		const daysOfWeek = [7, 1, 2, 3, 4, 5, 6];

		const currentDate = startDate;
		let daysLeft = daysCount;

		if (weekdays.length === 0) {
			return startDate.toISOString().slice(0, 10);
		}

		while (daysLeft > 0) {
			const currentDayOfWeek = daysOfWeek[currentDate.getDay() % 7];
			if (weekdays.includes(currentDayOfWeek)) {
				daysLeft--;
			}
			currentDate.setDate(currentDate.getDate() + 1);
		}

		return currentDate.toISOString().slice(0, 10);
	}
	return new Date().toISOString().slice(0, 10);
};
