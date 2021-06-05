import { ApparelCategoryPageClass, LoginPageClass } from './pagesClass/index';
// import { CartPage } from './cartPage';
// import { CheckoutConfPage } from './checkoutConfPage';
// import { CheckoutSuccessPage } from './checkoutSuccessPage';
// import { InvoicePage } from './invoicePage';
//import { LoginPageClass } from './loginPage'
// import { ProductPage } from './productPage';
// import { ShoesPage } from './shoesPage';

const application = (page) => ({
    ApparelCategoryPageClass: () => new ApparelCategoryPageClass(page),
    // CartPage: () => new CartPage(),
    // CheckoutConfPage: () => new CheckoutConfPage(),
    // CheckoutSuccessPage: () => new CheckoutSuccessPage(),
    // InvoicePage: () => new InvoicePage(),
    LoginPageClass: () => new LoginPageClass(page),
    // ProductPage: () => new ProductPage(),
    // ShoesPage: () => new ShoesPage(),
})

export { application };