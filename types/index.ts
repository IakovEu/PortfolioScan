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