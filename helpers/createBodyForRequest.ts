import { BodyArgs } from '@/types';
import { transformDate } from './dateValidator';

const transformTonality = (tonality: string): string => {
	if (tonality === 'Позитивная') {
		return 'Positive';
	} else if (tonality === 'Негативная') {
		return 'Negative';
	} else {
		return 'Any';
	}
};

export const createBody = (data: BodyArgs) => {
	const body = {
		issueDateInterval: {
			startDate: transformDate(data.sDate, 'start'),
			endDate: transformDate(data.eDate, 'end'),
		},
		searchContext: {
			targetSearchEntitiesContext: {
				targetSearchEntities: [
					{
						type: 'company',
						sparkId: null,
						entityId: null,
						inn: data.inn,
						maxFullness: data.mFullness,
						inBusinessNews: data.inBusiness,
					},
				],
				onlyMainRole: data.mainRole,
				tonality: transformTonality(data.tonality),
				onlyWithRiskFactors: data.riskFactors,
				riskFactors: {
					and: [],
					or: [],
					not: [],
				},
				themes: {
					and: [],
					or: [],
					not: [],
				},
			},
			themesFilter: {
				and: [],
				or: [],
				not: [],
			},
		},
		searchArea: {
			includedSources: [],
			excludedSources: [],
			includedSourceGroups: [],
			excludedSourceGroups: [],
		},
		attributeFilters: {
			excludeTechNews: !data.excludeTechNews,
			excludeAnnouncements: !data.excludeAnnouncements,
			excludeDigests: !data.excludeDigests,
		},
		similarMode: 'duplicates',
		limit: data.limit,
		sortType: 'sourceInfluence',
		sortDirectionType: 'desc',
		intervalType: 'month',
		histogramTypes: ['totalDocuments', 'riskFactors'],
	};

	return body;
};
