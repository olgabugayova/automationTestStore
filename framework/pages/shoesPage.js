const ShoesPage = function () {
    const product = '#maincontainer > div > div > div > div > div.thumbnails.grid.row.list-inline > div:nth-child(1) > div.fixed_wrapper > div > a';

    this.gotoProduct = async function (page) {
        await page.waitForSelector(product);
        await page.click(product);
    }
}

export { ShoesPage }
