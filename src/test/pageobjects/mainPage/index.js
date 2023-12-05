const BaseForm = require('../../../framework/baseForm');
const Element = require('../../../framework/element');

class MainPage extends BaseForm {
  constructor() {
    super(`.heading`, 'Home page of  the-internet.herokuapp');
  }

  get linksList() {
    return new Element('ul li', 'Links list of Home Page');
  }

  linkList = (index) => {
    return new Element(`//li[${index}]/a`, `Choosing the ${index} list item.`);
  };

  async clickSpecificLink(index) {
    await this.linkList(index).scrollIntoView();
    return this.linkList(index).click();
  }

  async writeOutLinkListText() {
    return this.linksList.getTextFromElements();
  }
}

module.exports = new MainPage();
