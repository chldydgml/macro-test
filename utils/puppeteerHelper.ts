import puppeteer from 'puppeteer';

export const startYouTubeMacro = async() => {
    const browser = await puppeteer.launch({ headless: false});
    const page = await browser.newPage();

    await page.goto('https://www.youtube.com');
}