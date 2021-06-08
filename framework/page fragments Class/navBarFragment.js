import { BasePage } from '../pagesClass/basePage';

class NavBarClass extends BasePage {
    constructor(page) {
        super(page);
        this.topMenuAccountButton = '#customer_menu_top > li > a';
    };

    async gotoMyAccount() {
        await this.page.waitForSelector(this.topMenuAccountButton);
        await this.page.click(this.topMenuAccountButton);
    };
    async gotoLogin() {
        await this.page.waitForSelector(this.topMenuAccountButton);
        await this.page.click(this.topMenuAccountButton);
    };
    async getAccountName() {
        await this.page.waitForSelector(this.topMenuAccountButton);
        let topMenuAccountText = await this.page.textContent(this.topMenuAccountButton);
        return topMenuAccountText;
    };
};

export { NavBarClass }
