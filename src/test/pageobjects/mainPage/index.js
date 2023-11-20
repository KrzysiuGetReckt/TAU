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
