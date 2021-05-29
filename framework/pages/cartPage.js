const CartPage = function () {
    const cartTitle = '#maincontainer > div > div > div > h1 > span';
    const checkoutButton = '#cart_checkout2';
    const emptyCartContent = '#maincontainer > div > div > div > div';
    const itemsInCartLabel = 'body > div > header > div.container-fluid > div > div.block_7 > ul > li > a > span.label.label-orange.font14';
    const itemName = '#cart > div > div.container-fluid.cart-info.product-list > table > tbody > tr:nth-child(2) > td:nth-child(2) > a';
    const removeItemButton = '#cart > div > div.container-fluid.cart-info.product-list > table > tbody > tr:nth-child(2) > td:nth-child(7) > a';

    this.checkout = async function (page) {
        await page.waitForSelector(checkoutButton);
        await page.click(checkoutButton);
    };

    this.getEmptyCartText = async function (page) {
        const emptyCartText = await page.textContent(emptyCartContent);
        return emptyCartText;
    };

    this.getItemsInCart = async function (page) {
        const itemsInCart = await page.textContent(itemsInCartLabel);
        return itemsInCart;
    };

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
