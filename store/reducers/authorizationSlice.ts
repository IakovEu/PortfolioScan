import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	loginOrRegister: 'login',
};

export const authorizationSlice = createSlice({
	name: 'authorization',
	initialState,
	reducers: {
		setClickedBtn: (state, action) => {
			state.loginOrRegister = action.payload;
		},
	},
});

export const { setClickedBtn } = authorizationSlice.actions;
