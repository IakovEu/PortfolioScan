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

export const createBody = (
	sDate: string,
	eDate: string,
	inn: number,
	mFullness: boolean,
	inBusiness: boolean,
	mainRole: boolean,
	riskFactors: boolean,
	excludeTechNews: boolean,
	excludeAnnouncements: boolean,
	excludeDigests: boolean,
	limit: number,
	tonality: string
) => {
	const body = {
		issueDateInterval: {
			startDate: transformDate(sDate, 'start'),
			endDate: transformDate(eDate, 'end'),
		},
		searchContext: {
			targetSearchEntitiesContext: {
				targetSearchEntities: [
					{
						type: 'company',
						sparkId: null,
						entityId: null,
						inn: inn,
						maxFullness: mFullness,
						inBusinessNews: inBusiness,
					},
				],
				onlyMainRole: mainRole,
				tonality: tonality,
				onlyWithRiskFactors: riskFactors,
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
			excludeTechNews: !excludeTechNews,
			excludeAnnouncements: !excludeAnnouncements,
			excludeDigests: !excludeDigests,
		},
		similarMode: 'duplicates',
		limit: limit,
		sortType: 'sourceInfluence',
		sortDirectionType: 'desc',
		intervalType: 'month',
		histogramTypes: ['totalDocuments', 'riskFactors'],
	};

	return body;
};
