const BaseForm = require('../../../framework/baseForm');
const Element = require('../../../framework/element');

class mainPage extends BaseForm {
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

module.exports = new mainPage();

// const { $ } = require('@wdio/globals');
// const Page = require('../mainPage');

// /**
//  * sub page containing specific selectors and methods for a specific page
//  */
// class LoginPage extends MainPage {
//   /**
//    * define selectors using getter methods
//    */
//   get inputUsername() {
//     return $('#username');
//   }

//   get inputPassword() {
//     return $('#password');
//   }

//   get btnSubmit() {
//     return $('button[type="submit"]');
//   }

//   /**
//    * a method to encapsule automation code to interact with the page
//    * e.g. to login using username and password
//    */
//   async login(username, password) {
//     await this.inputUsername.setValue(username);
//     await this.inputPassword.setValue(password);
//     await this.btnSubmit.click();
//   }

//   /**
//    * overwrite specific options to adapt it to page object
//    */
//   open() {
//     return super.open('login');
//   }
// }

// module.exports = new LoginPage();
