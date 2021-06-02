import { BasePage } from './basePage';

class ApparelCategoryPageClass extends BasePage {
    constructor(page) {
        super(page);
        this.shoesCategory = '#maincontainer > div > div > div > div > ul > li:nth-child(1) > div > a';
    }
    async gotoShoesCategory() {
        await this.page.waitForSelector(this.shoesCategory);
        await this.page.click(this.shoesCategory);
    }
}

export { ApparelCategoryPageClass };
