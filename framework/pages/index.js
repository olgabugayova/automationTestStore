import { ApparelCategoryPage } from './apparelCategoryPage';
import { CartPage } from './cartPage';
import { CheckoutConfPage } from './checkoutConfPage';
import { CheckoutSuccessPage } from './checkoutSuccessPage';
import { InvoicePage } from './invoicePage';
import { LoginPage } from '../pages/loginPage'
import { ProductPage } from './productPage';
import { ShoesPage } from './shoesPage';

const app = () => ({
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
