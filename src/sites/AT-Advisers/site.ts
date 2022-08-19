import { Pager, Site } from "../site";
import { Firm, AdvisorPageRequest, AdvisorPageResponse } from "./data";
import * as request from 'request';

class ATAdvisorPager extends Pager<Firm> {
    pageUrl: string = 'https://9at.com/Home/SearchFirms/';
    lastResults: AdvisorPageResponse | null;
    totalResults: number = 0;

    async getNextPage(currentPage?: number | undefined, options?: any): Promise<Firm[]> {
        console.log("Open Page", currentPage, "items:", this.totalResults);
        this.lastResults = null;
        const pageResults = await this.requestPage(currentPage || 1, options);

        if (pageResults){
            const results = pageResults as AdvisorPageResponse;
            console.log("Results:", results.TotalItems, results.Companies.length);
            this.lastResults = results;
            this.totalResults += results.Companies.length;
            return results.Companies;
        }

        return [];
    }

    private requestPage(pageNumber: number, options?: any){
        return new Promise(resolve => {
            const data = JSON.stringify({ ...new AdvisorPageRequest(pageNumber), options });
            // console.log("Request:", this.pageUrl, "\n\tData:", data);
            request.post(this.pageUrl, {
                body: data,
                headers: {
                    "accept": "application/json",
                    "content-type": "application/json",
                },
            }, (err, res, body) => {
                console.log("Response:", res.statusCode, res.statusMessage);

                if (err){
                    console.log("ERRRO:", err, "\n----------------------\n", "\n----------------------\n");
                    resolve(null);
                }
                else if (res.statusCode !== 200){
                    console.log("Response:", JSON.stringify(res));
                    resolve(null);
                }
                else if(body) {
                    try {
                        resolve(JSON.parse(body));
                    }catch(e){
                        console.log("Body:", body);
                        resolve(null);
                    }
                }
                else {
                    console.log("Response:", JSON.stringify(res));
                    resolve(null);
                }
            });
        });
    }

    hasNextPage(_currentPage: number): boolean {
        return !!this.lastResults && this.totalResults < this.lastResults.TotalItems;
    }
}

export var site9ATAdvisors = new Site('9AT-Advisors', 'https://9at.com/Advisers', ATAdvisorPager);


/**
 * FILTER:
 * 
CID: null
Countries: ""
FundOfFunds: null
GAVFrom: 10000000
GAVTo: null
MasterCompanyId: 0
MinimumInvestmentFrom: 1000
MinimumInvestmentTo: 250000
NoAdministrator: false
NoAuditor: false
NoCustodian: false
NoPrimeBroker: false
PageNum: 1
ServiceProviderId: []
SortAsc: false
SortKey: null
Text: null
Type: "Liquidity Fund;Private Equity Fund;Real Estate Fund;Securitized Asset Fund;Venture Capital Fund;Other Private Fund;"
 */