export const innValidator = (inn: string | number | null): boolean => {
	if (inn === null) {
		return false;
	}

	let result = false;

	if (typeof inn === 'number') {
		inn = inn.toString();
	} else if (typeof inn !== 'string') {
		inn = '';
	}

	if (
		!inn.length ||
		[10, 12].indexOf(inn.length) === -1 ||
		/[^0-9]/.test(inn)
	) {
		return false;
	} else {
		const checkDigit = (inn: string, coefficients: number[]) => {
			let n = 0;
			for (const i in coefficients) {
				n += coefficients[i] * parseInt(inn[i], 10);
			}
			return Math.floor((n % 11) % 10);
		};
		switch (inn.length) {
			case 10:
				const n10 = checkDigit(inn, [2, 4, 10, 3, 5, 9, 4, 6, 8]);
				if (n10 === parseInt(inn[9], 10)) {
					result = true;
				}
				break;
			case 12:
				const n11 = checkDigit(inn, [7, 2, 4, 10, 3, 5, 9, 4, 6, 8]);
				const n12 = checkDigit(inn, [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8]);
				if (n11 === parseInt(inn[10], 10) && n12 === parseInt(inn[11], 10)) {
					result = true;
				}
				break;
		}
	}
	return result;
};

export const limitValidator = (limit: string | null): boolean => {
	if (limit === null) {
		return false;
	} else if (limit.length === 0) {
		return true;
	} else if (
		isNaN(+limit) ||
		+limit > 1000 ||
		+limit < 1 ||
		!Number.isInteger(+limit)
	)
		return false;

	return true;
};
