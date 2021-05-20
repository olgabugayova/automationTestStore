import chai from 'chai';
import { app } from './framework/pages/index';
import { goto, run, stop } from './framework/lib/browser';
import { pageFragment } from './framework/page fragments/index'
import { PersonBuilder } from './framework/builder/newUser';

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

    it.only('Регистрация', async() => {
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
