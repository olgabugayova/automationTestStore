import playwright from 'playwright';

let browser;
let context;
let page;

async function goto(url){
    await page.goto(url);
    return page;
};
async function run(){
    browser = await playwright.chromium.launch({
        headless: true,
        slowMo: 1000,
    });
    context = await browser.newContext();
    page = await context.newPage();
};
async function stop(){
    await page.screenshot('demo.jpg');
    await page.close();
    await browser.close();
};

export { goto, run, stop }