import { BasePage } from '../pagesClass/basePage';

class CategoryMenuClass extends BasePage {
    constructor(page) {
        super(page);
        this.apparelCategory = '#categorymenu > nav > ul > li:nth-child(2) > a';
    }
    async gotoHome() {
        await this.page.click(this.home);
    };
    async gotoApparel() {
        await this.page.waitForSelector(this.apparelCategory);
        await this.page.click(this.apparelCategory);
    };
}

export { CategoryMenuClass }
