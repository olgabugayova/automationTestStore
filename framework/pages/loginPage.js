import { pageFragment } from '../page fragments/index';
import { PersonBuilder } from '../builder/newUser';

const LoginPage = function () {
    const accountAddressField = '#AccountFrm_address_1';
    const accountAgreeButton =  '#AccountFrm_agree';
    const accountCityField = '#AccountFrm_city';
    const accountConfirmField = '#AccountFrm_confirm';
    const accountEmailField = '#AccountFrm_email';
    const accountFirstNameField = '#AccountFrm_firstname';
    const accountLastNameField = '#AccountFrm_lastname';
    const accountLoginnameField = '#AccountFrm_loginname';
    const accountPasswordField = '#AccountFrm_password';
    const accountPostcodeField = '#AccountFrm_postcode';
    const accountRegisterButton = '#AccountFrm > div.form-group > div > div > button';
    const accountZoneField = '#AccountFrm_zone_id';
    const loginButton = '#loginFrm > fieldset > button';
    const loginnameField = '#loginFrm #loginFrm_loginname';
    const passwordField = '#loginFrm #loginFrm_password';
    const registerButton = '#accountFrm > fieldset > button';


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

        const firstName = new PersonBuilder().addFirstName();

        await page.click(accountFirstNameField);
        await page.fill(accountFirstNameField, firstName);
        await page.click(accountLastNameField);
        await page.fill(accountLastNameField, new PersonBuilder().addLastName());
        await page.click(accountEmailField);
        await page.fill(accountEmailField, new PersonBuilder().addEmail());
        await page.click(accountAddressField);
        await page.fill(accountAddressField, new PersonBuilder().addAddress());
        await page.click(accountCityField);
        await page.fill(accountCityField, new PersonBuilder().addCity());
        await page.click(accountZoneField);
        await page.selectOption(accountZoneField, '3513');
        await page.click(accountPostcodeField);
        await page.fill(accountPostcodeField, '000000');
        await page.click(accountLoginnameField);
        await page.fill(accountLoginnameField, new PersonBuilder().addUserName());
        const password = new PersonBuilder().addPassword();
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
