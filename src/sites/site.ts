import { FileWriter } from "../utlity/file";
import { Waiter } from "../utlity/waiter";

export declare type TypeOfPager<T extends Pager<R>, R> = { new(): T; };

export class Site<T> {
    pager: Pager<T>;
    results: T[];

    constructor(public siteName: string, public startUrl: string, pager: TypeOfPager<Pager<T>, T>) {
        this.pager = new pager();
    }

    addResults(data: T[]) {
        if (!this.results){
            this.results = [];
        }

        this.results.push(...data);
    }

    async scrap(startPage: number, toPage?: number){
        console.log("Start Scraping", this.startUrl);
        let more = true;
        let lastPage = startPage;
        try {
            for (let index = startPage; more; index++) {
                lastPage = index;
                const pageResults = await this.pager.getNextPage(index);
                this.addResults(pageResults);
                
                if ((toPage && index === toPage) || !this.pager.hasNextPage(index)){
                    more = false;
                }
                await Waiter.wait(1);
            }
        }
        catch(e){
            console.log("Error:", e);
        }

        await FileWriter.writeResults(this.results, `${this.siteName}.${startPage}-${lastPage}.json`);
    }
}

export abstract class Pager<T> {
    pageUrl: string;

    abstract getNextPage(currentPage: number, options?: any): Promise<T[]>;
    abstract hasNextPage(currentPage: number): boolean;
}