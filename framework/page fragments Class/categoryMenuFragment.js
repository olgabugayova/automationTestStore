import { BasePage } from '../pagesClass/basePage';

class CategoryMenuClass extends BasePage {
    constructor(page) {
        super(page);
        this.apparelCategory = '#categorymenu > nav > ul > li:nth-child(2) > a';
        // this.booksCategory = '#categorymenu > nav > ul > li:nth-child(8) > a';
        // this.fragranceCategory = '#categorymenu > nav > ul > li:nth-child(5) > a';
        // this.haircareCategory = '#categorymenu > nav > ul > li:nth-child(7) > a';
        // this.home = '#categorymenu > nav > ul > li:nth-child(1) > a';
        // this.makeupCategory = '#categorymenu > nav > ul > li:nth-child(3) > a';
        // this.menCategory = '#categorymenu > nav > ul > li:nth-child(6) > a';
        // this.skincareCategory = '#categorymenu > nav > ul > li:nth-child(4) > a';
    }
    async gotoHome() {
        await this.page.click(this.home);
    };
    async gotoApparel() {
        await this.page.waitForSelector(this.apparelCategory);
        await this.page.click(this.apparelCategory);
    };
    // asynс gotoMakeup() {
    //     await this.page.waitForSelector(this.makeupCategory);
    //     await this.page.click(this.makeupCategory);
    // };
    // async gotoSkincare() {
    //     await this.page.waitForSelector(this.skincareCategory);
    //     await this.page.click(this.skincareCategory);
    // };
    // async gotoFragrance() {
    //     await this.page.waitForSelector(this.fragranceCategory);
    //     await this.page.click(this.fragranceCategory);
    // };
    // async gotoMen() {
    //     await this.page.waitForSelector(this.menCategory);
    //     await this.page.click(this.menCategory);
    // };
    // async gotoHaircare() {
    //     await this.page.waitForSelector(this.haircareCategory);
    //     await this.page.click(this.haircareCategory);
    // };
    // async gotoBooks() {
    //     await this.page.waitForSelector(this.booksCategory);
    //     await this.page.click(this.booksCategory);
    // }
}

export { CategoryMenuClass };
