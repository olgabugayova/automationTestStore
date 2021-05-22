const CategoryMenu = function() {
    const apparelCategory = '#categorymenu > nav > ul > li:nth-child(2) > a';
    const booksCategory = '#categorymenu > nav > ul > li:nth-child(8) > a';
    const fragranceCategory = '#categorymenu > nav > ul > li:nth-child(5) > a';
    const haircareCategory = '#categorymenu > nav > ul > li:nth-child(7) > a';
    const home = '#categorymenu > nav > ul > li:nth-child(1) > a';
    const makeupCategory = '#categorymenu > nav > ul > li:nth-child(3) > a';
    const menCategory = '#categorymenu > nav > ul > li:nth-child(6) > a';
    const skincareCategory = '#categorymenu > nav > ul > li:nth-child(4) > a';

    this.gotoHome = async function(page) {
        await page.click(home);
    };
    this.gotoApparel = async function(page) {
        await page.waitForSelector(apparelCategory);
        await page.click(apparelCategory);
    };
    this.gotoMakeup = async function(page) {
        await page.waitForSelector(makeupCategory);
        await page.click(makeupCategory);
    };
    this.gotoSkincare = async function(page) {
        await page.waitForSelector(skincareCategory);
        await page.click(skincareCategory);
    };
    this.gotoFragrance = async function(page) {
        await page.waitForSelector(fragranceCategory);
        await page.click(fragranceCategory);
    };
    this.gotoMen = async function(page) {
        await page.waitForSelector(menCategory);
        await page.click(menCategory);
    };
    this.gotoHaircare = async function(page) {
        await page.waitForSelector(haircareCategory);
        await page.click(haircareCategory);
    };
    this.gotoBooks = async function(page) {
        await page.waitForSelector(booksCategory);
        await page.click(booksCategory);
    };

}

export { CategoryMenu };