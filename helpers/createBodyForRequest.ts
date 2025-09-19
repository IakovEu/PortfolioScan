import { BodyArgs } from '@/types';

const transformDate = (dateStr: string, time: string): string => {
	const [day, month, year] = dateStr.split('.');

	const date = new Date(
		Date.UTC(
			parseInt(year, 10),
			parseInt(month, 10) - 1,
			parseInt(day, 10),
			time === 'start' ? 0 : 23,
			time === 'start' ? 0 : 59,
			time === 'start' ? 0 : 59,
			0
		)
	);
	
	return date.toISOString();
};

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
