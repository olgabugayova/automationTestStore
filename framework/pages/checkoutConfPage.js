const CheckoutConfPage = function () {
    const confirmButton = '#checkout_btn';

    this.confirmOrder = async function (page) {
        await page.waitForSelector(confirmButton);
        await page.click(confirmButton);
    };
}

export { CheckoutConfPage }