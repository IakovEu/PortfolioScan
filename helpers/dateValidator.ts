export const dateValidator = (
	sDate: string | null,
	eDate: string | null
): boolean => {
	if (sDate === null || eDate === null) {
		return false;
	}

	const [day1, month1, year1] = sDate.replaceAll(' ', '').split('.');
	const [day2, month2, year2] = eDate.replaceAll(' ', '').split('.');
	const date1 = new Date(`${year1}-${month1}-${day1}`);
	const date2 = new Date(`${year2}-${month2}-${day2}`);
	const now = new Date();

	if (date1 > now || date2 > now) {
		return false;
	}

	return date1 < date2;
};

export const formatDateToDDMMYY = (dateStr: string): string => {
	const date = new Date(dateStr);

	const day = date.getDate().toString().padStart(2, '0');
	const month = (date.getMonth() + 1).toString().padStart(2, '0');
	const year = date.getFullYear().toString();

	return `${day}.${month}.${year}`;
};

export const transformDate = (dateStr: string, time: string): string => {
	const [day, month, year] = dateStr.split('.');

	const date = new Date(
		Date.UTC(
			parseInt(year, 10),
			parseInt(month, 10) - 1,
			parseInt(day, 10),
			time === 'start' ? 0 : 23,
			time === 'start' ? 0 : 59,
			time === 'start' ? 0 : 59,
			0
		)
	);
	
	return date.toISOString();
};