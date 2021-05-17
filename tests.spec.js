import chai from 'chai';
import { goto, run, stop } from './framework/lib/browser';
import { PersonBuilder } from './framework/builder/newUser';
const {expect} = chai;

describe('Регистрация и авторизация в системе', () => {
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
        await page.fill('#AccountFrm_firstname', new PersonBuilder().addFirstName());
        await page.click('#AccountFrm_lastname');
        await page.fill('#AccountFrm_lastname', new PersonBuilder().addLastName());
        await page.click('#AccountFrm_email');
        await page.fill('#AccountFrm_email', new PersonBuilder().addEmail());
        await page.click('#AccountFrm_address_1');
        await page.fill('#AccountFrm_address_1', new PersonBuilder().addAddress());
        await page.click('#AccountFrm_city');
        await page.fill('#AccountFrm_city', new PersonBuilder().addCity());
        await page.click('#AccountFrm_zone_id');
        await page.selectOption('.registerbox #AccountFrm_zone_id', '3513');
        await page.click('#AccountFrm_postcode');
        await page.fill('#AccountFrm_postcode', '000000');
        await page.click('#AccountFrm_loginname');
        await page.fill('#AccountFrm_loginname', new PersonBuilder().addUserName());
        const password = new PersonBuilder().addPassword();
        await page.click('#AccountFrm_password');
        await page.fill('#AccountFrm_password', password);
        await page.click('#AccountFrm_confirm');
        await page.fill('#AccountFrm_confirm', password);
        await page.click('#AccountFrm_agree');
        await page.click('#AccountFrm > div.form-group > div > div > button');

    });

    it('Авторизация', async() => {
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
    afterEach(async () => {
        await stop();
    });

    it('Добавление товара в корзину', async() => {
        await page.waitForSelector('#categorymenu > nav > ul > li:nth-child(2) > a');
        await page.click('#categorymenu > nav > ul > li:nth-child(2) > a');

        await page.waitForSelector('#maincontainer > div > div > div > div > ul > li:nth-child(1) > div > a');
        await page.click('#maincontainer > div > div > div > div > ul > li:nth-child(1) > div > a');

        await page.waitForSelector('#maincontainer > div > div > div > div > div.thumbnails.grid.row.list-inline > div:nth-child(1) > div.fixed_wrapper > div > a');
        await page.click('#maincontainer > div > div > div > div > div.thumbnails.grid.row.list-inline > div:nth-child(1) > div.fixed_wrapper > div > a');

        await page.waitForSelector('#option344747');
        await page.click('#option344747');
        await page.fill('#product_quantity', '2');

        const itemName = ('#product_details > div > div:nth-child(2) > div > div > h1 > span');
        const itemNameText = await page.textContent(itemName);

        await page.click('#product > fieldset > div:nth-child(6) > ul > li > a');

        await page.waitForSelector('#maincontainer > div > div > div > h1 > span');
        const cartItemText = await page.textContent('#cart > div > div.container-fluid.cart-info.product-list > table > tbody > tr:nth-child(2) > td:nth-child(2) > a');
        expect(cartItemText).to.have.string(itemNameText);

        await page.click('#cart > div > div.container-fluid.cart-info.product-list > table > tbody > tr:nth-child(2) > td:nth-child(7) > a');

    });
    it('Удаление товаров из корзины', async() => {
        await page.waitForSelector('#categorymenu > nav > ul > li:nth-child(2) > a');
        await page.click('#categorymenu > nav > ul > li:nth-child(2) > a');

        await page.waitForSelector('#maincontainer > div > div > div > div > ul > li:nth-child(1) > div > a');
        await page.click('#maincontainer > div > div > div > div > ul > li:nth-child(1) > div > a');

        await page.waitForSelector('#maincontainer > div > div > div > div > div.thumbnails.grid.row.list-inline > div:nth-child(1) > div.fixed_wrapper > div > a');
        await page.click('#maincontainer > div > div > div > div > div.thumbnails.grid.row.list-inline > div:nth-child(1) > div.fixed_wrapper > div > a');

        await page.waitForSelector('#option344747');
        await page.click('#option344747');
        await page.fill('#product_quantity', '2');

        const itemName = ('#product_details > div > div:nth-child(2) > div > div > h1 > span');
        const itemNameText = await page.textContent(itemName);

        await page.click('#product > fieldset > div:nth-child(6) > ul > li > a');

        await page.waitForSelector('#maincontainer > div > div > div > h1 > span');

        await page.click('#cart > div > div.container-fluid.cart-info.product-list > table > tbody > tr:nth-child(2) > td:nth-child(7) > a');
        const emptyCartText = await page.textContent('#maincontainer > div > div > div > div');
        expect(emptyCartText).to.have.string('Your shopping cart is empty!');

        const itemsInCart = await page.textContent('body > div > header > div.container-fluid > div > div.block_7 > ul > li > a > span.label.label-orange.font14');
        expect(itemsInCart).to.have.string('0');

    });
    it('Оформление заказа', async() => {
        await page.waitForSelector('#categorymenu > nav > ul > li:nth-child(2) > a');
        await page.click('#categorymenu > nav > ul > li:nth-child(2) > a');

        await page.waitForSelector('#maincontainer > div > div > div > div > ul > li:nth-child(1) > div > a');
        await page.click('#maincontainer > div > div > div > div > ul > li:nth-child(1) > div > a');

        await page.waitForSelector('#maincontainer > div > div > div > div > div.thumbnails.grid.row.list-inline > div:nth-child(1) > div.fixed_wrapper > div > a');
        await page.click('#maincontainer > div > div > div > div > div.thumbnails.grid.row.list-inline > div:nth-child(1) > div.fixed_wrapper > div > a');

        await page.waitForSelector('#option344747');
        await page.click('#option344747');
        await page.fill('#product_quantity', '2');

        const itemNameText = await page.textContent('#product_details > div > div:nth-child(2) > div > div > h1 > span');

        await page.click('#product > fieldset > div:nth-child(6) > ul > li > a');

        await page.waitForSelector('#cart_checkout2');
        await page.click('#cart_checkout2');

        await page.waitForSelector('#checkout_btn');
        await page.click('#checkout_btn');

        await page.waitForSelector('#maincontainer > div > div > div > h1 > span.maintext');
        const orderConfirmation = await page.textContent('#maincontainer > div > div > div > h1 > span.maintext');
        expect(orderConfirmation).to.have.string('Your Order Has Been Processed!');

        await page.click('#maincontainer > div > div > div > div > section > p:nth-child(4) > a');
        await page.waitForSelector('#maincontainer > div > div.col-md-9.col-xs-12.mt20 > div > div > div:nth-child(2) > div.col-md-12.col-xs-12 > table > tbody > tr:nth-child(2) > td:nth-child(2) > a');

        const invoiceProductName = await page.textContent('#maincontainer > div > div.col-md-9.col-xs-12.mt20 > div > div > div:nth-child(2) > div.col-md-12.col-xs-12 > table > tbody > tr:nth-child(2) > td:nth-child(2) > a');

        expect(invoiceProductName).to.have.string(itemNameText);



    });
});
