import { LoginPage } from '../pages/loginPage'
import { AccountPage } from '../pages/accountPage';

const app = () => ({
    LoginPage: () => new LoginPage(),
    AccountPage: () => new AccountPage(),

})

export { app };
