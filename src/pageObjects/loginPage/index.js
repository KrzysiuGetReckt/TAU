const BaseForm = require('../../framework/baseForm')
const Element = require('../../framework/element');

class LoginPage extends BaseForm {

    constructor(){
        super('h1.page-heading', 'Login Page of http://www.automationpractice.pl/index.php');
    }

    get loginEmailInput() {
        return new Element('#login_form #email', 'Email login input box');
    }

    get loginPassworInput() {
        return new Element('#login_form #passwd', 'Password login input box');
    }

    get signInButton() {
        return new Element('#login_form #SubmitLogin', 'Sign in button');
    }

    get logginError(){
        return new Element('.alert-danger li', 'Error message of login');
    }

    async typeLoginEmail(email) {
        return this.loginEmailInput.clearAndType(email);
    }

    async typeLoginPasswor(passwd) {
        return this.loginPassworInput.clearAndType(passwd);
    }

    async clickSignInButton() {
        return this.signInButton.click();
    }

    async createAccount(email, pswd){
        await this.loginEmailInput.state().waitForDisplayed();
        await this.typeLoginEmail(email);
        await this.typeLoginPasswor(pswd);
        await this.clickSignInButton();
    }
    
    async getErrorMessageText(){
        return this.logginError.getText();
    }
}

module.exports = new LoginPage();