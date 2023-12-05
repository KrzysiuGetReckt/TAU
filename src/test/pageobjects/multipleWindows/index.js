const BaseForm = require('../../../framework/baseForm');
const Element = require('../../../framework/element');

class MultipleWindows extends BaseForm {
  constructor() {
    super(`#content h3`, `Multiple Windows web page of the-internet.herokuapp`);
  }

  get pageTitle() {
    return new Element(
      `#content h3`,
      `Multiple Windows web page of the-internet.herokuapp`
    );
  }

  get newWindowLink() {
    return new Element(
      `#content .example a`,
      `New window link of Multiple windows page`
    );
  }

  async getPageTitleText() {
    return this.pageTitle.getText();
  }

  async clickNewWindowLink() {
    return this.newWindowLink.click();
  }
}

module.exports = new MultipleWindows();
