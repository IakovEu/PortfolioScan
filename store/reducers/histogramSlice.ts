import { InitialHistogramState } from '@/types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: InitialHistogramState = {
	isEmpty: true,
	total: null,
	withRisk: null,
};

export const histogramSlice = createSlice({
	name: 'histogram',
	initialState,
	reducers: {
		setHistogram: (state, action) => {
			state.isEmpty = false;
			state.total = [...action.payload[0].data].sort(
				(a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
			);

			state.withRisk = [...action.payload[1].data].sort(
				(a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
			);
		},
		clearPreviousHistogram: (state) => {
			state.isEmpty = true;
			state.total = null;
			state.withRisk = null;
		},
	},
});

export const { setHistogram, clearPreviousHistogram } = histogramSlice.actions;
