const BaseForm = require('../../../framework/baseForm');
const Element = require('../../../framework/element');

class KeyPressesPage extends BaseForm {
  constructor() {
    super('.example > h3', 'Key Presses page of the-internet.herokuapp');
  }

  get pageTitle() {
    return new Element(
      '.example > h3',
      'Key Presses page of  the-internet.herokuapp'
    );
  }

  get keypressInput() {
    return new Element('#target', 'Keypress inpu box of Key Presses page');
  }

  get keypressedResult() {
    return new Element(
      '#result',
      'Keypressed result text box of Keypress page'
    );
  }

  async pageTitleText() {
    return this.pageTitle.getText();
  }

  async sendKeyPress(key) {
    await this.keypressInput.click();
    return browser.keys(key);
  }

  async getKeypressedText() {
    return this.keypressedResult.getText();
  }
}

module.exports = new KeyPressesPage();
