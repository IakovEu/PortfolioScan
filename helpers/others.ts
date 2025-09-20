export const numberToString = (num: number): string => {
	const lastDigit = num % 10;
	const lastTwoDigits = num % 100;
	let wordForm;

	if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
		wordForm = 'слов';
	} else if (lastDigit === 1) {
		wordForm = 'слово';
	} else if (lastDigit >= 2 && lastDigit <= 4) {
		wordForm = 'слова';
	} else {
		wordForm = 'слов';
	}

	return `${num} ${wordForm}`;
};

export const decodeHtmlEntities = (str: string) => {
	const txt = document.createElement('textarea');
	txt.innerHTML = str;
	return txt.value;
};
