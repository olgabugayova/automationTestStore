import { ApparelCategoryPageClass, LoginPageClass } from './pagesClass/index';
import { CategoryMenuClass, NavBarClass } from './page fragments Class/index';


const application = (page) => ({
    ApparelCategoryPageClass: () => new ApparelCategoryPageClass(page),
    // CartPage: () => new CartPage(),
    CategoryMenu: () => new CategoryMenuClass(page),
    // CheckoutConfPage: () => new CheckoutConfPage(),
    // CheckoutSuccessPage: () => new CheckoutSuccessPage(),
    // InvoicePage: () => new InvoicePage(),
    LoginPageClass: () => new LoginPageClass(page),
    NavBar: () => new NavBarClass(page),
    // ProductPage: () => new ProductPage(),
    // ShoesPage: () => new ShoesPage(),
})

export { application }
