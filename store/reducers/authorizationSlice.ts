import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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
		},
		deleteTokenData: (state) => {
			state.accessToken = '';
			state.expire = '';
		},
	},
});

export const { setTokenData, deleteTokenData } = authorizationSlice.actions;
