const NavBar = function() {
    const topMenuAccountButton = '#customer_menu_top > li > a';

    this.gotoMyAccount = async function(page) {
        await page.waitForSelector(topMenuAccountButton);
        await page.click(topMenuAccountButton);
    };
    this.gotoLogin = async function(page) {
        await page.waitForSelector(topMenuAccountButton);
        await page.click(topMenuAccountButton);
    };
    this.getAccountName = async function (page) {
        await page.waitForSelector(topMenuAccountButton);
        let topMenuAccountText = await page.textContent(topMenuAccountButton);
        return topMenuAccountText;
    };
};

export { NavBar }
