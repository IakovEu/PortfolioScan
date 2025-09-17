import { createSlice } from '@reduxjs/toolkit';

interface Initial {
	isAuthorized: boolean;
	accessToken: string;
	expire: string;
}

const initialState: Initial = {
	isAuthorized: false,
	accessToken: '',
	expire: '',
};

export const authorizationSlice = createSlice({
	name: 'authorization',
	initialState,
	reducers: {
		setTokenData: (state, action) => {
			state.accessToken = action.payload.accessToken;
			state.expire = action.payload.expire;
			state.isAuthorized = true;
		},
		deleteTokenData: (state) => {
			state.accessToken = '';
			state.expire = '';
			state.isAuthorized = false;
		},
	},
});

export const { setTokenData, deleteTokenData } = authorizationSlice.actions;
