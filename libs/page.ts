import { chromium } from "playwright";
import { CONFIG } from "../config/config";

class Page {
    static async create(): Promise<Page> {
        const browser = await chromium.launch({
            headless: CONFIG.browser.isHeadless,
        });
        const context = await browser.newContext({
            locale: CONFIG.browser.locale,
        });
        const page = await context.newPage();
        return page;
    }
}

export default Page;
