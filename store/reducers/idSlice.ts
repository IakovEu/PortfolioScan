import { IdsInitialState } from '@/types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: IdsInitialState = {
	isEmpty: true,
	ids: null,
	sliceFrom: 0,
	sliceTo: 10,
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
			state.sliceFrom = 0;
			state.sliceTo = 10;
		},
		increaseSliceArgs: (state) => {
			state.sliceFrom += 10;
			state.sliceTo += 10;
		},
	},
});

export const { setIds, clearPreviousIds, increaseSliceArgs } = idSlice.actions;
