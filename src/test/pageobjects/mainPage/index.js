const BaseForm = require('../../../framework/baseForm');
const Element = require('../../../framework/element');

class mainPage extends BaseForm {
  constructor() {
    super(`.heading`, 'Home page of  the-internet.herokuapp');
  }

  get formAuthentication() {
    return new Element('//li[21]/a', 'Form Authentication Link');
  }

  async clickFormAuthentication() {
    return this.formAuthentication.click();
  }
}

module.exports = new mainPage();

// /**
//  * main page object containing all methods, selectors and functionality
//  * that is shared across all page objects
//  */
// module.exports = class MainPage {
//   /**
//    * Opens a sub page of the page
//    * @param path path of the sub page (e.g. /path/to/page.html)
//    */
//   open(path) {
//     return browser.url(`https://the-internet.herokuapp.com/${path}`);
//   }
// };
