const BaseForm = require('../../../framework/baseForm');
const Element = require('../../../framework/element');

class SecurePage extends BaseForm {
  constructor() {
    super(`//div/div/h2`, 'Secure page after login of  the-internet.herokuapp');
  }

  get securePageUniqe() {
    return new Element(
      '//div/div/h2',
      'Secure page after login of  the-internet.herokuapp'
    );
  }
  get flashInfo() {
    return new Element('#flash', 'Secure Login info popup');
  }

  /**   As this page has no uniqe element this will return the
   *    text displayed on the site to check against
   */
  async securePageUniqeIsOpen() {
    return this.securePageUniqe.getText();
  }

  async flashAlertText() {
    return this.flashInfo.getText();
  }
}

module.exports = new SecurePage();
