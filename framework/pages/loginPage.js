import { pageFragment } from '../page fragments/index';
import { PersonBuilder } from '../builder/newUser';

const LoginPage = function () {
    const accountAgreeButton =  '#AccountFrm_agree';
    const accountRegisterButton = '#AccountFrm > div.form-group > div > div > button';
    const loginButton = '#loginFrm > fieldset > button';
    const registerButton = '#accountFrm > fieldset > button';
    const accountAddressField = '#AccountFrm_address_1';
    const accountCityField = '#AccountFrm_city';
    const accountConfirmField = '#AccountFrm_confirm';
    const accountEmailField = '#AccountFrm_email';
    const accountFirstNameField = '#AccountFrm_firstname';
    const accountLastNameField = '#AccountFrm_lastname';
    const accountLoginnameField = '#AccountFrm_loginname';
    const accountPasswordField = '#AccountFrm_password';
    const accountPostcodeField = '#AccountFrm_postcode';
    const accountZoneField = '#AccountFrm_zone_id';
    const loginnameField = '#loginFrm #loginFrm_loginname';
    const passwordField = '#loginFrm #loginFrm_password';

    this.login = async function (page) {
        await pageFragment().NavBar().gotoLogin(page);

        await page.click(loginnameField);
        await page.fill(loginnameField, 'test_user5670695');
        await page.click(passwordField);
        await page.fill(passwordField, 'test');
        await page.click(loginButton);
    };
    this.register = async function (page) {
        await pageFragment().NavBar().gotoLogin(page);
        await page.click(registerButton);
        const newAccount = new PersonBuilder()
        .addFirstName()
        .addLastName()
        .addEmail()
        .addAddress()
        .addCity()
        .addUserName()
        .addPassword()
        .generate();

        const firstName = newAccount.firstName;

        await page.click(accountFirstNameField);
        await page.fill(accountFirstNameField, firstName);
        await page.click(accountLastNameField);
        await page.fill(accountLastNameField, newAccount.lastName);
        await page.click(accountEmailField);
        await page.fill(accountEmailField, newAccount.email);
        await page.click(accountAddressField);
        await page.fill(accountAddressField, newAccount.address);
        await page.click(accountCityField);
        await page.fill(accountCityField, newAccount.city);
        await page.click(accountZoneField);
        await page.selectOption(accountZoneField, '3513');
        await page.click(accountPostcodeField);
        await page.fill(accountPostcodeField, '000000');
        await page.click(accountLoginnameField);
        await page.fill(accountLoginnameField, newAccount.userName);
        const password = newAccount.password;
        await page.click(accountPasswordField);
        await page.fill(accountPasswordField, password);
        await page.click(accountConfirmField);
        await page.fill(accountConfirmField, password);
        await page.click(accountAgreeButton);
        await page.click(accountRegisterButton);

        return firstName;
    };
};

export { LoginPage };
