import chai from 'chai';
import { goto, run, stop } from './framework/lib/browser';
const {expect} = chai;

describe.skip('Это демо сьюит', () => {
    let page;
    beforeEach(async () => {
        await run();
        page = await goto('https://planyway.com/app');
    })
    afterEach(async () => {
        await stop();
    })


    it('Регистрация', async() => {
        await page.waitForSelector('.pw-dialog-login__form > button');
        await page.click('#customer_menu_top');
        const [newPage] = await Promise.all([
            context.waitForEvent('page'),
            page.click('a[target=_blank]'),
        ]);

    });
    it('Это демо тест', async() => {

    });


})