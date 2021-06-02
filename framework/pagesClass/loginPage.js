import { BasePage } from './basePage';
import { pageFragment } from '../page fragments Class/index';
import { PersonBuilder } from '../builder/newUser';

class LoginPageClass extends BasePage {
    constructor(page) {
        super(page);
        // this.page;
        this.accountAgreeButton =  '#AccountFrm_agree';
        this.accountRegisterButton = '#AccountFrm > div.form-group > div > div > button';
        this.loginButton = '#loginFrm > fieldset > button';
        this.registerButton = '#accountFrm > fieldset > button';
        this.accountAddressField = '#AccountFrm_address_1';
        this.accountCityField = '#AccountFrm_city';
        this.accountConfirmField = '#AccountFrm_confirm';
        this.accountEmailField = '#AccountFrm_email';
        this.accountFirstNameField = '#AccountFrm_firstname';
        this.accountLastNameField = '#AccountFrm_lastname';
        this.accountLoginnameField = '#AccountFrm_loginname';
        this.accountPasswordField = '#AccountFrm_password';
        this.accountPostcodeField = '#AccountFrm_postcode';
        this.accountZoneField = '#AccountFrm_zone_id';
        this.loginnameField = '#loginFrm #loginFrm_loginname';
        this.passwordField = '#loginFrm #loginFrm_password';
    }
    async login() {
        await pageFragment().NavBar().gotoLogin();

        await this.page.click(this.loginnameField);
        await this.page.fill(this.loginnameField, 'test_user5670695');
        await this.page.click(this.passwordField);
        await this.page.fill(this.passwordField, 'test');
        await this.page.click(this.loginButton);
    }
    async register() {
        await pageFragment().NavBar().gotoLogin(this.page);
        // await pageFragment().NavBar().gotoLogin(this.page);
        await this.page.click(this.registerButton);
        let newAccount = new PersonBuilder()
            .addFirstName()
            .addLastName()
            .addEmail()
            .addAddress()
            .addCity()
            .addUserName()
            .addPassword()
            .generate();

        let firstName = newAccount.firstName;

        await this.page.click(this.accountFirstNameField);
        await this.page.fill(this.accountFirstNameField, firstName);
        await this.page.click(this.accountLastNameField);
        await this.page.fill(this.accountLastNameField, newAccount.lastName);
        await this.page.click(this.accountEmailField);
        await this.page.fill(this.accountEmailField, newAccount.email);
        await this.page.click(this.accountAddressField);
        await this.page.fill(this.accountAddressField, newAccount.address);
        await this.page.click(this.accountCityField);
        await this.page.fill(this.accountCityField, newAccount.city);
        await this.page.click(this.accountZoneField);
        await this.page.selectOption(this.accountZoneField, '3513');
        await this.page.click(this.accountPostcodeField);
        await this.page.fill(this.accountPostcodeField, '000000');
        await this.page.click(this.accountLoginnameField);
        await this.page.fill(this.accountLoginnameField, newAccount.userName);
        let password = newAccount.password;
        await this.page.click(this.accountPasswordField);
        await this.page.fill(this.accountPasswordField, password);
        await this.page.click(this.accountConfirmField);
        await this.page.fill(this.accountConfirmField, password);
        await this.page.click(this.accountAgreeButton);
        await this.page.click(this.accountRegisterButton);

        return firstName;
    }
}

export { LoginPageClass };
