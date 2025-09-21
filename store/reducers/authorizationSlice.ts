import { InitialAuthorizationState } from '@/types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: InitialAuthorizationState = {
	// Я добавил маркер состояния, чтобы в коде сразу было понятно, что я проверяю, в остальных слайсах тоже
	isAuthorized: false,
	accessToken: '',
	expire: '',
	activeTariff: 0,
	usedCompanies: null,
	limitCompanies: null,
};

export const authorizationSlice = createSlice({
	name: 'authorization',
	initialState,
	reducers: {
		setTokenData: (state, action) => {
			state.accessToken = action.payload.accessToken;
			state.expire = action.payload.expire;
			state.isAuthorized = true;
			// симуляция назначения тарифа
			state.activeTariff = Math.floor(Math.random() * 3) as 0 | 1 | 2;
		},
		deleteTokenData: (state) => {
			state.accessToken = '';
			state.expire = '';
			state.isAuthorized = false;
		},
		// По логике он должен быть но апи для получения тарифа пользователя нет
		setActiveTariff: (state, action) => {
			state.activeTariff = action.payload;
		},
		setUsedAndLimit: (state, action) => {
			state.usedCompanies = action.payload.usedCompanyCount;
			state.limitCompanies = action.payload.companyLimit;
		},
		incrUsedDecrLimit: (state) => {
			if (state.usedCompanies !== null && state.limitCompanies !== null) {
				state.usedCompanies += 1;
				state.limitCompanies -= 1;
			}
		},
		clearUsedAndLimit: (state) => {
			state.usedCompanies = null;
			state.limitCompanies = null;
		},
	},
});

export const {
	setTokenData,
	deleteTokenData,
	setActiveTariff,
	setUsedAndLimit,
	incrUsedDecrLimit,
	clearUsedAndLimit,
} = authorizationSlice.actions;
