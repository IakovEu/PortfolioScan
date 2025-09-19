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
