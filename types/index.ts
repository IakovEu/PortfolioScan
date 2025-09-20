export interface BodyArgs {
	sDate: string;
	eDate: string;
	inn: number;
	mFullness: boolean;
	inBusiness: boolean;
	mainRole: boolean;
	riskFactors: boolean;
	excludeTechNews: boolean;
	excludeAnnouncements: boolean;
	excludeDigests: boolean;
	limit: number;
	tonality: string;
}

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

export interface InitialAuthorizationState {
	isAuthorized: boolean;
	accessToken: string;
	expire: string;
	activeTariff: 0 | 1 | 2;
}

interface DataItem {
	date: string;
	value: number;
}

export interface InitialHistogramState {
	isEmpty: boolean;
	total: DataItem[] | null;
	withRisk: DataItem[] | null;
}

interface idItem {
	encodedId: string;
}

export interface IdsInitialState {
	isEmpty: boolean;
	ids: idItem[] | null;
}
