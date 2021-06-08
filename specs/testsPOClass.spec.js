import chai from 'chai';
import { application } from '../framework/index';
import { goto, run, stop } from '../framework/lib/browser';
import { pageFragment } from '../framework/page fragments/index';

const { expect } = chai;
let page;
let app;
describe('Регистрация и авторизация в системе', () => {

    beforeEach(async () => {
        await run();
        page = await goto('https://automationteststore.com');
        app = application(page);

    });
    afterEach(async () => {
        await stop();
    });

    it('Пользователь может зарегистрироваться в магазине на классах', async() => {
        const accountFirstName = await app.LoginPageClass().register();
        const profileNameText = await pageFragment().NavBar().getAccountName(page);
        expect(profileNameText).to.have.string(accountFirstName);
    });

    it.only('Пользователь может авторизоваться в магазине на классах', async() => {
        await app.LoginPageClass().login();
        let urlSite = await app.LoginPageClass().url();

        expect(urlSite).to.have.string('automationteststore');
        expect(await app.NavBar().getAccountName()).to.have.string('Welcome back Olga');
       // expect(await pageFragment().NavBar().getAccountName(page)).to.have.string('Welcome back Olga');
    });
});

describe('Основной функционал', async () => {
    beforeEach(async () => {
        await run();
        page = await goto('https://automationteststore.com');
        app = application(page);

        await app.LoginPageClass().login();
    });
    afterEach(async () => {
        await stop();
    });

    it('Пользователь может добавить товар в корзину', async() => {
        await pageFragment().CategoryMenu().gotoApparel(page);
        await app.ApparelCategoryPageClass().gotoShoesCategory();
        // await app().ApparelCategoryPage().gotoShoesCategory(page);
        await app().ShoesPage().gotoProduct(page);
        const productNameText = await app().ProductPage().getProductName(page);
        await app().ProductPage().addToCart(page);
        expect(await app().CartPage().getItemNameText(page)).to.have.string(productNameText);
        await app().CartPage().removeItem(page);
    });

    it('Пользователь может удалить товар из корзины', async() => {
        await pageFragment().CategoryMenu().gotoApparel(page);
        await app().ApparelCategoryPage().gotoShoesCategory(page);
        await app().ShoesPage().gotoProduct(page);
        await app().ProductPage().addToCart(page);
        await app().CartPage().removeItem(page);

        expect(await app().CartPage().getEmptyCartText(page)).to.have.string('Your shopping cart is empty!');
        expect(await app().CartPage().getItemsInCart(page)).to.have.string('0');
    });

    it('Пользователь может оформить заказ', async() => {
        await pageFragment().CategoryMenu().gotoApparel(page);
        await app().ApparelCategoryPage().gotoShoesCategory(page);
        await app().ShoesPage().gotoProduct(page);

        const productNameText = await app().ProductPage().getProductName(page);

        await app().ProductPage().addToCart(page);
        await app().CartPage().checkout(page);
        await app().CheckoutConfPage().confirmOrder(page);
        expect(await app().CheckoutSuccessPage().getOrderConfirmation(page)).to.have.string('Your Order Has Been Processed!');

        await app().CheckoutSuccessPage().gotoInvoicePage(page);
        expect(await app().InvoicePage().getInvoiceProductName(page)).to.have.string(productNameText);
    });
});
