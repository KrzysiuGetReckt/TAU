const BaseForm = require('../../../framework/baseForm');
const Element = require('../../../framework/element');

class DragAndDrop extends BaseForm {
  constructor() {
    super('.example h3', 'Drag and Drop web page of the-internet.herokuapp');
  }

  get pageTitle() {
    return new Element(
      '.example h3',
      'Drag and Drop web page of the-internet.herokuapp'
    );
  }

  get columnATitle() {
    return new Element(
      '#column-a header',
      'Collumn A title of the Drag and Drop web page'
    );
  }

  get columnBTitle() {
    return new Element(
      '#column-b header',
      'Collumn B title of the Drag and Drop web page'
    );
  }

  get columnA() {
    return new Element('#column-a', 'Collumn A of the Drag and Drop web page');
  }

  get columnB() {
    return new Element('#column-b', 'Collumn B of the Drag and Drop web page');
  }

  async getColumnAText() {
    return this.columnATitle.getText();
  }

  async getColumnBText() {
    return this.columnBTitle.getText();
  }

  async DragAndDropAtoB() {
    return this.columnA(this.columnB);
  }

  async getPageTitleText() {
    return this.pageTitle.getText();
  }
}

module.exports = new DragAndDrop();
