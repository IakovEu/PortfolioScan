import { createSlice } from '@reduxjs/toolkit';

export interface InitialSearchState {
	sDate: string;
	eDate: string;
	inn: number;
	limit: number;
	tonality: string;
	checkboxes: {
		mFullness: boolean;
		inBusiness: boolean;
		mainRole: boolean;
		riskFactors: boolean;
		excludeTechNews: boolean;
		excludeAnnouncements: boolean;
		excludeDigests: boolean;
	};
}

const initialState: InitialSearchState = {
	sDate: '',
	eDate: '',
	tonality: 'Любая',
	inn: 0,
	limit: 0,
	checkboxes: {
		mFullness: true,
		inBusiness: true,
		mainRole: true,
		riskFactors: false,
		excludeTechNews: false,
		excludeAnnouncements: true,
		excludeDigests: false,
	},
};

export const searchConfigurationSlice = createSlice({
	name: 'searchConfiguration',
	initialState,
	reducers: {
		setTonality: (state, action) => {
			state.tonality = action.payload;
		},
		setInnAndLimit: (state, action) => {
			const { inn, limit } = action.payload;
			state.inn = inn;
			state.limit = limit;
		},
		clearPreviousResults: () => {
			return initialState;
		},
		setSDate: (state, action) => {
			state.sDate = action.payload;
		},
		setEDate: (state, action) => {
			state.eDate = action.payload;
		},
		setCheckboxes: (state, action) => {
			state.checkboxes.mFullness = action.payload[0];
			state.checkboxes.inBusiness = action.payload[1];
			state.checkboxes.mainRole = action.payload[2];
			state.checkboxes.riskFactors = action.payload[3];
			state.checkboxes.excludeTechNews = action.payload[4];
			state.checkboxes.excludeAnnouncements = action.payload[5];
			state.checkboxes.excludeDigests = action.payload[6];
		},
	},
});

export const {
	setTonality,
	setInnAndLimit,
	clearPreviousResults,
	setSDate,
	setEDate,
	setCheckboxes,
} = searchConfigurationSlice.actions;
