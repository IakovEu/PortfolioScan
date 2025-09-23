export const passwordValidator = (password: string) => {
	if (password.length > 0 && password.length < 6) return true;
	return false;
};

export const loginValidator = (login: string) => {
	if (
		login.length === 0 ||
		(login.length <= 20 && !isNaN(+login.at(-1)!) && login.slice(0, 2) === 'sf')
	) {
		return false;
	}
	return true;
};
