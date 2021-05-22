import chai from 'chai';
import { app } from './framework/pages/index';
import { goto, run, stop } from './framework/lib/browser';
import { pageFragment } from './framework/page fragments/index'
// import { PersonBuilder } from './framework/builder/newUser';
// import { ProductPage } from './framework/pages/productPage';

const { expect } = chai;

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
        const accountFirstName = await app().LoginPage().register(page);
        const profileNameText = await pageFragment().NavBar().getAccountName(page);
        expect(profileNameText).to.have.string(accountFirstName);
    });

    it('Авторизация', async() => {
        await app().LoginPage().login(page);
        const profileNameText = await pageFragment().NavBar().getAccountName(page);
        expect(profileNameText).to.have.string('Welcome back Olga');
    });
});

describe('UI tests', async () => {
    let page;
    beforeEach(async () => {
        await run();
        page = await goto('https://automationteststore.com');

        await app().LoginPage().login(page);
        await goto('https://automationteststore.com');
    });
    afterEach(async () => {
        await stop();
    });

    it.only('Добавление товара в корзину', async() => {
        await pageFragment().CategoryMenu().gotoApparel(page);
        await app().ApparelCategoryPage().gotoShoesCategory(page);
        await app().ShoesPage().gotoProduct(page);
        const productNameText = await app().ProductPage().getProductName(page);
        await app().ProductPage().addToCart(page);
        const itemNameText = await app().CartPage().getItemNameText(page);
        expect(itemNameText).to.have.string(productNameText);
        await app().CartPage().removeItem(page);
    });
});
