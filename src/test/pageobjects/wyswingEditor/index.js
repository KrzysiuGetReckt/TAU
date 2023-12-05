const BaseForm = require('../../../framework/baseForm');
const Element = require('../../../framework/element');

class WyswingEditor extends BaseForm {
  constructor() {
    super(
      `div.example h3`,
      `Wyswing Editor web page of the-internet.herokuapp`
    );
  }

  get pageTitle() {
    return new Element(
      `div.example h3`,
      `Wyswing Editor web page of of the-internet.herokuapp`
    );
  }

  async getPageTitleText() {
    return this.pageTitle.getText();
  }
}
module.exports = new WyswingEditor();
