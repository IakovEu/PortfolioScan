import { createSlice } from '@reduxjs/toolkit';

interface Initial {
	isAuthorized: boolean;
	accessToken: string;
	expire: string;
	activeTariff: 0 | 1 | 2;
}

const initialState: Initial = {
	isAuthorized: false,
	accessToken: '',
	expire: '',
	activeTariff: 1,
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
	},
});

export const { setTokenData, deleteTokenData, setActiveTariff } =
	authorizationSlice.actions;
