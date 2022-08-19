
export interface PrivateFund {
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

export interface PrivateFundPageResponse {
    PrivateFunds: PrivateFund[];
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

export class PrivateFundPageRequest {
    CID = null;
    Countries = "";
    FundOfFunds = null;
    GAVFrom = null;
    GAVTo = null;
    MasterCompanyId = 0;
    MinimumInvestmentFrom = null;
    MinimumInvestmentTo = null;
    NoAdministrator = false;
    NoAuditor = false;
    NoCustodian = false;
    NoPrimeBroker = false;
    ServiceProviderId = [];
    SortAsc = false;
    SortKey = null;
    Text = null;
    Type = null;

    constructor(public PageNum = 1) {
    }
}