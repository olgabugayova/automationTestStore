import { AccountPage } from '../pages/accountPage';
import { ApparelCategoryPage } from './ApparelCategoryPage';
import { CartPage } from './cartPage';
import { LoginPage } from '../pages/loginPage'
import { ProductPage } from './productPage';
import { ShoesPage } from './shoesPage';


const app = () => ({
    AccountPage: () => new AccountPage(),
    ApparelCategoryPage: () => new ApparelCategoryPage(),
    CartPage: () => new CartPage(),
    LoginPage: () => new LoginPage(),
    ProductPage: () => new ProductPage(),
    ShoesPage: () => new ShoesPage(),
})

export { app };
