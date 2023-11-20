const BaseForm = require('../../../framework/baseForm');
const Element = require('../../../framework/element');

class securePage extends BaseForm {
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
    return this.securePageUniqe;
  }

  async flashAlertText() {
    return this.flashInfo;
  }
}

module.exports = new securePage();

// const { $ } = require('@wdio/globals');
// const Page = require('./page');

// /**
//  * sub page containing specific selectors and methods for a specific page
//  */
// class SecurePage extends MainPage {
//   /**
//    * define selectors using getter methods
//    */
//   get flashAlert() {
//     return $('#flash');
//   }
// }

// module.exports = new SecurePage();
