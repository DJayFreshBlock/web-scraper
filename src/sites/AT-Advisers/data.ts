
export interface Firm {
    URL: string; //"https://www.9at.com/PrivateFunds/Details/802-117522/147799",
    AdviserBusinessName: string; //"010118 MANAGEMENT, L.P.",
    IsMasterFund: boolean; //false,
    MasterFundName: string; //null,
    Administrator: string; //null,
    Auditor: string; //null,
    Custodian: string; //null,
    PrimeBroker: string; //null,
    Id: number; //147799,
    FilingID: number; //0,
    CID: string; //"802-117522",
    CIK: string; //null,
    FundId: string; //null,
    Name: string; //"01A GROUSE, L.P.",
    Country: string; //"United States",
    State: string; //"Delaware",
    FundOfFunds: number; //0,
    FundType: string; //"venture capital fund",
    FundTypeOther: string; //null,
    GrossAssetValue: number; //1006915.0000,
    MinimumInvestment: number; //0.0000,
    DateSubmitted: string; //null,
    DateModified: string; //null,
    Source: string; //null,
    Owners: number; //6,
    MasterFund: number; //0,
    AdviserName: string; //"010118 MANAGEMENT, L.P.",
    SourceLink: string; //null,
    IsClosed: boolean; //false
}

export interface AdvisorPageResponse {
    Companies: Firm[];
    TotalItems: number,

    // "Search": {
    //     "MasterCompanyId": null,
    //     "CID": null,
    //     "Text": null,
    //     "Type": null,
    //     "GAVFrom": null,
    //     "GAVTo": null,
    //     "MinimumInvestmentFrom": null,
    //     "MinimumInvestmentTo": null,
    //     "FundOfFunds": null,
    //     "Countries": null,
    //     "ServiceProviderId": [],
    //     "NoAdministrator": false,
    //     "NoAuditor": false,
    //     "NoCustodian": false,
    //     "NoPrimeBroker": false,
    //     "PageNum": 1,
    //     "SortKey": null,
    //     "SortAsc": false
    // },
    // "TotalGAV": 31263934322867.0000,
    // "FundTypes": null,
    // "Countries": null,
    // "MaxGAV": 0,
    // "MaxMinimumInvestment": 0.0,
    // "Selected": [],
    // "Watchlists": null,
    // "SelectedWatchlist": {
    //     "Count": 0,
    //     "Id": 0,
    //     "UserId": null,
    //     "Name": null,
    //     "Order": null
    // },
    // "SelectAll": false,
    // "ServiceProviders": [],
    // "SelectedProvider": null,
    // "CompanyBasicInfo": null
}

export class AdvisorPageRequest {
    Name = null;
    Location = null;
    PersonName = null;
    ADVFilingFrom = null;
    ADVFilingTo = null;
    AUMFrom = null;
    AUMTo = null;
    EmployeesFrom = null;
    EmployeesTo = null;
    PrivateFundsFrom = null;
    PrivateFundsTo = null;
    AdviserType = null;
    ClientType = null;
    CompensationArrangements = null;
    AdvisoryActivities = null;
    SMA = null;
    ERA = null;
    Removed = null;
    WatchlistId = 0;
    Watchlist = false;
    SortKey = null;
    SortAsc = false;
    AUMSlidePos = [0, 8685058695101];
    EmployeesSlidePos = [0, 41918];
    PrivateFundsSlidePos = [0, 9624];
    Countries = "";
    States = "";
    Cities = "";
    FundTypes = "";
    ServiceProviderId = [];
    NoAdministrator = false;
    NoAuditor = false;
    NoCustodian = false;
    NoPrimeBroker = false

    constructor(public PageNum = 1) {
    }
}