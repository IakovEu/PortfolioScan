import { IdsInitialState } from '@/types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: IdsInitialState = {
	isEmpty: true,
	ids: null,
};

export const idSlice = createSlice({
	name: 'ids',
	initialState,
	reducers: {
		setIds: (state, action) => {
			state.isEmpty = false;
			state.ids = [...action.payload].map((el) => {
				return el.encodedId;
			});
		},
		clearPreviousIds: (state) => {
			state.isEmpty = true;
			state.ids = null;
		},
	},
});

export const { setIds, clearPreviousIds } = idSlice.actions;
