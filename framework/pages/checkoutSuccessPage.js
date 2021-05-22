const CheckoutSuccessPage = function () {
    const invoicePageLink = '#maincontainer > div > div > div > div > section > p:nth-child(4) > a';
    const orderConfirmation = '#maincontainer > div > div > div > h1 > span.maintext';

    this.getOrderConfirmation = async function (page) {
        await page.waitForSelector(orderConfirmation);
        const orderConfirmationText = await page.textContent(orderConfirmation);
        return orderConfirmationText;
    };

    this.gotoInvoicePage = async function (page) {
        await page.click(invoicePageLink);
    }
}

export { CheckoutSuccessPage }
