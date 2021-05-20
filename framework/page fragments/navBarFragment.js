const NavBar = function() {
    // const loginRegisterButton = '#customer_menu_top > li > a';
    const topMenuAccountButton = '#customer_menu_top > li > a';
    // const topMenuAccountText = '#customer_menu_top > li > a > .menu_text'

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
