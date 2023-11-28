const timeouts = require('../../../environment/timeouts');
const BaseForm = require('../../../framework/baseForm');
const Element = require('../../../framework/element');

class DynamicsControls extends BaseForm {
  constructor() {
    super(
      `#checkbox-example`,
      'Dynamic Controls page of  the-internet.herokuapp'
    );
  }

  get checkbox() {
    return new Element(
      '#checkbox input',
      'Checkbox input of Dynamic controls page'
    );
  }

  get newCheckbox() {
    return new Element(
      '.example #checkbox',
      'New Checkbox input of Dynamic controls page'
    );
  }

  get checkboxRemoveAddButton() {
    return new Element(
      '.example #checkbox-example button',
      'Remove or add Checkbox button of Dynamics controls page'
    );
  }

  get toggleInput() {
    return new Element(
      'div.example #input-example button',
      'Enable input button of Dynamic controls page'
    );
  }
  get inputBox() {
    return new Element(
      'div.example #input-example input',
      'Input box of Dynamic controls page'
    );
  }

  async clickCheckbox() {
    return this.checkbox.click();
  }

  async clickNewCheckbox() {
    return this.newCheckbox.click();
  }

  async waitForAddCheckbox() {
    return this.newCheckbox.state().waitForExist();
  }

  async waitForRemoveCheckbox() {
    return this.checkbox.state().waitForExist(5000, timeouts.polling, true);
  }

  async checkCheckboxState() {
    return this.checkbox.isElementSelected();
  }

  async checkNewCheckboxState() {
    return this.newCheckbox.isElementSelected();
  }

  async clickAddRemoveCheckbox() {
    return this.checkboxRemoveAddButton.click();
  }

  async clickToggleInput() {
    return this.toggleInput.click();
  }

  async checkInputState() {
    return this.inputBox.state().isEnabled();
  }
  async waitForEnabledInput() {
    return this.inputBox.state().waitForEnabled();
  }
  async waitForDisabledInput() {
    return this.inputBox.state().waitForEnabled(5000, timeouts.polling, true);
  }

  async typeInputBox(text) {
    return this.inputBox.clearAndType(text);
  }
  async getTextInputBox() {
    return this.inputBox.getValue();
  }
}

module.exports = new DynamicsControls();
