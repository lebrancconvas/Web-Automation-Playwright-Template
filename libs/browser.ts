import { chromium, type BrowserType, Page } from "playwright";
import { CONFIG } from "../config/config";

class MyBrowser {
  browser: BrowserType;

  constructor(browser: BrowserType) {
    this.browser = browser;
  }

  static async create(): Promise<BrowserType> {
    const browser = await chromium.launch({ headless: CONFIG.browser.isHeadless });
    const myBrowser =new MyBrowser(browser);
  }
};
