import chai from 'chai';
import { goto, run, stop } from './framework/lib/browser';
const {expect} = chai;

describe('Регистрация и логин', () => {
    let page;
    beforeEach(async () => {
        await run();
        page = await goto('https://automationteststore.com');
    });
    afterEach(async () => {
        await stop();
    });


    it('Регистрация', async() => {
        await page.waitForSelector('#customer_menu_top');
        await page.click('#customer_menu_top');
        await page.click('#accountFrm > fieldset > button');
        await page.click('#AccountFrm_firstname');
        await page.fill('#AccountFrm_firstname', 'Olga');
        await page.click('#AccountFrm_lastname');
        await page.fill('#AccountFrm_lastname', 'Smith');
        await page.click('#AccountFrm_email');
        await page.fill('#AccountFrm_email', 'yamofix621@cnxingye.com');
        await page.click('#AccountFrm_address_1');
        await page.fill('#AccountFrm_address_1', 'Lenin avenue');
        await page.click('#AccountFrm_city');
        await page.fill('#AccountFrm_city', 'Tomsk');
        await page.click('#AccountFrm_zone_id');
        await page.selectOption('.registerbox #AccountFrm_zone_id', '3513');
        await page.click('#AccountFrm_postcode');
        await page.fill('#AccountFrm_postcode', '000000');
        // await page.click('.registerbox #AccountFrm_country_id');
        // await page.selectOption('.registerbox #AccountFrm_country_id', '223');
        await page.click('#AccountFrm_loginname');
        await page.fill('#AccountFrm_loginname', 'test_user5670695');
        await page.click('#AccountFrm_password');
        await page.fill('#AccountFrm_password', 'test');
        await page.click('#AccountFrm_confirm');
        await page.fill('#AccountFrm_confirm', 'test');
        await page.click('#AccountFrm_agree');
        await page.click('#AccountFrm > div.form-group > div > div > button');

    });

    it('Это демо тест', async() => {
        await page.waitForSelector('.block_2 > #customernav > #customer_menu_top > li > a');
        await page.click('.block_2 > #customernav > #customer_menu_top > li > a');
        await page.waitForSelector('#loginFrm #loginFrm_loginname');
        await page.click('#loginFrm #loginFrm_loginname');
        await page.fill('#loginFrm #loginFrm_loginname', 'test_user5670695');

        await page.waitForSelector('#loginFrm #loginFrm_password');
        await page.click('#loginFrm #loginFrm_password');
        await page.fill('#loginFrm #loginFrm_password', 'test');

        await page.waitForSelector('.col-sm-6 > .loginbox > #loginFrm > fieldset > .btn');
        await page.click('.col-sm-6 > .loginbox > #loginFrm > fieldset > .btn');

        const profileName = ('#customer_menu_top > li > a > .menu_text');
        await page.waitForSelector(profileName);
        const profileNameText = await page.textContent(profileName);
        expect('Welcome back Olga').to.have.string(profileNameText);
        await page.click(profileName);

    });
});

describe('UI tests', async () => {
    let page;
    beforeEach(async () => {
        await run();
        page = await goto('https://automationteststore.com');

        await page.waitForSelector('.block_2 > #customernav > #customer_menu_top > li > a');
        await page.click('.block_2 > #customernav > #customer_menu_top > li > a');
        await page.waitForSelector('#loginFrm #loginFrm_loginname');
        await page.click('#loginFrm #loginFrm_loginname');
        await page.fill('#loginFrm #loginFrm_loginname', 'test_user5670695');

        await page.waitForSelector('#loginFrm #loginFrm_password');
        await page.click('#loginFrm #loginFrm_password');
        await page.fill('#loginFrm #loginFrm_password', 'test');

        await page.waitForSelector('.col-sm-6 > .loginbox > #loginFrm > fieldset > .btn');
        await page.click('.col-sm-6 > .loginbox > #loginFrm > fieldset > .btn');

        const profileName = ('#customer_menu_top > li > a > .menu_text');
        await page.waitForSelector(profileName);
        await goto('https://automationteststore.com');
        });
    })
    afterEach(async () => {
        await stop();
    });

    it('Это демо тест', async() => {
        await page.waitForSelector('li:nth-child(2) > .subcategories > ul > li:nth-child(1) > a')
            await page.click('li:nth-child(2) > .subcategories > ul > li:nth-child(1) > a')

            await navigationPromise

            await page.waitForSelector('.thumbnails > .col-md-3:nth-child(1) > .thumbnail > a > img')
            await page.click('.thumbnails > .col-md-3:nth-child(1) > .thumbnail > a > img')

            await navigationPromise

            await page.waitForSelector('fieldset #option344747')
            await page.click('fieldset #option344747')

            await page.waitForSelector('fieldset > .mt20 > .productpagecart > li > .cart')
            await page.click('fieldset > .mt20 > .productpagecart > li > .cart')

            await navigationPromise

            await browser.close()
        })()

    });
})