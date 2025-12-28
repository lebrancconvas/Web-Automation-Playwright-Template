import { chromium, type Page } from "playwright";
import { CONFIG } from "../config/config";

class MyPage {
    static async create(
        baseURL: string = "https://google.com/",
    ): Promise<Page> {
        const browser = await chromium.launch({
            headless: CONFIG.browser.isHeadless,
        });
        const context = await browser.newContext({
            locale: CONFIG.browser.locale,
        });
        const page = await context.newPage();
        await page.goto(baseURL, { waitUntil: "networkidle" });
        return page;
    }
}

export default MyPage;
