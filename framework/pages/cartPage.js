const CartPage = function () {
    const cartTitle = '#maincontainer > div > div > div > h1 > span';
    const itemName = '#cart > div > div.container-fluid.cart-info.product-list > table > tbody > tr:nth-child(2) > td:nth-child(2) > a';
    const removeItemButton = '#cart > div > div.container-fluid.cart-info.product-list > table > tbody > tr:nth-child(2) > td:nth-child(7) > a';

    this.getItemNameText = async function (page) {
        await page.waitForSelector(cartTitle);
        await page.waitForSelector(itemName);
        const itemNameText = await page.textContent(itemName);
        return itemNameText;
    };

    this.removeItem = async function (page) {
        await page.waitForSelector(cartTitle);
        await page.waitForSelector(removeItemButton);
        await page.click(removeItemButton);
    };
}

export { CartPage }
