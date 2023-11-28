const BaseForm = require('../../../framework/baseForm');
const Element = require('../../../framework/element');

class LoginPage extends BaseForm {
  constructor() {
    super(`#login`, 'Login Page of the-internet.herokuapp');
  }

  get usernameInput() {
    return new Element('#username', 'Username Input box');
  }
  get passwordInput() {
    return new Element('#password', 'Password Input box');
  }
  get loginBtn() {
    return new Element('button[type="submit"]', 'Login btn');
  }
  get flashInfo() {
    return new Element('#flash', 'Login info popup');
  }

  async typeUsername(text) {
    return this.usernameInput.clearAndType(text);
  }

  async typePassword(text) {
    return this.passwordInput.clearAndType(text);
  }

  async clickLoginBtn() {
    return this.loginBtn.click();
  }

  async waitForFlashInfo() {
    return this.flashInfo.state().waitForDisplayed();
  }

  async flashAlertText() {
    return this.flashInfo.getText();
  }
}

module.exports = new LoginPage();
