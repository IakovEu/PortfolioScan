import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isOk: 'ok',
};

export const exampleSlice = createSlice({
	name: 'example',
	initialState,
	reducers: {},
});

// export const { setVisibility, setUserData, editUserData } =
// 	authorizationSlice.actions;
