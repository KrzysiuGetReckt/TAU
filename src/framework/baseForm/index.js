const timeouts = require('../../environment/timeouts');
const Element = require('../element');
const Logger = require('../logger');

/**
 * Overriding commands from WebdriverIO regarding Forms
 * Adding Assert funcitonality
 * Adding Logging functionality
 */

module.exports = class BaseForm {
  constructor(locator, name) {
    this.locator = locator;
    this.name = name;
    this.form = new Element(this.locator, this.name);
  }

  getFormName = () => this.name;

  get loginNav() {
    return new Element('nav .account', 'Account navigation element');
  }

  get logoutBtn() {
    return new Element('nav .logout', 'Logout button element');
  }

  async isFormOpened() {
    const isOpened = await this.form.state().isExisting();
    Logger.info(`Form "${this.name}" is opened - "${isOpened}"`);
    return isOpened;
  }

  async waitForFormIsOpened() {
    Logger.info(`Waiting for form "${this.name}" to load`);
    const isOpened = await this.form
      .state()
      .waitForExist(timeouts.pageLoadTime);
    Logger.info(`Form "${this.name}" is opened - "${isOpened}"`);
    return isOpened;
  }

  async checkIfLoggedIn(reverse){
    Logger.info(`Checking if the user is logged in`);
    return await this.loginNav.state().assertIsExist(timeouts.explicit, timeouts.polling, reverse);
  }

  async clickLogout(){
    Logger.info(`Logging out of the account`);
    return await this.logoutBtn.click();
  }
};
