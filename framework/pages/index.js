import { AccountPage } from '../pages/accountPage';
import { ApparelCategoryPage } from './ApparelCategoryPage';
import { CartPage } from './cartPage';
import { LoginPage } from '../pages/loginPage'
import { ProductPage } from './productPage';
import { ShoesPage } from './shoesPage';
import { CheckoutConfPage } from './checkoutConfPage';
import { CheckoutSuccessPage } from './checkoutSuccessPage';
import { InvoicePage } from './invoicePage';


const app = () => ({
    AccountPage: () => new AccountPage(),
    ApparelCategoryPage: () => new ApparelCategoryPage(),
    CartPage: () => new CartPage(),
    CheckoutConfPage: () => new CheckoutConfPage(),
    CheckoutSuccessPage: () => new CheckoutSuccessPage(),
    InvoicePage: () => new InvoicePage(),
    LoginPage: () => new LoginPage(),
    ProductPage: () => new ProductPage(),
    ShoesPage: () => new ShoesPage(),
})

export { app };
