const BaseForm = require('../../../framework/baseForm');
const Element = require('../../../framework/element');

class newWindow extends BaseForm {
  constructor() {
    super('.example h3', 'New window web page');
  }

  get pageTitle() {
    return new Element('.example h3', 'Title of New window web page');
  }

  async getPageTitleText() {
    return this.pageTitle.getText();
  }
}

module.exports = new newWindow();
