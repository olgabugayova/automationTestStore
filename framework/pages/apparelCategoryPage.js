const ApparelCategoryPage = function () {
    const shoesCategory = '#maincontainer > div > div > div > div > ul > li:nth-child(1) > div > a';

    this.gotoShoesCategory = async function (page) {
        await page.waitForSelector(shoesCategory);
        await page.click(shoesCategory);
    }
}

export { ApparelCategoryPage }
