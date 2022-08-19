import { site9ATAdvisors } from "./sites/AT-Advisers/site";
// import { site9ATPrivateFunds } from "./sites/AT-PrivateFunds/site";
import { Scraper } from "./utlity/scraper";

;

async function main() {
    // await Scraper.scrapSite(site9ATPrivateFunds, 3690, 100);
    await Scraper.scrapSite(site9ATAdvisors, 964, 100);
}
  
main();