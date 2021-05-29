const InvoicePage = function () {
    const invoicePruduct = '#maincontainer > div > div.col-md-9.col-xs-12.mt20 > div > div > div:nth-child(2) > div.col-md-12.col-xs-12 > table > tbody > tr:nth-child(2) > td:nth-child(2) > a';

    this.getInvoiceProductName = async function (page) {
        await page.waitForSelector(invoicePruduct);
        const invoicePruductName = await page.textContent(invoicePruduct);
        return invoicePruductName
    }
}

export { InvoicePage }
