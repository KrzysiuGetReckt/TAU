const BaseForm = require('../../../framework/baseForm');
const Element = require('../../../framework/element');

class WyswingEditorIframe extends BaseForm {
  constructor() {
    super(`#tinymce`, `Wyswing Editor iframe of Wyswing Editor Page`);
  }

  get body() {
    return new Element(`#tinymce`, `The body of the iframe`);
  }

  async changeBodyText(text) {
    return this.body.clearAndType(text);
  }

  async getBodyText() {
    return this.body.getText();
  }
}
module.exports = new WyswingEditorIframe();
