const ProductPage = function () {
    const addButton = '#product > fieldset > div:nth-child(6) > ul > li > a';
    const productName = '#product_details > div > div:nth-child(2) > div > div > h1 > span';
    const sizeOption = '#option344747';


    this.addToCart = async function (page) {
        await page.waitForSelector(productName);
        await page.click(sizeOption);
        await page.click(addButton);

    };

    this.getProductName = async function (page) {
        await page.waitForSelector(productName);
        const productNameText = await page.textContent(productName);
        return productNameText;
    };
}

export { ProductPage }
