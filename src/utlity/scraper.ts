import { Site } from "../sites/site";

export class Scraper {
    static async scrapSite<T>(site: Site<T>, totalPages: number, batchSize = 100, startIndex: number = 1) {
        for (let batchNumbers = 0; batchNumbers < (totalPages / batchSize); batchNumbers++) {
            const startNumber = startIndex + (batchNumbers * batchSize);
            const endNumber = ((batchNumbers + startIndex) * batchSize);
            console.log("Scrap:", startNumber, "-", Math.min(endNumber, totalPages));
            await site.scrap(startNumber, endNumber);
        }
    }
}